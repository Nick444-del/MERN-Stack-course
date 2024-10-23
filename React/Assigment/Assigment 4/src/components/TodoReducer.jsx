import React, {useReducer} from 'react'

const reducerSwitch = (state, action) => {
    switch(action.type){
        case "additem":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}

const TodoReducer = () => {
    const initialState = {
        todos: ["item 1"]
    }

    const [state, dispatch] = useReducer(reducerSwitch, initialState);

    const changeHandler = (e) => {
        let todo = e.target.value
    }
    const addTodo = () => {
    }

    return (
        <>
            <input type="text" name="todo" id="todo" onChange={changeHandler} />

            <button onClick={addTodo}>Add</button>

            <hr />
            {
                state.todos.map((todo, index) => {
                    return(
                        <li key={index}>{todo}</li>
                    )
                })
            }
        </>
    )
}

export default TodoReducer