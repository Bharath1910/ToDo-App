import React from 'react';
import SubList from './SubList';

function List({data, handleToggle}) {
    function completedData() {
        return data.filter(obj => obj.completed === true)
    }

    function todoData() {
        return data.filter(obj => obj.completed === false)
    }

    return (
        <div>
            <SubList title="Todo" data={todoData()} handleToggle={handleToggle}/>
            <SubList title="Completed" data={completedData()} handleToggle={handleToggle}/>
        </div>
    )
}

export default List