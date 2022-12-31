import React, {useRef} from 'react'

function Login({postData, error}) {
    const username = useRef()
    const password = useRef()

    function handlePost() {
        postData(username.current.value, password.current.value)
    }
    
    return (
        <>
            <h1>Login</h1>
            
            <label>
                Username: 
                <input ref={username} type="text" />
            </label>
            <br/><br/>
            <label>
                Password:
                <input ref={password} type="password" />
            </label>
            <button onClick={handlePost}>Login</button>
            {error && <p>{error}</p>}
        </>
    )
}

export default Login