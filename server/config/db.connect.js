const mongoose = require('mongoose');
require('dotenv').config()

databaseUrl = process.env.DB_URL

async function connect() {
    try {
        await mongoose.connect(databaseUrl)
    }

    catch (error) {
        console.log(error);
    }
}

export default connect