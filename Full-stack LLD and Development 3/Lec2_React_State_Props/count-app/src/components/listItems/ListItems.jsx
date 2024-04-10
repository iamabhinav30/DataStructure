const ListItems = ({ taskList, removeTask, editTask }) => {
    // const removeTask = ()=>{

    // }
    return (
        <>
            <ul>
                {
                    taskList.map((item) => {
                        return <>
                            <li
                                key={item.id}>{item.task}
                                <button id={item.id} onClick={removeTask}>Delete</button>
                                <button id={item.id} onClick={editTask} >Edit</button>
                            </li>

                        </>
                    })
                }
            </ul>
        </>
    )
}

export default ListItems;