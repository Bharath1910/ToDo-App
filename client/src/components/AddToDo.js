import React, {useState, useEffect, useRef} from 'react'

function AddToDo() {
    const [input, setInput] = useState([])
    const inputRef = useRef(null)

    function handleAdd() {
        setInput(input.concat([{id: 1, title: inputRef.current.value, completed: false}]))
    }

    return (
        <>  
            <p>Welcome Bharath</p>
            <input type="text" ref={inputRef}/>
            <button onClick={handleAdd}>+</button>

            <h1>All list</h1>
            {input.map((todo) => {
                return (
                    <>
                        <label>{todo.title}</label>
                        <input 
                            type="checkbox" 
                            value="hello" 
                            checked={todo.completed}
                        />
                        <br/>
                    </>
                );
            })}

            <button>Sync to cloud</button>
        </>
    )
}

export default AddToDo