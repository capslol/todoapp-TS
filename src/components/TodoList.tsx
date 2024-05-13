import React, {FC} from 'react';
import {ITodo, TodoState} from "../types/data";
import TodoItem from "./TodoItem";
import {List, Spinner} from "@chakra-ui/react";
import useTodosQuery from "../hooks/useTodosQuery";

type TodoListProps = {
    state: TodoState
}

const TodoList:FC<TodoListProps> = ({state}) => {
    const {data ,isLoading, isSuccess} = useTodosQuery(state)

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