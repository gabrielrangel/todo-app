import {User} from "firebase/auth";
import {createContext, Dispatch, ReactNode, useEffect, useReducer} from "react";

import {DatabaseRecord, List, subscribeListeners} from "../Services/Database"
import {useAuth} from "../Hooks/useAuth";

type UserDataContextProps = {
    children: ReactNode,
    user: User | null
}
type State = Array<DatabaseRecord<List>>

type Action = {
    value: DatabaseRecord<List>,
    type: "read" | "update" | "delete",
}

type UserDataContextValue = {
    state: State,
    dispatch: Dispatch<Action>
}

function reducer(state: State, action: Action) {
    console.log({type: action.type, value: action.value})
    switch (action.type) {
        case "read":
            return [...state, action.value]
        case "update":
            return state.map(
                (record: DatabaseRecord<List>) => record.created === action.value.created ? action.value : record
            )
        case "delete":
            return state.filter(
                (record: DatabaseRecord<List>) => record.id !== action.value.id
            )
        default:
            return {...state}
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