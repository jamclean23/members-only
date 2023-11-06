// Server for members-only

// ====== IMPORTS/SETUP =======

// System
const PORT = 3000;
const path = require('path');

// Dotenv
require('dotenv').config({
    path: path.join(__dirname, '../config/.env')
});

// Unique key gen
const uniqid = require('uniqid');

// Express
const express = require('express');
const app = express();

// Sessions
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./functions/passport-config.js');
passportConfig.initialize(passport);

// Mongoose
const mongoose = require('mongoose');
const User = require('./models/user.js');

// Routes
const authRoute = require('./routes/authRoute.js');
const signInRoute = require('./routes/signInRoute.js');
const fourOhFourRoute = require('./routes/fourOhFourRoute.js');
const indexRoute = require('./routes/indexRoute.js');


// Ejs helper functions
const ejsHelpers = require('./views/ejsFunctions.js');

// Check authentication function
const checkAuth = require('./functions/checkAuth.js');


// ====== MAIN ======


// == SETUP

// Public resources
console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

// Ejs
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Middleware
app.use((req, res, next) => {
    console.log(req.path);
    next();
});

// Body parsing
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: uniqid(),
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// ROUTES


app.use('/', indexRoute);

// Sign in
app.get('/sign_in', signInRoute);

app.post('/sign_in', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/sign_in'
}));

// test
app.get(
    '/test',
    checkAuth,
    (req, res) => {
        res.render('test');
    }
);

// Authentication
app.use('/auth', authRoute);


// 404
app.use(
    '*',
    fourOhFourRoute
);

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
    

