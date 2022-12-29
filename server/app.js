const express = require('express');
const mongoose = require('mongoose');
require('./config/db.connect').connect()
const User = require('./schema/user')

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

async function isExists(req, res, next) {
    console.log(":)")
}

app.listen(3000)