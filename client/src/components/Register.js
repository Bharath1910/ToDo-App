import React, {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Register() {
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const username = useRef()
    const password = useRef()
    const rePassword = useRef()

    async function handleRegister() {
        if (password.current.value === rePassword.current.value) {
            const raw = await fetch('http://localhost:5500/api/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username.current.value, password: password.current.value})
            })

            if (!raw.ok) {
                const content = await raw.json();
                setError(content)
            } else {
                navigate('/login')
            }
        } else {
            setError("Password doesn't match")
        }
    }

    return (
        <>
            <h1>Register</h1>
            <label>
                Username: 
                <input ref={username} type="text" />
            </label>

            <br/><br/>
            
            <label>
                Password:
                <input ref={password} type="password" />
            </label>
            <br/>
            <label>
                ReType Password:
                <input ref={rePassword} type="password" />
            </label>

            <button onClick={handleRegister}>Register</button>
            {error && <p>{error}</p>}

        </>
    )
}

export default Register