import React from 'react';
import SubList from './SubList';

function List({data, handleToggle}) {
    function completedData() {
        if (!(data === undefined || data === null || data === [])) {
            return data.filter(obj => obj.completed === true)
        } else {
            return []
        }
    }

    function todoData() {
        if (!(data === undefined || data === null || data === [])) {
            return data.filter(obj => obj.completed === false)
        } else {
            return []
        }
    }

    return (
        <div>
            <SubList title="Todo" data={todoData()} handleToggle={handleToggle}/>
            <SubList title="Completed" data={completedData()} handleToggle={handleToggle}/>
        </div>
    )
}

export default List