import React from 'react'

function Completed({data}) {
    return (
        <>
            <h1>Completed</h1>
            {data.map(todo => {
                return (
                    <p>{todo.title}</p>
                )
            })}
        </>
    );
}

export default Completed