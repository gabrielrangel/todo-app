import {User} from "firebase/auth";
import {createContext, Dispatch, ReactNode, useEffect, useReducer} from "react";

import {List, ListLoaderValReturn, listsLoader, newList} from "../Services/Database"
import {useAuth} from "../Hooks/useAuth";

type UserDataContextProps = {
    children: ReactNode,
    user: User | null
}
type State = Array<List>

type Action = {
    value: State
}

type UserDataContextValue = {
    state: State,
    dispatch: Dispatch<Action>
}

function reducer(state: State, action: Action) {
    const {value} = action
    value.forEach((newListValue) => {
        const listIndex = state.findIndex(({id}) => id === newListValue.id)

        if (listIndex === -1) {
            state.push(newListValue)
        } else {
            state[listIndex] = newListValue
        }
    })
    console.log(state)
    return state
}

const initialState: State = []

export const UserDataContext = createContext({} as UserDataContextValue)

export function UserDataContextProvider({children}: UserDataContextProps) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {user} = useAuth()

    useEffect(() => {
        if (user) {
            const [unsubscribe] = listsLoader(user.uid, (snapshot) => {
                const val: ListLoaderValReturn = snapshot.val()
                if (val) {
                    const parsedVal = Object.entries(val).map(([id, {title, todos = [], created}]) => {
                        return {id, title, todos, created} as List
                    })
                    dispatch({value: parsedVal})
                } else {
                    newList(user.uid)
                }
            })
            return unsubscribe
        }
    }, [user])

    return (
        <UserDataContext.Provider value={{state, dispatch}}>
            {children}
        </UserDataContext.Provider>
    )
}