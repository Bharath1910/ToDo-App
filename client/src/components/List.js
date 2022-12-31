import React from 'react';
import SubList from './SubList';
import './List.css'

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
        <div className='col'>
            <SubList title="Todo" data={todoData()} handleToggle={handleToggle}/>
            <div className='line'></div>
            <SubList title="Completed" data={completedData()} handleToggle={handleToggle}/>
        </div>
    )
}

export default List