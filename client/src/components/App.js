import React, {useEffect, useState} from 'react';
import './App.css';
import Add from './Add';
import List from './List';
import Sync from './Sync'

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/api/test')
            .then(responce => responce.json())
            .then(data => console.log(data))
    }, [])


    function handleToggle(uid) {
        const dataCopy = [...data]
        const requiredTodo = dataCopy.find(todo => todo.uuid === uid)
        requiredTodo.completed = !(requiredTodo.completed)
        setData(dataCopy)
    }

    return (
        <>
            <Add data={data} setData={setData}/>
            <List data={data} handleToggle={handleToggle}/>
            <Sync/>
        </>
  );
}

export default App;
