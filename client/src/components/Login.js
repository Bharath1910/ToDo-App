import React, {useRef} from 'react'

function Login({postData}) {
    const username = useRef()
    const password = useRef()

    function handlePost() {
        postData(username.current.value, password.current.value)
    }
    // async function postData() {
    //     const response = await fetch("http://localhost:5500/api/login", {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username: username.current.value,
    //             password: password.current.value
    //         })
    //     })

    //     const content = await response.json()
    //     console.log(content)
    // }

    return (
        <>
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
        </>
    )
}

export default Login