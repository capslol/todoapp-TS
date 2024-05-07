import {Box, Button, Center, Flex, Input} from '@chakra-ui/react';
import React, {ChangeEvent, FC, useRef, useState} from 'react';

interface AddTodoFormProps {

}

const AddTodoForm:FC<AddTodoFormProps> = () => {
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <Flex>
            <Center  >
                <Input value={value} onChange={handleChange} ref={inputRef} type="text"/>
                <Button ml={2}>Add</Button>
            </Center>
        </Flex>
    );
};

export default AddTodoForm;