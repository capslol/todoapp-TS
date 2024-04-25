import React, {FC, memo} from 'react';
interface ChildProps {
    increment: () => void
}
const Child: FC<ChildProps> = ({increment}) => {
    console.log('render Child')
    return (
        <div>
            <button onClick={increment}></button>
        </div>
    );
}

export default Child;