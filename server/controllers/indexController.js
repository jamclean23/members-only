// Controller for index page


// ====== IMPORTS ======

const addPostDb = require('../functions/addPost.js');
const findPostsDb = require('../functions/findPosts.js');
const removePostDb = require('../functions/removePost.js');


// ====== FUNCTIONS ======

async function indexPage (req, res) {
    // Get posts
    const posts = await findPostsDb();
    // Render page

    if (req.user) {
        res.render('index', { admin: req.user.admin, userId: req.user.id, user: req.user.name, posts });
    } else {
        res.render('index', { admin: null, userId: null, user: null, posts });
    }
}

async function addPost (req, res) {
    if (req.user) {
        await addPostDb(req.user.name, req.user.id, req.body.msg);
    }
    res.redirect('/');
}

async function removePost (req, res) {

    if (req.body.postId) {
        try {
            await removePostDb(req.body.postId);
        } catch (err) {
            console.log(err);
        } finally {
            res.redirect('/');
        }
    } else {
        console.log('No id provided');
    }
}


// ======= EXPORTS ======

module.exports = {
    indexPage,
    addPost,
    removePost
}
