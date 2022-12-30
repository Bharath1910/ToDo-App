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

app.post('/api/register', isExists, encrypt, (req, res) => {
    const {username} = req.body

    if (!(req.isExists)) {
        try {
            User.create({username, password: req.hash, todoData: {}})
            res.status(200).json("Updated DB")
        } 
        catch (error) {
            console.log(error)    
            res.status(401).json("Couldnt update DB")
        }
    } else {
        res.status(200).json("User already exists")
    }
})

app.post('/api/login', isExists, async (req, res) => {
    const {username, password} = req.body

    if (req.isExists) {
        const user = await User.findOne({username})

        bcrypt.compare(password, user.password)
            .then((result) => {
                if (result) {
                    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
                    res.cookie("token", token);
                    res.status(200).json({token: token})
                } else {
                    res.status(200).json("wrong pass :(")
                }
            })
    } else {
        res.status(200).send("User Doesnt exists")
    }
})

app.post('/api/getData', verifyToken, async (req, res) => {
    req.userData.password = undefined
    res.status(200).json(req.userData)
});

app.post('/api/uploadData', verifyToken, async (req, res) => {
    id = req.userData.id
    await User.updateOne({_id: id}, {todoData: [req.body.data]})
    res.status(200).json("updated DB :)")
});

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
    const {password} = req.body

    bcrypt.hash(password, 10)
        .then(
            (hash) => {
                console.log(hash)
                req.hash = hash
                next()
            }
        )
}

async function verifyToken(req, res, next) {
    const decodedCookie = jwt.verify(req.body.token, process.env.JWT_SECRET)
    const user = await User.findById(decodedCookie.id)
    req.userData = user
    next()
}

app.listen(5500)

