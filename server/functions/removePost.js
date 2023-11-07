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

async function addPost (userId) {

    try {
        await mongoose.connect(process.env.MONGO_CONNECT_USER_DATA);
        const db = mongoose.connection;
        db.on('error', () => {
            throw new Error("Mongoose Connection Error");
        });

        await Post.findByIdAndDelete(userId);
        
    } catch (err) {
        console.log(err);
    }
}


// ====== EXPORTS ======

module.exports = addPost;