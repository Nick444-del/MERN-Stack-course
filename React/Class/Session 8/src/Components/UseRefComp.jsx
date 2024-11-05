import React, {useRef, useState} from 'react'

const UseRefComp = () => {
    const [todo, setTodo] = useState([]);
    const inputRef = useRef(null);

    const onClickHandler = () => {
        setTodo([...todo, inputRef.current.value]);
    }

    if(todo.checked) {
        todo.splice(index, 1);
    }

    return (
        <div>
            <input type="text" name="text" id="text" ref={inputRef} />
            <button onClick={onClickHandler}>click</button>
            <ul>
                {
                    todo.map((item, index) => <li style={{listStyle: 'none', display: 'flex', alignItems: 'center', gap: '10px'}} key={index}><input type="checkbox" name="todo" id="todo" />{item}</li>)
                }
            </ul>
        </div>
    )
}

export default UseRefComp