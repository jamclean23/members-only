// Controller for 404


// ====== IMPORTS ======



// ====== FUNCTIONS ======

function fourOhFourPage (req, res) {
    res.render('fourOhFour.ejs');
}


// ====== EXPORTS ======

module.exports = {
    fourOhFourPage
}