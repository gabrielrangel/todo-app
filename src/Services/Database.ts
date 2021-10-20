import {DataSnapshot} from "firebase/database"
import {database} from "./Firebase"

const {
    getDatabase, ref, push, off,
    onChildAdded, onChildChanged, onChildRemoved,
    remove, update
} = database

export interface DatabaseRecord<Type> {
    id?: string,
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

type NewRecordOptions = {
    listId?: string,
    todoId?: string,
    type: "todo" | "list",
    title?: string,
    todos?: Array<Todo>,
    done?: boolean,
}

type ListenersHandlers = {
    read: (value: DatabaseRecord<List>) => void,
    update: (value: DatabaseRecord<List>) => void,
    delete: (value: DatabaseRecord<List>) => void,
}

export function subscribeListeners(userId: string, handlers: ListenersHandlers) {
    const db = getDatabase()
    const listsRef = ref(db, `users/${userId}/lists`)
    const snapshotHandler = (snapshot: DataSnapshot) => {
        return {...snapshot.val(), id: snapshot.key}
    }

    onChildAdded(listsRef, (snapshot) => handlers.read(snapshotHandler(snapshot)))
    onChildChanged(listsRef, (snapshot) => handlers.update(snapshotHandler(snapshot)))
    onChildRemoved(listsRef, (snapshot) => handlers.delete(snapshotHandler(snapshot)))

    return () => off(listsRef)
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
    const db = getDatabase()
    const listRef = ref(db, `users/${userId}/lists/${listId}`)
    remove(listRef)
}

export function updateList(userId: string, [{id, ...value}]: DatabaseRecord<List>[]) {
    const db = getDatabase()
    const updates = {} as Record<any, DatabaseRecord<List>>
    updates[`users/${userId}/lists/${id}`] = value
    update(ref(db), updates)
}