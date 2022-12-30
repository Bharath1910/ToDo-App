import React, {useState} from 'react';
import './App.css';
import Add from './Add';
import List from './List'

function App() {
    const [data, setData] = useState([])

    return (
        <>
            <Add data={data} setData={setData}/>
            <List data={data}/>
        </>
  );
}

export default App;
