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
 */

const Counter = () => {

    const increment = () => {

    }

    return (
        <>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Counter;