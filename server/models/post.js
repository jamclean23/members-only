// Schema for user authentication pairs

// ====== IMPORTS ======

const mongoose = require('mongoose');


// ====== DEFINITION ======

const postSchema = new mongoose.Schema({
    user: String,
    msg: String,
    date: Date
});

const Post = new mongoose.model('posts', postSchema);


// ====== EXPORTS ======

module.exports = Post;