import {DataSnapshot} from "firebase/database"
import {database} from "./Firebase"

const {getDatabase, ref, onValue, push, off, get, child, update} = database

export interface DatabaseRecord<Type> {
    ListId?: string,
    title: string,
    created: number
    value?: Type
}

interface Todo {
    done: boolean
}

export interface List {
    todos: Array<Todo>
}

export type ListLoaderValReturn = Record<string, DatabaseRecord<List>>

type NewRecordOptions = {
    listId?: string,
    todoId?: string,
    type: "todo" | "list",
    title?: string,
    todos?: Array<Todo>,
    done?: boolean,
}

export function listsLoader(userId: string, cb: (snapshot: DataSnapshot) => void) {
    const db = getDatabase()
    const listRef = ref(db, `users/${userId}/lists`)
    return [off(listRef), onValue(listRef, cb)]
}

export function newRecord(userId: string, {type, listId, title = "", todos = [], done = false}: NewRecordOptions) {
    const value = type === "list" ? {todos} as List : {done} as Todo
    const record: DatabaseRecord<typeof value> = {
        title, created: Date.now(), value
    }

    const db = getDatabase()
    const recordRef = ref(db, `users/${userId}/lists${type === 'todo' ? `/${listId}/todos` : ""}`)
    return push(recordRef, record)
}

export async function deleteList(userId: string, listId: string) {
    const dbRef = ref(getDatabase())
    const path = `users/${userId}/lists`
    const snapshot = await get(child(dbRef, path))
    if (snapshot.exists()) {
        const updates: Record<string, any> = {}
        updates[path] = snapshot.val()
        delete updates[path][listId]
        update(dbRef, updates)
    }
}