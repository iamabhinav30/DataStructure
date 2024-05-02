import { useCounter } from "../../context/CounterProvider"

const Data = () =>{
    const {count} = useCounter();

    return (
        <>
            <h2>Data value : {count}</h2>
        </>
    )
}

export default Data;