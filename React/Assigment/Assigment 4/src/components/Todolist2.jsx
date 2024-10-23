import React, { useState } from 'react'

const Todolist2 = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const todoHandler = (e) => {
        setTodo(e.target.value);
    };

    const addTodo = () => {
        setTodoList([...todoList, todo]);
        setTodo('');
    };

    return (
        <>
            <h1>Todo List</h1>
            <input type="text" name="todo" id="todo" placeholder='Todo' onChange={todoHandler} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todoList.map((todo, index) => {
                    return  <li key={index}>{todo}</li>
                })}
            </ul>
        </>
    )
}

export default Todolist2