import React from 'react';
import './App.css';
import Add from './Add';
import List from './List';
import Sync from './Sync'

function Main({data, setData}) {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5500/api/test')
    //         .then(responce => responce.json())
    //         .then(data => setData(data.data))
    // }, [])

    // useEffect(() => {
    //     fetch('http://localhost:5500/api/test')
    //         .then(responce => responce.json())
    //         .then(data => setData(data.data))
    // }, [])


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

export default Main;
