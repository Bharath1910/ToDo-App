import React from 'react'

function Todo({data, handleToggle, title}) {
    return (
        <>
            <h1>{title}</h1>
            {data.map(todo => {
                function handleClick() {
                    handleToggle(todo.uuid)
                }
                
                return (
                    <label key={todo.uuid}>
                        <input type="checkbox" checked={todo.completed} onChange={handleClick} />
                        {todo.title}
                    </label>
                )
            })}
        </>
    );
}

export default Todo