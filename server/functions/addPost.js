// Adds a new post to the database


// ====== IMPORTS ======

// System
const path = require('path');

// Mongoose
const mongoose = require('mongoose');
const Post = require('../models/post.js');

// Dotenv
require('dotenv').config({
    path: path.join(__dirname, '../../config/.env')
});


// ====== FUNCTIONS ======

async function addPost (user, userId, msg) {
    console.log(user);
    console.log(userId);
    console.log(msg);

    try {
        await mongoose.connect(process.env.MONGO_CONNECT_USER_DATA);
        const db = mongoose.connection;
        db.on('error', () => {
            throw new Error("Mongoose Connection Error");
        });

        const post = new Post({
            user: user,
            msg: msg,
            date: new Date()
        });

        await post.save();
        
    } catch (err) {
        console.log(err);
    }
}


// ====== EXPORTS ======

module.exports = addPost;