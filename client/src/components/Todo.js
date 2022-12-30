import React from 'react'

function Todo({data}) {
    return (
        <>
            <h1>Todo</h1>
            {data.map(todo => {
                return (
                    <p>{todo.title}</p>
                )
            })}
        </>
    );
}

export default Todo