import {User} from "firebase/auth";
import {createContext, ReactNode, useEffect, useState} from "react";

import {authStateListener, logout, signInWithGoogle} from "../Services/Auth"

type AuthContextProviderProps = {
    children?: ReactNode
}

type AuthContextValue = {
    user: User | null,
    signInWithGoogle: VoidFunction,
    logout: VoidFunction
}

export const AuthContext = createContext({} as AuthContextValue)

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState({} as User | null)

    useEffect(() => {
        authStateListener((user) => {
            setUser(user ? user : null)
        })
    }, [])

    return (
        <AuthContext.Provider value={{signInWithGoogle, logout, user}}>
            {props.children}
        </AuthContext.Provider>
    )
}