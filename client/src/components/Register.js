import React, {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Register.css';

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
        <div className='flex'>
            <div className='mid'>
                <div className='outerSection'>
                    <h1>Register</h1>
                    <div className='inputs'>
                        <label>
                            <p>Username:</p>
                            <input ref={username} type="text" />
                        </label>
                        
                        <label>
                            <p>Password:</p>
                            <input ref={password} type="password" />
                        </label>

                        <label>
                            <p>ReType Password:</p>
                            <input ref={rePassword} type="password" />
                        </label>
                    </div>

                    <button className='register' onClick={handleRegister}>Sign Up <i class="fa-solid fa-right-to-bracket"></i></button>
                </div>

                {error && <div className='error'><i class="fa-solid fa-triangle-exclamation"></i><p>{error}</p></div>}   
            </div>

        </div>
    )
}

export default Register