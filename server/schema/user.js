const mongoose = require('mongoose');

const User = new mongoose.Schema({
    userID: String,
    todoData: Array
})

module.exports = mongoose.model('user', User)