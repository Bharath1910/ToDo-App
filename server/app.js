const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

require('./config/db.connect').connect()
const User = require('./schema/user')

app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("hello :)")
})

app.post('/register', isExists, encrypt, (req, res) => {
    const {username} = req.body

    if (!(req.isExists)) {
        try {
            User.create({username, password: req.hash, todoData: {}})
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
        const user = await User.findOne({username})

        bcrypt.compare(password, user.password)
            .then((result) => {
                if (result) {
                    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
                    res.cookie("token", token)

                    res.status(200).send("Right pass")
                } else {
                    res.status(200).send("wrong pass :(")
                }
            })
    } else {
        res.status(200).send("User Doesnt exists")
    }
})

async function isExists(req, res, next) {
    const user = await User.findOne({username: req.body.username})

    if (user === null) {
        req.isExists = false
        next()

    } else {
        req.isExists = true
        next()
    }
}

function encrypt(req, res, next) {
    console.log("encrypt middleware was hit")
    const {username, password} = req.body

    bcrypt.hash(password, 10)
        .then(
            (hash) => {
                console.log(hash)
                req.hash = hash
                next()
            }
        )
}

app.listen(3000)