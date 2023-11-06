// Controller for attempting login


// ====== IMPORTS ======

// Validation and sanitation
const { validationResult } = require("express-validator");

// Ejs helper functions
const ejsHelpers = require('../views/ejsFunctions.js');

// MongoDb user lookup
const findUser = require('../functions/findUser.js');
const addUserDb = require('../functions/addUser.js');


// ====== FUNCTIONS ======

async function logout (req, res) {
    req.logout((err) => {
        if (err) {
            console.log('LOGOUT ERROR');
            console.log(err);
            next(err);
        } else {
            res.redirect('/');
        }
    });
}

function signUp (req, res) {
    res.render('sign-up', {ejsHelpers, errors: []});
}

async function addUser (req, res) {
    console.log('\n**********\nAttempting to add new user...');
    const errors = validationResult(req).array();

    console.log('Username: ' + req.body.username);
    console.log('Password: ' + req.body.password);
    console.log('Looking up username');

    try {
        const result = await findUser(req.body.username);
        if (result.length) {
            console.log('\x1B[31mUsername taken.\x1B[37m\n');
            errors.push({
                path: 'usernameTaken',
                msg: 'Username Taken.'
            })
        } else {
            try {
                await addUserDb(req.body.username, req.body.password);
                console.log('\x1B[32mUser was added.\x1B[37m\n');
        
            } catch (err) {
                console.log(err);
                console.log('\x1B[31mUser was not added.\x1B[37m\n');
                res.status(400).send(err);
                return;
            }
            console.log('\x1B[32mUsername available.\x1B[37m');
        }
    } catch (err) {
        console.log(err);
    }
    
    console.log(errors);

    if (errors.length) {
        res.render('sign-up.ejs', {ejsHelpers, errors});

    } else {   
        res.send('Account created (mock)')
    }
}

// ====== EXPORTS ======

module.exports = {
    logout,
    signUp,
    addUser
}