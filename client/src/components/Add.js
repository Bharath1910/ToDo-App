import React, {useRef} from 'react';
import {v4 as uuidv4} from 'uuid'

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
        <>
            <input type="text" ref={addData} />
            <button onClick={handleAddData}>+</button> 
        </>
    )
}

export default Add