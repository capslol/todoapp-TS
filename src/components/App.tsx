import React, {ChangeEvent, FC, useCallback, useEffect, useRef, useState} from 'react';
import {ITodo} from "../types/data";
import TodoList from "./TodoList";
import Child from "./Child";

const App: FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const [count, setCount] = useState<number>(0)

    const increment = useCallback(() => {
        setCount((prevState) => prevState + 1)
        console.log(count)
    },[])
    console.log('render App')

    const addToDo = () => {
        if (value){
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }

    }
    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus()
        }
    },[])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <Child increment={increment}></Child>
            <div>
                <input value={value} onChange={handleChange} ref={inputRef} type="text"/>
                <button onClick={addToDo}>Add</button>
            </div>
            <TodoList items={todos} />
        </div>
    );
};

export default App;