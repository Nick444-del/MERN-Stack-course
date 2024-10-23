import React, { createElement, useState } from 'react';

const Todolist = () => {
    const [todo, setTodo] = React.useState('')

    const todoHandler = (e) => {
        setTodo(e.target.value, e.target.name);
        console.log(todo)
    }

    const addTodo = () => {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = todo;
        checkbox.value = todo;
        li.append(checkbox);
        const clabel = document.createElement('label');
        clabel.htmlFor = todo;
        clabel.textContent = todo;
        li.append(clabel);
        const todoContainer = document.querySelector('.todoContainer');
        todoContainer.append(li);
        setTodo('');
    }

    return (
        <>
            <h1>Todo List</h1>
            <input type="text" name="todo" id="todo" placeholder='Todo item' onChange={todoHandler} />
            <button onClick={addTodo}>Add</button>
            <ul className='todoContainer' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'left' }}></ul>
        </>
    )
}

export default Todolist