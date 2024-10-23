import { useState } from 'react'

const UseStateComp = () => {
    const [count, setCount]  = useState(1)

    function increment(){
        setCount(count + 1)
    }

    function incbyamt(num){
        setCount(count + num)
    }

    function decrement(){
        setCount(count - 1)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Click 1</button>
            <button onClick={() => incbyamt(3)}>Click 2</button>
            <button onClick={decrement}>Click 3</button>
        </>
    )
}

export default UseStateComp