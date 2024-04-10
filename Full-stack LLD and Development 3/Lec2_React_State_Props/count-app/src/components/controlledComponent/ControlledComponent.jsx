import { useState } from "react";

/**
 * CONTROLLED COMPONENT -> 
 *  - If we are dealing with form elements in React , then controlled componnet will come in to the picture
 *  - The value of the form element is stored within the component, and to manage the data state is going to be used.
 *  
 */
const ControlledComponent = () => {
    const [inputText, setInputText] = useState('')
    /**
     * 
     */
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setInputText(event.target.value);
    }
    return (
        <>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
            />
            <p>Input Value : {inputText}</p>
        </>
    )
}
export default ControlledComponent;