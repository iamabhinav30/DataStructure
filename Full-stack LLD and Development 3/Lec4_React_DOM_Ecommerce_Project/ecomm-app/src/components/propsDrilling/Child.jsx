import GrandChild from "./GrandChild";

const Child = ({data}) =>{
    console.log('GrandChild', data)
    return (
        <>
        <h2>Child</h2>   
        <GrandChild data ={data}/>
        </>
    )
}

export default Child;