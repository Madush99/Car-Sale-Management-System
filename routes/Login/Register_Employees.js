const express = require('express');
const User = require('../../core/user');
const router = express.Router();

// create an object from the class User in the file core/user.js
const user = new User();

// Post register data
router.post('/', (req, res, next) => {
    // prepare an object containing all user inputs.
   var password=req.body.Password;
    var ConfirmPassword=req.body.ConfirmPassword;
    
    
    if(password==ConfirmPassword){

    let userInput = {
        empid: req.body.EmpID,
        name: req.body.Name,
        email: req.body.Email,
        NIC: req.body.nic,
        contactno: req.body.ContactNo,
        gender: req.body.Gender,
        position:req.body.Position,
        password: req.body.Password,
      
    };
    // call create function. to create a new user. if there is no error this function will return it's id.
    user.create(userInput, function(lastId) {
        // if the creation of the user goes well we should get an integer (id of the inserted user)
        if(lastId) {
            // Get the user data by it's id. and store it in a session.
            user.find(lastId, function(result) {

                res.render('Login');
            });

        }else {
            console.log('Error creating a new user ...');
        }
    });
    }else{
        console.log('Password not match');
    }
});


module.exports = router;