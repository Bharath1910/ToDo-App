import React from 'react';
import cookies from 'js-cookie'

function Sync(data) {
    async function uploadData() {
        const token = cookies.get('token')
        const postData = {...data, token: token}
        console.log(postData)
        const raw = await fetch('http://localhost:5500/api/uploadData', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })

        const content = await raw.json();
        console.log(content)
    }

    return (
        <button onClick={uploadData}>Sync To Cloud</button>
    )
}

export default Sync