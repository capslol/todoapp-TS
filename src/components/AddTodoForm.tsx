import React, {ChangeEvent, FC, useRef, useState} from 'react';

interface AddTodoFormProps {
    addToDo: () => void

}

const AddTodoForm:FC<AddTodoFormProps> = ({addToDo}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <input value={value} onChange={handleChange} ref={inputRef} type="text"/>
            <button onClick={addToDo}>Add</button>
        </div>
    );
};

export default AddTodoForm;