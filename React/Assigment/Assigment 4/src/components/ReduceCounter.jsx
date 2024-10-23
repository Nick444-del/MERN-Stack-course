import React, {useReducer} from 'react'
import { reducerSwitch } from './reducerSwitch';

const ReduceCounter = () => {
    const initialState = {
        count: 0,
        todos: ["item1"]
    }

    const [state, dispatch] = useReducer(reducerSwitch, initialState);
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "incamt", payload: 3 })}>Inc by 3</button>
            <button onClick={() => dispatch({ type: "additem", payload: "item 2" })}>add item 2</button>

            <hr />
            {
                state.todos.map((todo, index) => {
                    return (
                        <li key={index}>{todo}</li>
                    )
                })
            }
        </>
    )
}

export default ReduceCounter