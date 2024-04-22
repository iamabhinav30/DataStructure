import { useCounter } from "../../context/CounterProvider";

const Child = () =>{
    const {count} = useCounter();
    return (
        <>
            <h4>Counter value : {count}</h4>
        </>
    )
}

export default Child;