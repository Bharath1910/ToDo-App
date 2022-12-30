import React, {useState} from 'react';
import './App.css';
import Add from './Add'

function App() {
    const [data, setData] = useState([])

    function displayData() {
        console.log(data)
    }
    
    return (
        <>
            <Add data={data} setData={setData}/>
            <button onClick={displayData}>Display Data</button>
        </>
  );
}

export default App;
