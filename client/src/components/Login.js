import React, {useRef} from 'react';
import './Register.css'
import './Login.css'

function Login({postData, error}) {
    const username = useRef()
    const password = useRef()

    function handlePost() {
        postData(username.current.value, password.current.value)
    }
    
    return (
        <div className='flex'>
            <div className='mid'>
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