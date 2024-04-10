import { useState } from "react";

const CreateTask = ({ getTask }) => {

    const [inputText, setInputText] = useState('');

    const setInputData = (event) => {
        setInputText(event.target.value);
        console.log(event.target.value);
    }

    const addTask = () => {
        getTask(inputText)
        setInputText('')
    }
    // state lifting up  : send data from child to parent

    return (
        <>
            <input
                type="text"
                value={inputText}
                onChange={setInputData}
            />

            <button
                onClick={addTask}
            >CreateTask</button>
        </>
    )
}

export default CreateTask;