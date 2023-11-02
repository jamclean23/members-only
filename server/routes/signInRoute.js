// Route for sign in operations


// ====== IMPORTS ======

// Express
const express = require('express');
const router = express.Router();

// Controller
const signInController = require('../controllers/signInController.js');


// ====== MIDDLEWARE ======



// ====== ROUTES ======

router.use(
    '/submit_creds',
    signInController.signIn
);
router.use('/', signInController.signInPage);


// ====== EXPORTS ======

module.exports = router;

