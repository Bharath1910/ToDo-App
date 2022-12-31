import React, {useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import './Add.css';

function Add({data, setData}) {
    const addData = useRef("")

    function handleAddData() {
        setData(data.concat([{
            uuid: uuidv4(),
            title: addData.current.value,
            completed: false
        }]))

        addData.current.value = ""
    }

    return (
        <div className='add'>
            <input className='short' type="text" ref={addData} />
            <button className='addButton' onClick={handleAddData}>+</button> 
        </div>
    )
}

export default Add