// Find A users document in the database

// ====== IMPORTS ======

const path = require('path');

const mongoose = require('mongoose');

const User = require('../models/user.js');

// Dotenv
require('dotenv').config({
    path: path.join(__dirname, '../../config/.env')
});


// ====== FUNCTIONS ======

async function findUser  (user) {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT_USER_DATA);
        const db = mongoose.connection;
        db.on('error', () => {
            throw new Error("Mongoose Connection Error");
        });
        
        const result = await User.find({'name': user});
    
        return result;

    } catch (err) {
        console.log(err);
        throw new Error(err);

    } finally {
        mongoose.disconnect();

    }

}


// ====== EXPORTS ======

module.exports = findUser;