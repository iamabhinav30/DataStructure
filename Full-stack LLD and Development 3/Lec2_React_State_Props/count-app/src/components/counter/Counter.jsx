/**
 * 
 * State : It is a build-in react object that is used to contain data about the component
 * A component state can change over a time, whenever the state is going to change then the component has to re-render
 * 
 * -> How to respond events in react and update in UI?
 * Event : just an action clicking, hover, input
 * 
 * HOOK : It is function that allows you to use the state in a functional component
 * - useState() -> to manage the state if a functional component.
 * there are 2 kinds of hooks available in React
 * 1. build-in hooks: useState(), useEffect(), useRef(), useMeno(), useCallback() etc
 * 2. Custom hooks -> useFetch() : user defined hooks can also be created by prefix 'use'
 * 
 */

import { useState } from "react";

const Counter = (props) => {
    const counter = props.counter;
    console.log(counter);
    const [count, setCount] = useState(counter);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }
    return (
        <>
            <button onClick={handleIncrement}>+</button>
            <p> counter Value: {count}</p>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default Counter;