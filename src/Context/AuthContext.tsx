import {createContext, ReactNode, useEffect, useState} from "react";

import {auth} from "../Services/Firebase"

const {GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged} = auth

type AuthContextProviderProps = {
    children?: ReactNode
}

export type User = {
    uid?: string,
    displayName?: string | null,
    photoURL?: string | null
}

type AuthContextValue = {
    user: User,
    signInWithGoogle: VoidFunction,
    logout: VoidFunction
}

export const AuthContext = createContext({} as AuthContextValue)

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState({} as User)

    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, displayName, photoURL} = user
                setUser({uid, displayName, photoURL})
            } else {
                setUser({})
            }
        })
    }, [auth])

    const value: AuthContextValue = {
        signInWithGoogle: () => {
            const provider = new GoogleAuthProvider()

            signInWithPopup(auth, provider)
                .then(({user}) => {
                    const {uid, displayName, photoURL} = user
                    setUser({uid, displayName, photoURL})
                })
                .catch(() => setUser({}))
        },

        logout: () => {
            auth.signOut()
        },

        user
    }


    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}