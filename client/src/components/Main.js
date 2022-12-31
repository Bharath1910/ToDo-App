import React, {useEffect, useState} from 'react';
import './Register.css';
import './Main.css';
import Add from './Add';
import List from './List';
import Sync from './Sync';
import cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';

function Main({data, setData}) {
    const navigate = useNavigate()
    const token = cookies.get('token')
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (token) {
            fetch('http://localhost:5500/api/getData', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'token': token
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUser(data.username)
                setData(data.todoData)
            })
            .catch(err => console.error(err));
        }
    }, [])

    function redirectLogin() {
        navigate('/login')
    }

    function handleToggle(uid) {
        const dataCopy = [...data]
        const requiredTodo = dataCopy.find(todo => todo.uuid === uid)
        requiredTodo.completed = !(requiredTodo.completed)
        setData(dataCopy)
    }

    if (token) {
        return (
            <div className='flex cover'>
                <div className='midAdd'>
                    <h1>Welcome, <span>{user}</span></h1>
                    <Add data={data} setData={setData}/>
                </div>

                <div className="midMain">
                    <div className='mainInside'>
                        <List data={data} handleToggle={handleToggle}/>
                        <Sync data={data}/>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <h1>Please Login</h1>
                <button onClick={redirectLogin}>Login</button>
            </>
        )
    }
}

export default Main;
