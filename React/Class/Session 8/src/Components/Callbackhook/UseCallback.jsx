import { useCallback, useState } from "react"
import Todos from "./Todos"

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, `New Todo ${t.length + 1}`]);
    }, [todos]);
    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>Increment</button>
            </div>
        </>
    )
}

export default UseCallback