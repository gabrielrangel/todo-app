import {createContext, ReactNode, useEffect, useState} from "react";

import {auth} from "../Services/Firebase"

const {GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged} = auth

type AuthContextProviderProps = {
    children?: ReactNode
}

type User = {
    uid?: string,
    displayName?: string | null,
    photoURL?: string | null
}

type AuthContextValue = {
    user: User,
    signInWithGoogle: VoidFunction
}

export const AuthContext = createContext({} as AuthContextValue)

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState({} as User)

    useEffect(() => {
        const auth = getAuth()

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, displayName, photoURL} = user
                setUser({uid, displayName, photoURL})
            } else {
                setUser({})
            }
        })
    }, [])

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        const auth = getAuth()

        signInWithPopup(auth, provider)
            .then(({user}) => {
                const {uid, displayName, photoURL} = user
                setUser({uid, displayName, photoURL})
            })
            .catch(() => setUser({}))
    }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}