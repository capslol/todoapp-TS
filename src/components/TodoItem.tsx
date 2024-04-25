import React, {FC} from 'react';
import {ITodo} from "../types/data";

interface ITodoItem extends ITodo {}

const TodoItem: FC<ITodoItem> = ({id, title, complete}) => {
    return (
        <div>
            <input type="checkbox" checked={complete}/>
            {title}
            <button onClick={() => null}>x</button>

        </div>
    );
};

export default TodoItem;