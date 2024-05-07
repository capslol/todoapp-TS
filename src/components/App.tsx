import React, { FC, useState} from 'react';
import {ITodo} from "../types/data";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const url = 'https://jsonplaceholder.typicode.com/todos'

const App: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])



    const sortArray = (arr: number[]): number[] => {
        return arr.sort((a: number, b: number) => b - a)
    }

    // const addToDo = () => {
    //     if (value) {
    //         setTodos([...todos, {
    //             id: Date.now(),
    //             title: value,
    //             completed: false
    //         }])
    //         setValue('')
    //     }
    //
    // }
    //
    // const deleteTodo = (id: number) => {
    //     setTodos(todos.filter((todo) => todo.id !== id))
    // }
    // const toggleTodo = (id: number): void => {
    //     setTodos(todos.map((todoItem) => {
    //         if (todoItem.id !== id) {
    //             return todoItem
    //         }
    //         return {
    //             ...todoItem,
    //             completed: !todoItem.completed
    //         }
    //     }))
    // }
    // useEffect(() => {
    //     axios.get(url)
    //         .then((res) => setTodos(res.data))
    //
    //     if (inputRef.current) {
    //         inputRef.current.focus()
    //     }
    // }, [])



    return (
        <div>
            <AddTodoForm   />
            <TodoList
                items={todos}/>
        </div>
    );
};

export default App;