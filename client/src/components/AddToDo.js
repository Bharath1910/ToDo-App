import React, {useState, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddToDo() {
    const [input, setInput] = useState([])
    const inputRef = useRef(null)

    function handleAdd() {
        setInput(input.concat([{id: uuidv4(), title: inputRef.current.value, completed: false}]))
        console.log(input);
    }

    function updateTodo(uid) {
        console.log("checked")
        const copyLis = [...input]
        const todo = copyLis.find(e => e.id === uid)
        console.log(todo)
        todo.completed = !(todo.completed)
        setInput(copyLis)
    }

    function completedTodo(inp) {
        return inp.filter(todo => todo.completed === true)
    }

    function notCompleted(inp) {
        return inp.filter(todo => todo.completed === false)
    }

    return (
        <>  
            <p>Welcome Bharath</p>
            <input type="text" ref={inputRef}/>
            <button onClick={handleAdd}>+</button>
            <br/>

            <h1>To Do</h1>
            {notCompleted(input).map((todo) => {
                function handleOnChange() {
                    updateTodo(todo.id)
                }
                
                return (
                    <>
                        <label>{todo.title}</label>
                        <input 
                            type="checkbox" 
                            value="hello" 
                            checked={todo.completed}
                            onChange={handleOnChange}
                        />
                        <br/>
                    </>
                );
            })}


            <h1>Completed</h1>
            {completedTodo(input).map((todo) => {
                function handleOnChange() {
                    updateTodo(todo.id)
                }
                return (
                    <>
                        <label>{todo.title}</label>
                        <input 
                            type="checkbox" 
                            value="hello" 
                            checked={todo.completed}
                            onChange={handleOnChange}
                        />
                        <br/>
                    </>
                );
            })
        }

            <button>Sync to cloud</button>
        </>
    )
}

export default AddToDo