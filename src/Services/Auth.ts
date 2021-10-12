import {NextOrObserver, User} from "firebase/auth"
import {auth} from "./Firebase"

const {GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged} = auth

export function signInWithGoogle() {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}

export function logout() {
    const auth = getAuth()
    return auth.signOut()
}

export function authStateListener(cb: NextOrObserver<User>) {
    const auth = getAuth()
    return onAuthStateChanged(auth, cb)
}