import React, {ChangeEvent, FC, useCallback, useEffect, useRef, useState} from 'react';
import {ITodo} from "../types/data";
import TodoList from "./TodoList";
import axios from "axios";
import {log} from "util";
import AddTodoForm from "./AddTodoForm";

const url = 'https://jsonplaceholder.typicode.com/todos'

const App: FC = () => {
    const [value, setValue] = useState('')

    const [todos, setTodos] = useState<ITodo[]>([])



    const sortArray = (arr: number[]): number[] => {
        return arr.sort((a: number, b: number) => b - a)
    }

    const addToDo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                completed: false
            }])
            setValue('')
        }

    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const toggleTodo = (id: number): void => {
        setTodos(todos.map((todoItem) => {
            if (todoItem.id !== id) {
                return todoItem
            }
            return {
                ...todoItem,
                completed: !todoItem.completed
            }
        }))
    }
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
            <AddTodoForm addToDo={addToDo}  />


            <TodoList
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                items={todos}/>
            {/*{sortArray(nominals).join(', ')}*/}
            {/*{atm(10250, nominals).join(', ')}*/}
        </div>
    );
};

export default App;