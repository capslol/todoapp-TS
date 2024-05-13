import { ITodo, TodoState } from '../types/data'

const BASE = 'http://localhost:3000/todos'

export async function fetchTodos(state: TodoState = 'all'): Promise<ITodo[]> {

    const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`
    console.log(queries)

    const res = await fetch(`${BASE}${queries}`)

    if (!res.ok) throw new Error('Failed to fetch todos!')

    return res.json()
}

export async function toggleTodoStatus(todoId: number, completed: boolean) {
    const res = await fetch(`${BASE}/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return res.json()
}

export async function createTodo(title: string) {
    const res = await fetch(BASE, {
        method: "POST",
        body: JSON.stringify({ title, completed: false }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return res.json()
}