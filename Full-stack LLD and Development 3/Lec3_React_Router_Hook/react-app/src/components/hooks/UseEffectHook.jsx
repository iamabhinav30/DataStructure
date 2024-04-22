import { useEffect, useState } from "react";

/**
 * What are react dev tools ?
 *  -> Its a browser extention that help developers to inspect and debug, understand react app effectively
 * 
 * What is hook ?
 *  -> HOOK : It is function that allows you to use the state in a functional component
 * Always used in functional baseed component
 * - useState() -> to manage the state if a functional component.
 * there are 2 kinds of hooks available in React
 * 1. build-in hooks: useState(), useEffect(), useRef(), useMeno(), useCallback() etc
 * 2. Custom hooks -> useFetch() : user defined hooks can also be created by prefix 'use'
 * 
 * useState() : it is a build-in hook that manages the stte of a functional component.
 *      -> it doesn't return just a variable, it returns an array, 
 *          where the first element that stores the value and second element is the function to update the value
 * 
 * useEffect() : Build-in hook that is fenerally used for handling the side-effects in functional components
 *      -> It helps to synchronize the componenets with the external system, 
 *          such as make API calls, third party library
 *      -> syntax :
 *              useEffect(callback, dependencyArray?)
 *             -callback : where you can execute your logic
 *             - dependencyArray(optional) : an array dependencies. if you provide value in these dependencies based on the state values and
 *                               if the states are foinf to update then useEffect will run based on dependencies you have been passed
 * *              -> useEffect(()=> {
 *                      //you can execute your logic
 *                  },[]) -> it will execute with every re-rendering
 *                  should not this one as it is an expencive operation to use our logic
 *               
 *                  -> useEffect(()=> {
 *                      //you can execute your logic
 *                  },[])-> it will execute your logic only once
 * 
 *  *              -> useEffect(()=> {
 *                      //you can execute your logic
 *                  },[value1, value2]) -> it will execute based on the value
 * 
 *  *              -> useEffect(()=> {
 *                      //you can execute your logic
 *                      return () =>{
 *                          // all clean activities will be coming such as clearInterval, removeEventListener, to unsubscribe events
 *                      }
 *                  },[])
 * 
 * 
 * => what is lifecycle of a component?
 * -> Life cycle of a component is divided into 3 parts
 * 1. mounting :
 * -occurs when a function component is initially created and inserted in the dom
 * - components get constructed and initial rendering take place
 * - During Mounting Phase
 *      * Fn component is executed
 *      * state and props are initiated
 *      * Components return JSX and rendered on the DOM
 *      * If an Effect are specified via useEffect() are also executed
 * 2. updating : 
 * - re-rendering due to change in states or props
 * - During updating Phase
 *      * changes in stated or props trigger re-rendering
 *      * component function is called again
 *      * the updated jsx is rendered by reflecting the changes
 *      * If any effect is specified via useEffect() that will run logic after each update.
 * 
 * 3. unmounting
 * - occurs when a functional component is removed from the DOM.
 * - when you do the cleanup activity in useEffect via return function or when we navigate from one page to another
 * 
 * 
 */
const UseEffectHook = () => {
    const [count, setCount] = useState(0);

    const componentMounting = () => {
        console.log('component mounted');
    }

    useEffect(() => {
        // here you put your logic
        componentMounting();

        return ()=>{
            console.log('component unmounted')
        }
    }, []);

    useEffect(() => {
        // here is the logic
        console.log('updating the component');
    }, [count, componentMounting]);

    const handleIncrement = ()=>{
        setCount(count++);
    }

    return (
        <>
            UseEffect
        </>
    )
}

export default UseEffectHook;