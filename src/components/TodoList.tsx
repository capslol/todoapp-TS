import React, {FC} from 'react';
import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    items: ITodo[]
}

const TodoList:FC<ITodoListProps> = ({items}) => {
    return (
        <div>
            {items.map((item) => (
                <TodoItem key={item.id} {...item}/>
            ))}
        </div>
    );
};

export default TodoList;