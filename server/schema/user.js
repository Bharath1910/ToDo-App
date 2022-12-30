const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: String,
    password: String,
    todoData: Array
})

module.exports = mongoose.model('user', User)