// Route for authentication operations

// ====== IMPORTS ======

// Express
const express = require('express');
const router = express.Router();

// Validation
const { check } = require('express-validator');

// Controller
const authController = require('../controllers/authController.js');

// ====== VARIABLES ======

// Validation

const loginValidation = [
    check('username')
        .notEmpty()
            .trim()
            .escape(),
    check('password')
        .isLength({min: 6})
        .withMessage('Password Must Be at Least 6 Characters')
        .trim()
        .escape()
];


// ====== MAIN ======

// Middleware

router.use(loginValidation);

// Routes
router.use('/logout', authController.logout);
router.use('/sign_up', authController.signUp);
router.use('/add_user', authController.addUser);

// ====== EXPORTS ======

module.exports = router;
