import { useContext, useState } from "react";
import CounterContext from "./CounterContext";

const CounterProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <CounterContext.Provider value={{ count, handleDecrement, handleIncrement }}>
            {children}
        </CounterContext.Provider>
    )
}


export const useCounter =()=>{
    return useContext(CounterContext);
}

export default CounterProvider;

/**
 * in the context of React and its Context API, a Provider is a component that allows consuming components 
 * to subscribe to context changes. The Provider component is part of the mechanism that React 
 * provides to pass data through the component tree without having to pass props manually at every level.
 */