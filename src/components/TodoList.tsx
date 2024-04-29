import React, {FC} from 'react';
import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";
import {useQuery} from "react-query";
import {fetchTodos} from "../services/todos";

interface ITodoListProps {
    items: ITodo[]
    deleteTodo: (id:number) => void
    toggleTodo: (id:number) => void

}

const TodoList:FC<ITodoListProps> = ({items,deleteTodo, toggleTodo}) => {
    const {data, isLoading, isSuccess} = useQuery({
        queryFn: ()=> fetchTodos('all'),
        queryKey: ['todos', 'all']
    })

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