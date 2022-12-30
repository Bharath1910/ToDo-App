import React from 'react'

function Sync(data) {
    async function uploadData() {
        const raw = await fetch('http://localhost:5500/api/uploadData', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const content = await raw.json();
        console.log(content)
    }

    return (
        <button onClick={uploadData}>Sync To Cloud</button>
    )
}

export default Sync