import {createContext, ReactNode, useReducer} from "react";

type ListContextProps = {
    children:ReactNode
}

type ListContextValue = {

}

type State = {
    id?: string,
    title: string,
    todos: Array<{id?: string, title:string, done: boolean}>
}

type Action = {
    type: string
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        default:
            return state
    }
}

const initialState: State = {
    title: "Nova Lista",
    todos: [
        {title: "Nova Tarefa", done: false}
    ]
}

export const ListContext = createContext({} as ListContextValue)

export function ListContextProvider({children}:ListContextProps) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ListContext.Provider value={{state, dispatch: dispatch}}>
            {children}
        </ListContext.Provider>
    )
}