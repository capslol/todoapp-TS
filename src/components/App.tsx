import React, {ChangeEvent, FC, useCallback, useEffect, useRef, useState} from 'react';
import {ITodo} from "../types/data";
import TodoList from "./TodoList";

const App: FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])
    const inputRef = useRef<HTMLInputElement>(null)


    const nominals:number[] = [5000,100,50,200,500,1000,2000]

    const sortArray = (arr:number[]):number[] => {
        return arr.sort((a: number, b: number) => b - a)
    }

    const atm = (amount:number ,nominals: number[]) =>  {
        const sortedNominals = nominals.sort((a,b) => b-a)
        const result: string[] = []
        let sum = amount
        for (const nominal of sortedNominals) {
            const count = Math.floor(sum/nominal)
            sum = sum % nominal
            if( count > 0) {
                result.push(`${nominal}x${count}`)
            }
        }
        console.log('spring'.split(''))
        return result
    }

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
            <div>
                <input value={value} onChange={handleChange} ref={inputRef} type="text"/>
                <button onClick={addToDo}>Add</button>
            </div>
            <TodoList items={todos} />
            {/*{sortArray(nominals).join(', ')}*/}
            {atm(10250, nominals).join(', ')}
        </div>
    );
};

export default App;