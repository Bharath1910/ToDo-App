import React, {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Client, Account, ID } from "appwrite";
import './Register.css';

const client = new Client();

client
    .setEndpoint('http://localhost:8080/v1')
    .setProject('63df2341d4053833e831');


function Register() {
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const username = useRef()
    const password = useRef()
    const rePassword = useRef()

    function handleRegister() {
        if (password.current.value === rePassword.current.value) {
            const account = new Account(client);
            const promise = account.create(
                ID.unique(),
                username.current.value,
                password.current.value
            );

            promise
                .then(response => {
                    console.log(response);
                    navigate('/login')  
                })
                .catch(error => {
                    console.log("error");
                    setError(error.message)
                })

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

                    <button className='register' onClick={handleRegister}>Sign Up <i className="fa-solid fa-right-to-bracket"></i></button>
                </div>

                {error && <div className='error'><i className="fa-solid fa-triangle-exclamation"></i><p>{error}</p></div>}   
            </div>

        </div>
    )
}

export default Register