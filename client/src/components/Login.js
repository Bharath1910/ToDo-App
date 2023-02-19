import React, {useRef} from 'react';
import { Client, Account } from "appwrite";
import './Register.css'
import './Login.css'


const client = new Client()

client
.setEndpoint('http://localhost:8080/v1')
.setProject('63df2341d4053833e831');

function Login({postData, error}) {
    const username = useRef()
    const password = useRef()

    function handlePost() {
        const account = new Account(client);
        const promise = account.createEmailSession(
            username.current.value,
            password.current.value            
        );
        
        promise.then(function (response) {
            postData(response.userId)
            console.log(response.userId);
        }, function (error) {
            console.log(error);
        });

        
    }
    
    return (
        <div className='flex'>
            <div className='midLogin'>
                <div className='outerSection'>
                    <h1>Login</h1>
                    
                    <div className='inputs'>
                        <label>
                            <p>Username:</p> 
                            <input ref={username} type="text" />
                        </label>

                        <label>
                            <p>Password:</p>
                            <input ref={password} type="password" />
                        </label>
                    </div>

                    <button className='login' onClick={handlePost}>Login <i class="fa-solid fa-right-to-bracket"></i></button>
                </div>
                {error && <div className='error'><i class="fa-solid fa-triangle-exclamation"></i><p>{error}</p></div>}
            </div>
        </div>
    )
}

export default Login