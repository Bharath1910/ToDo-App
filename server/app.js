const express = require('express');

app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("hello :)")
})

app.post('/login', (req, res) => {
    const {username, password} = req.body
    console.log(username)
    console.log(password);
})

app.listen(3000)