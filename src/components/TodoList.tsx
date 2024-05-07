import React, {FC} from 'react';
import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";
import {useQuery} from "react-query";
import {fetchTodos} from "../services/todos";
import {List, Spinner} from "@chakra-ui/react";

interface ITodoListProps {
    items: ITodo[]
    // deleteTodo: (id:number) => void
    // toggleTodo: (id:number) => void

}

const TodoList:FC<ITodoListProps> = ({items}) => {
    const {data, isLoading, isSuccess} = useQuery({
        queryFn: () => fetchTodos('all'),
        queryKey: ['todos', 'all']
    })

    if(isLoading){
        return (
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        )
    }

    return (
        <List w={'200px'} m={3} >
            {isSuccess && data.map((item) => (
                <TodoItem
                    key={item.id}
                    {...item}/>
            ))}
        </List>
    );
};

export default TodoList;