import React, {useState} from 'react';
import './App.css';
import Add from './Add';
import List from './List'

function App() {
    const [data, setData] = useState([])

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
        </>
  );
}

export default App;
