import React from 'react';
import './List.css'

function Todo({data, handleToggle, title}) {
    return (
        <div className='table'>
            <h1>{title}</h1>
            {data.map(todo => {
                function handleClick() {
                    handleToggle(todo.uuid)
                }
                
                return (
                    <div>
                        <label className='checkbox' key={todo.uuid}>
                            <input type="checkbox" checked={todo.completed} onChange={handleClick} />
                            <p>{todo.title}</p>
                        </label>
                    </div>
                )
            })}
        </div>
    );
}

export default Todo