// Server for members-only

// ====== IMPORTS/SETUP =======

// System
const PORT = 3000;
const path = require('path');

// Dotenv
require('dotenv').config({
    path: path.join(__dirname, '../config/.env')
});

console.log(process.env.MONGO_CONNECT);

// Express
const express = require('express');
const app = express();

// Sessions
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Mongoose
const mongoose = require('mongoose');
const User = require('./models/user.js');


// ====== MAIN ======

// == SETUP

// Ejs
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Cookies/session
// ***

// ROUTES

// test
app.get('/test', (req, res) => {
    res.render('test');
});

// == SERVER LISTENER

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));


// ====== FUNCTIONS ======

//  test
async function test  () {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT_USER_DATA);
        const db = mongoose.connection;
        db.on('error', () => {
            throw new Error("Mongoose Connection Error");
        });
        
        const newUser = new User({
            name: 'test2',
            password: 'testpassword'
        });
        
        const result = await User.find();
    
        console.log(result);

    } catch (err) {
        throw new Error(err);

    } finally {
        mongoose.disconnect();

    }


}
    

