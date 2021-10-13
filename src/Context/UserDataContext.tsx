import {User} from "firebase/auth";
import {createContext, Dispatch, ReactNode, useEffect, useReducer} from "react";

import {DatabaseRecord, List, ListLoaderValReturn, listsLoader, newRecord} from "../Services/Database"
import {useAuth} from "../Hooks/useAuth";

type UserDataContextProps = {
    children: ReactNode,
    user: User | null
}
type State = Array<DatabaseRecord<List>>

type Action = {
    value: State
}

type UserDataContextValue = {
    state: State,
    dispatch: Dispatch<Action>
}

function reducer(state: State, action: Action) {
    const newState = [...state]
    const {value} = action
    value.forEach((newListValue) => {
        const listIndex = newState.findIndex(({ListId}) => ListId === newListValue.ListId)

        if (listIndex === -1) {
            newState.push(newListValue)
        } else {
            newState[listIndex] = newListValue
        }
    })
    return newState
}

const initialState: State = []

export const UserDataContext = createContext({} as UserDataContextValue)

export function UserDataContextProvider({children}: UserDataContextProps) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {user} = useAuth()

    useEffect(() => {
        if (user && user.uid) {
            const [unsubscribe] = listsLoader(user.uid, (snapshot) => {
                const val: ListLoaderValReturn = snapshot.val()
                if (val) {
                    const parsedVal = Object.entries(val).map(([id, {title, value:todos, created}]) => {
                        return {ListId: id, title, todos, created} as DatabaseRecord<List>
                    })
                    dispatch({value: parsedVal})
                } else {
                    newRecord(user.uid, {type: "list"})
                }
            })
            return unsubscribe
        }
    }, [user, dispatch])

    return (
        <UserDataContext.Provider value={{state, dispatch}}>
            {children}
        </UserDataContext.Provider>
    )
}