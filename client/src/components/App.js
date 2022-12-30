import React, {useState} from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import cookies from 'js-cookie'


function App() {
    let navigate = useNavigate()

    const [data, setData] = useState([])

    async function postData(username, password) {
        const response = await fetch("http://localhost:5500/api/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        const content = await response.json()
        // setData(content)
        console.log(content)

        navigate('/dashboard')
    }
    return (
        <Routes>
            <Route path="/dashboard" element={<Main setData={setData} data={data} />}/>
            <Route path="/login" element={<Login postData={postData} />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
  )
}

export default App