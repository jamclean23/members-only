// Controller for index page


// ====== IMPORTS ======

const addPostDb = require('../functions/addPost.js');


// ====== FUNCTIONS ======

function indexPage (req, res) {
    if (req.user) {
        res.render('index', { user: req.user.name });
    } else {
        res.render('index', { user: null});
    }
}

async function addPost (req, res) {
    if (req.user) {
        await addPostDb(req.user.name, req.user.id, req.body.msg);
    }
    res.redirect('/');
}

function removePost (req, res) {

}


// ======= EXPORTS ======

module.exports = {
    indexPage,
    addPost
}
