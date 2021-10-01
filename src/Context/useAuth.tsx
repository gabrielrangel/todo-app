import {createContext, ReactNode, useContext, useState} from "react";

import {auth} from "../Services/Firebase"

const {GoogleAuthProvider, getAuth, signInWithPopup} = auth

type AuthContextProviderProps = {
    children?: ReactNode
}

type User = {
    id: string
}

type AuthContextValue = {
    user?:User,
    signInWithGoogle: VoidFunction
}

const AuthContext = createContext({} as AuthContextValue)

export function AuthContextProvider (props:AuthContextProviderProps) {
    const [user, setUser] = useState<User>()

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        const auth = getAuth()

        signInWithPopup(auth, provider)
            .then(({user}) => {
                const {uid} = user
                setUser({
                    id:uid
                })
            })
    }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuth () {
    return useContext(AuthContext)
}