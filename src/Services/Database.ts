import {DataSnapshot} from "firebase/database"
import {database} from "./Firebase"

const {
    getDatabase, ref, push, off,
    onChildAdded, onChildChanged, onChildRemoved,
    remove, update
} = database

export interface DatabaseRecord{
    id: string,
    title: string,
    created: number,
}

export interface Todo extends DatabaseRecord{
    done: boolean
}

export interface List extends DatabaseRecord{
    todos?: Todo[] | Record<string, Todo>
}

type NewRecordOptions = {
    listId?: string,
    todoId?: string,
    type: "todo" | "list",
    title?: string,
    todos?: Record<string, Todo>,
    done?: boolean,
}

type ListenersHandlers = {
    read: (value: List) => void,
    update: (value: List) => void,
    delete: (value: List) => void,
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

export function newRecord(userId: string, {type, listId, title = "", todos = {}, done = false}: NewRecordOptions) {
    const record = {title, created: Date.now()} as DatabaseRecord
    const value = type === "list"
        ? {...record, todos} as List
        : {...record, done} as Todo

    const db = getDatabase()
    const recordRef = ref(db, `users/${userId}/lists${type === 'todo' ? `/${listId}/todos` : ""}`)
    return push(recordRef, value)
}

export async function deleteList(userId: string, listId: string) {
    const db = getDatabase()
    const listRef = ref(db, `users/${userId}/lists/${listId}`)
    remove(listRef)
}

export function updateList(userId: string, [{id, ...value}]: List[]) {
    const db = getDatabase()
    const updates = {} as Record<string, object>
    updates[`users/${userId}/lists/${id}`] = value
    update(ref(db), updates)
}