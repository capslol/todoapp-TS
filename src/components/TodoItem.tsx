import React, {FC} from 'react';
import {ITodo} from "../types/data";
import {Button, Center, Checkbox, Input, ListItem} from "@chakra-ui/react";
import {useMutation, useQueryClient} from "react-query";
import {toggleTodoStatus} from "../services/todos";

interface ITodoItem extends ITodo {
    // deleteTodo: (id:number) => void
    // toggleTodo: (id:number) => void
}



const TodoItem: FC<ITodoItem> = ({id, title, completed}) => {

    const client = useQueryClient()

    const toggleTodoMutation = useMutation( {
        mutationFn: () => toggleTodoStatus(id, !completed),
        onSuccess: () => client.invalidateQueries('todos')
    })

    return (
        <ListItem onClick={()=> toggleTodoMutation.mutate()} borderBottomWidth={1} display={'flex'} alignItems={'center'} pb={2}>
                <Checkbox   type="checkbox" checked={completed} mr={2}/>
                {title}
                <Button size={'xs'} ml={2}>x</Button>


        </ListItem>
    );
};

export default TodoItem;