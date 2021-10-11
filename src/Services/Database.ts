import {database} from "./Firebase"

const {getDatabase, get, child, ref} = database

export async function loadUserData(userId: String) {
    const dbRef = ref(getDatabase())
    const {val} = await get(child(dbRef, `user/${userId}`))
    return val()
}