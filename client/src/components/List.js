import React from 'react';
import SubList from './Todo';
import Completed from './Completed'

function List({data, handleToggle}) {
    function completedData() {
        return data.filter(obj => obj.completed === true)
    }

    function todoData() {
        return data.filter(obj => obj.completed === false)
    }

    return (
        <>
            <SubList title="Todo" data={todoData()} handleToggle={handleToggle}/>
            <SubList title="Completed" data={completedData()} handleToggle={handleToggle}/>

            <Completed data={completedData()}/>
        </>
    )
}

export default List