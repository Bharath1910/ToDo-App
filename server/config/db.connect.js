const mongoose = require('mongoose');
require('dotenv').config()

databaseUrl = process.env.DB_URL

async function connect() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'Todo'
        })
        console.log("Connected!")
    }

    catch (error) {
        console.log(error);
    }
}

module.exports.connect = connect