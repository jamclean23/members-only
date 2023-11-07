// Controller for index page


// ====== IMPORTS ======

const addPostDb = require('../functions/addPost.js');
const findPostsDb = require('../functions/findPosts.js');

// ====== FUNCTIONS ======

async function indexPage (req, res) {
    // Get posts
    const posts = await findPostsDb();
    console.log(posts);
    // Render page

    if (req.user) {
        res.render('index', { user: req.user.name, posts });
    } else {
        res.render('index', { user: null, posts });
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
