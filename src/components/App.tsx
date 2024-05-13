import React, { FC, useState} from 'react';
import {ITodo} from "../types/data";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoViewer from "./TodoViewer";

const url = 'https://jsonplaceholder.typicode.com/todos'

const App: FC = () => {




    const sortArray = (arr: number[]): number[] => {
        return arr.sort((a: number, b: number) => b - a)
    }



    return (
        <div>
            <AddTodoForm   />
            <TodoViewer/>
        </div>
    );
};

export default App;