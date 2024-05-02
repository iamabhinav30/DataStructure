/**
 * What is context API ?
 * -> Its a way to share the data amound nested components without the need to pass props, 
 *    manually through each level of components tree(nesting of components).
 * -> Use cases
 *  1. themes
 *  2. user authentication
 *  3. setting, cart , etc.
 * 
 * How to implement the context API
 * -> Step 1 Create the context
 * 
 *  import {createContext} from 'react';
 * 
 *  const CounterContext = createContext();
 * 
 *  export default CounterContext;
 * 
 * -> Step 2 : Need to create a PROVIDER : this provider wraps the whole application for passing the data to the
 *             particular components.
 * 
 *          You need created Context and useContext()
 *  
 *  Refer : CounterProvider.jsx
 * 
 * Step 3: Consume the context
 *      custom hook to consume the context, we need to use useContext(ContextName)
 * 
 * What are the benefits you get from context API?
 * - Global Data sharing, you can share data across the components
 * - Simpler state management, it manages the state without complex setup
 * - flexibility to update any component
 * - it provided you single source of truth
 * - avoiding the rerendering which improve the performance of react application
 * - clean code you can write via context API.
 * 
 */

import { useCounter } from "../../../context/CounterProvider";

const Counter = () => {

    const { handleIncrement } = useCounter();

    const increment = () => {
        return true;
    }

    return (
        <>
            <button style={{ fontSize: '24px' }} onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default Counter;