import React, {FC} from 'react';
import {ITodo} from "../types/data";
import {Button, Center, Checkbox, Input, ListItem} from "@chakra-ui/react";

interface ITodoItem extends ITodo {
    // deleteTodo: (id:number) => void
    // toggleTodo: (id:number) => void
}



const TodoItem: FC<ITodoItem> = ({id, title, completed}) => {
    return (
        <ListItem borderBottomWidth={1} display={'flex'} alignItems={'center'} pb={2}>
                <Checkbox  type="checkbox" checked={completed} mr={2}/>
                {title}
                <Button size={'xs'} ml={2}>x</Button>


        </ListItem>
    );
};

export default TodoItem;