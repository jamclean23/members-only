// Route for sign in operations


// ====== IMPORTS ======

// Express
const express = require('express');
const router = express.Router();

// Controller
const fourOhFourController = require('../controllers/fourOhFourController.js');

// ====== ROUTES ======

router.use('/', fourOhFourController.fourOhFourPage);


// ====== EXPORTS ======

module.exports = router;

