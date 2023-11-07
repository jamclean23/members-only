// Routes for index path


// ====== IMPORTS ======

// Express
const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/indexController.js');


// ====== ROUTES ======

router.get('/', controller.indexPage);
router.use('/add_post', controller.addPost);
router.use('/remove_post', controller.removePost);


// ====== EXPORTS ======

module.exports = router;