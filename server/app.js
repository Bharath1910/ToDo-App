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

app.post('/register', isExists, (req, res) => {
    const {username, password} = req.body

    if (!(req.isExists)) {
        try {
            User.create({username, password, todoData: {}})
            res.status(200).send("Updated DB")
        } 
        catch (error) {
            console.log(error)    
            res.status(401).send("Couldnt update DB")
        }
    } else {
        res.status(200).send("User already exists")
    }
})

app.post('/login', isExists, async (req, res) => {
    const {username, password} = req.body

    if (req.isExists) {
        // check pwd
    } else {
        res.status(200).send("User Doesnt exists")
    }
})


async function isExists(req, res, next) {
    const user = await User.findOne({username: req.body.username})

    if (user === null) {
        req.isExists = false
    } else {
        req.isExists = true
    }

    next()
}

app.listen(3000)