// Schema for user authentication pairs

// ====== IMPORTS ======

const mongoose = require('mongoose');


// ====== DEFINITION ======

const userSchema = new mongoose.Schema({
    name: String,
    password: String
});

const User = new mongoose.model('User', userSchema);


// ====== EXPORTS ======

module.exports = User;