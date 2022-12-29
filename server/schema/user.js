const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: String,
    password: String,
    todoData: Object
})

module.exports = mongoose.model('user', User)