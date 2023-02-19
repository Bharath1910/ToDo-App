const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


require('./config/db.connect').connect()
const User = require('./schema/user');
const user = require('./schema/user');

app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("hello :)")
})

app.post('/api/register', (req, res) => {
    const {username} = req.body

    if (!(req.isExists)) {
        try {
            User.create({todoData: []})
            res.status(200).json("Updated DB")
        } 
        catch (error) {
            console.log(error)    
            res.status(401).json("Couldnt update DB")
        }
    } else {
        res.status(401).json("User already exists")
    }
})

app.post('/api/login', isExists, async (req, res) => {
    const {userID} = req.body

    if (req.isExists) {
        const user = await User.findOne({userID})
        const token = jwt.sign({id: userID}, process.env.JWT_SECRET)
        res.cookie("token", token);
        console.log(user);
        res.status(200).json({token: token})
    } else {
        console.log("not exists!");
        try {
            User.create({userID, todoData: []})
            console.log("made record!");

            const token = jwt.sign({id: userID}, process.env.JWT_SECRET)
            res.cookie("token", token);
            res.status(200).json({token: token})
            
        } catch (error) {
            console.log(error);
        }
    }
})

app.post('/api/getData', verifyToken, async (req, res) => {
    console.log(req.userData);
    res.status(200).json(req.userData)
});

app.post('/api/uploadData', verifyToken, async (req, res) => {
    const userID = req.userData.userID
    console.log(typeof userID);

    await User.updateOne({userID: userID}, {todoData: req.body.data})
    res.status(200).json("updated DB :)")
});

async function isExists(req, res, next) {
    const user = await User.findOne({userID: req.body.userID})

    if (user === null) {
        req.isExists = false
        next()

    } else {
        req.isExists = true
        next()
    }
}

async function verifyToken(req, res, next) {
    const decodedCookie = jwt.verify(req.body.token, process.env.JWT_SECRET)
    const user = await User.findOne({userID: decodedCookie.id})
    req.userData = user
    next()
}

app.listen(5500)

