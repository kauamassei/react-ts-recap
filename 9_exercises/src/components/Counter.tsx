import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <>
        <h1>Exercício 3</h1>
        <p>{count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Incrementar</button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrementar</button>
        </>
    )
}

export default Counter