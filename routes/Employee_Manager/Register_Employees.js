const express = require('express');
const User = require('../../core/user');
const router = express.Router();

// create an object from the class User in the file core/user.js
const user = new User();

// Post register data
router.post('/', (req, res, next) => {
    // prepare an object containing all user inputs.
    let userInput = {
        
        empid:req.body.EmpID,
        username: req.body.username,
        email: req.body.email,
        NIC: req.body.nic,
        contactno:req.body.contactno,
        gender: req.body.gender,
        position: req.body.position,
        password: req.body.password  
    };


console.log("Resulttttttttttttttttttttttt",userInput)

    // call create function. to create a new user. if there is no error this function will return it's id.
    user.create(userInput, function(lastId) {
        // if the creation of the user goes well we should get an integer (id of the inserted user)
        if(lastId) {
            // Get the user data by it's id. and store it in a session.
            user.find(lastId, function(result) {

                res.render('EM');
            });

        }else {
            console.log('Error creating a new user ...');
        }
    });

});


module.exports = router;