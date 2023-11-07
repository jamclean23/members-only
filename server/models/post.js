// Schema for user authentication pairs

// ====== IMPORTS ======

const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


// ====== DEFINITION ======

const postSchema = new mongoose.Schema({
    user: String,
    userId: String,
    msg: String,
    date: Date,
});

const Post = new mongoose.model('posts', postSchema);


// ====== EXPORTS ======

module.exports = Post;