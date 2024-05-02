import React, {FC} from 'react';
import {ITodo} from "../types/data";

interface ITodoItem extends ITodo {
    deleteTodo: (id:number) => void
    toggleTodo: (id:number) => void
}



const TodoItem: FC<ITodoItem> = ({id, title, completed,deleteTodo, toggleTodo}) => {
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            {title}
            <button onClick={() => deleteTodo(id)}>x</button>

        </div>
    );
};

export default TodoItem;