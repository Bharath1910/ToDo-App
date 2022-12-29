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

app.post('/login', isExists, (req, res) => {
    console.log("/login hit")
    const {username, password} = req.body
    User.create({username, password, todoData: {}})
})


async function isExists(req, res, next) {
    const user = await User.findOne({username: req.body.username})

    if (user === null) res.status(401).send("User Doesn't exists")
    next()
}

app.listen(3000)