import {User} from "firebase/auth";
import {createContext, Dispatch, ReactNode, useEffect, useReducer} from "react";

import {List, subscribeListeners, Todo} from "../Services/Database"
import {useAuth} from "../Hooks/useAuth";

type UserDataContextProps = {
    children: ReactNode,
    user: User | null
}
type State = Array<List>

type Action = {
    value: List
    type: "read" | "update" | "delete",
}

type UserDataContextValue = {
    state: State,
    dispatch: Dispatch<Action>
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "read":

            let {todos, ...list} = action.value
            const newList: List = {...list}

            todos = typeof todos === 'object' ? todos : {}

            newList.todos = Object.entries(todos as Record<string, Todo>).map(
                ([id, todo])=>{ return {...todo, id} as Todo})

            return [...state, newList]

        case "update":

            return state.map(
                (record: List) => record.created === action.value.created ? action.value : record
            )

        case "delete":

            return state.filter(
                (record: List) => record.id !== action.value.id
            )

        default:
            
            return state
    }
}

const initialState: State = []

export const UserDataContext = createContext({} as UserDataContextValue)

export function UserDataContextProvider({children}: UserDataContextProps) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {user} = useAuth()

    useEffect(() => {
        if (user && user.uid) {
            return subscribeListeners(user.uid, {
                read: (value) => dispatch({type: "read", value}),
                update: (value) => dispatch({type: "update", value}),
                delete: (value) => dispatch({type: "delete", value})
            })
        }
    }, [user, dispatch])

    return (
        <UserDataContext.Provider value={{state, dispatch}}>
            {children}
        </UserDataContext.Provider>
    )
}