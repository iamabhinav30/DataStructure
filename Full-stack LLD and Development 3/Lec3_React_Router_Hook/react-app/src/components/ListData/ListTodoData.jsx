import { useEffect, useState } from "react";

const ListTodoData = () =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        console.log('*****************Fetching Data************************');
        const res = await fetch('https://jsonplaceholder.typicode.com/todos'); 
        const data = await res.json();
        setData(data);
    }

    return (
        <>
            <h3>Data loading Example</h3>
            {
                data && data.map((item)=>{
                    return item.id <10 && <p key={item.id}>{item.title}</p>
                })
            }
        </>
    )

}

export default ListTodoData;