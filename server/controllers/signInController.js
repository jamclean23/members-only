// Controller for sign in operations


// ====== IMPORTS ======



// ====== FUNCTIONS ======

function signInPage (req, res) {
    res.render('sign-in', {});
}

function signIn (req, res) {
    console.log(req.user);
    res.send('Creds submitted');
}

// ====== EXPORTS ======

module.exports = {
    signInPage,
    signIn
}