import React, { useState } from 'react';
import cookies from 'js-cookie';
import './Register.css'

function Sync(data) {
    const [info, setInfo] = useState(null)

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
        setInfo(content)

        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
          }
          
        delay(1500).then(() => setInfo(null));
    }

    function filter() {
        console.log("in filter");
    }

    return (
        <div className=''>
            <div className='sync'>
                <button className='addButton' onClick={uploadData}>Sync To Cloud</button>
                <button className="addButton" onClick={filter}>Filter</button>
            </div>

            <div className="sync">
                {!info && <p><i class="fa-solid fa-circle-info"></i></p>}
                {info && <p><i class="fa-solid fa-circle-info"></i> {info}</p>}
            </div>
        
        </div>
    )
}

export default Sync