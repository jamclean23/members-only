// Helper functions to be passed to ejs

// ====== FUNCTIONS ======

// Checks if an error exists for the provided field
function checkValidationErrors (field, errorsArray) {

    
    if (errorsArray.length) {
        let result;
        errorsArray.forEach((error) => {
            if (error.path === field) {
                result = error.msg;
            }
        }); 
        return result;
    } else {
        return null;
    }
}

function test () {
    console.log('Ejs functions linked');
}


// ====== EXPORTS ======

module.exports = {
    checkValidationErrors,
    test
};