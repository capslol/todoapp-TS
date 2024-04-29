import React, {FC} from 'react';
import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    items: ITodo[]
    deleteTodo: (id:number) => void
    toggleTodo: (id:number) => void

}

const TodoList:FC<ITodoListProps> = ({items,deleteTodo, toggleTodo}) => {
    return (
        <div>
            {items.map((item) => (
                <TodoItem
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    key={item.id}
                    {...item}/>
            ))}
        </div>
    );
};

export default TodoList;