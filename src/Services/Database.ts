import {DataSnapshot} from "firebase/database"
import {database} from "./Firebase"

const {getDatabase, ref, onValue, push, off} = database

interface DatabaseRecord {
    id?: string,
    title: string,
    created: number
}

export interface Todo extends DatabaseRecord {
    done: boolean
}

export interface List extends DatabaseRecord {
    todos: Array<Todo>
}

export type ListLoaderValReturn = Record<string, List>

type NewRecordOptions = {
    type: "todo" | "list",
    title?: string,
    todos?: Array<Todo>,
    done?: boolean
}

export function newRecord({type, title = "", todos = [], done = false}: NewRecordOptions) {
    const record: DatabaseRecord = {title, created: Date.now()}

    switch (type) {
        case "todo":
            return {...record, done} as Todo
        case "list":
            return {...record, todos} as List
    }
}

export function listsLoader(userId: string, cb: (snapshot: DataSnapshot) => void) {
    const db = getDatabase()
    const listRef = ref(db, `users/${userId}/lists`)
    return [off(listRef), onValue(listRef, cb)]
}

export function newList(userId: string, title: string = "", todos: Array<Todo> = []) {
    const db = getDatabase()
    const listRef = ref(db, `users/${userId}/lists`)
    const newList = newRecord({type: "list", title, todos})
    return push(listRef, newList)
}

export function newTodo(userId: string, listId: string, {title = "", done = false}: NewRecordOptions) {
    const db = getDatabase()
    const todoRef = ref(db, `users/${userId}/lists/${listId}/todos`)
    const newTodo = newRecord({type: "todo", title, done})
    return push(todoRef, newTodo)
}