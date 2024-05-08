import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    return (
        <>
            <h2> COunter without redux</h2>
            <button onClick={handleIncrement}>+</button>
            <p>Count: {count}</p>
            <button onClick={handleDecrement} > - </button >
        </>
    )
}

export default Counter;