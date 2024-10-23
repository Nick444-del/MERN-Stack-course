import React,{useContext} from 'react'
import {CounterContext} from './CountContext'

const ButtonCounter = () => {
    const {count, setCount} = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}

export default ButtonCounter