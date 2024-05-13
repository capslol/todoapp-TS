import {Box, Button, Center, Flex, Input} from '@chakra-ui/react';
import React, {ChangeEvent, FC, FormEvent, useRef, useState} from 'react';
import {useMutation, useQueryClient} from "react-query";
import {createTodo} from "../services/todos";

interface AddTodoFormProps {

}

const AddTodoForm:FC<AddTodoFormProps> = () => {
    const [value, setValue] = useState('')

    const queryClient  = useQueryClient()

    const addTodoMutation = useMutation(createTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        }
    })

    const inputRef = useRef<HTMLInputElement>(null)


    const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(value){
            addTodoMutation.mutate(value)
            setValue('')
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <Flex>
            <Center>
                <form onSubmit={handleSubmitForm}>
                    <Input value={value} onChange={handleChange} ref={inputRef} type="text"/>
                    <Button type={'submit'} ml={2}>Add</Button>
                </form>

            </Center>
        </Flex>
    );
};

export default AddTodoForm;