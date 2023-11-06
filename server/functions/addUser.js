// Find A users document in the database

// ====== IMPORTS ======

// System
const path = require('path');

// Mongoose
const mongoose = require('mongoose');
const User = require('../models/user.js');

// Password hashing
const bcrypt = require('bcryptjs');

// Dotenv
require('dotenv').config({
    path: path.join(__dirname, '../../config/.env')
});


// ====== FUNCTIONS ======

async function addUser  (username, password) {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT_USER_DATA);
        const db = mongoose.connection;
        db.on('error', () => {
            throw new Error("Mongoose Connection Error");
        });
        
        const newUser = new User({
            name: username,
            password: bcrypt.hashSync(password, 10)
        });

        await newUser.save();

    } catch (err) {
        console.log(err);

    }
}


// ====== EXPORTS ======

module.exports = addUser;