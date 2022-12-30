import React, {useEffect} from 'react';
import './App.css';
import Add from './Add';
import List from './List';
import Sync from './Sync'

function Main({data, setData}) {
    useEffect(() => {
        fetch('http://localhost:5500/api/getData')
        .then(response => response.json())
	    .then(data => console.log(data))
	    .catch(err => console.error(err));
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
            <Sync data={data}/>
        </>
  );
}

export default Main;
