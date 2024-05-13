import React, {useState} from 'react';
import {TodoState} from "../types/data";
import {Button} from "@chakra-ui/react";
import TodoList from "./TodoList";



const TodoViewer = () => {
    const [view, setView] = useState<TodoState>('all')


    return (
        <>
            <Button onClick={() => setView('all')}>all</Button>
            <Button onClick={() => setView('open')}>open</Button>
            <Button onClick={() => setView('completed')}>completed</Button>
            <TodoList state={view}/>
        </>
    );
};

export default TodoViewer;