/**
 * Prop Drilling: it is a situation where we pass the props down through the multiple levels of nested components 
 * it leads to code that is harder to manage and maintain
 * it causes a problem of re-rendering the components
 * to avoid the props drilling problem, couple of solution to implement
 *  1. React Context API
 *  2. Redux (its a third party library of state management)
 *  3. Custom hooks
 *
 */

import { useState } from "react";
import Child from "./Child";

const Parent = () =>{
    // const data = 'Hello Abhinav';
    const {data, setData} = useState('Hello ')
    return (
        <>
            <h2>Parent</h2> 
            <Child data={data} />   
        </>
    )
}

export default Parent;