// Schema for user authentication pairs

// ====== IMPORTS ======

const mongoose = require('mongoose');


// ====== DEFINITION ======

const postSchema = new mongoose.Schema({
    user: String,
    msg: String
});

const Post = new mongoose.model('posts', postSchema);


// ====== EXPORTS ======

module.exports = Post;