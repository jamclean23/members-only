// Middleware for checking if the user is logged in.


// ====== FUNCTIONS ======

function checkAuth (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/sign_in');
    }
}


// ====== EXPORTS ======

module.exports = checkAuth;