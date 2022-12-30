import React from 'react';
import Todo from './Todo';
import Completed from './Completed'

function List({data}) {
    function completedData() {
        return data.filter(obj => obj.completed === true)
    }

    function todoData() {
        return data.filter(obj => obj.completed === false)
    }

    return (
        <>
            <Todo data={todoData()}/>
            <Completed data={completedData()}/>
        </>
    )
}

export default List