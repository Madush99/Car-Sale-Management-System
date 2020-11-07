const express = require('express');
var connection = require('../../config/connection');
const bcrypt = require('bcrypt');
const router = express.Router();



router.post('/', (req, res, next) => {

   var password=req.body.Password;
    var ConfirmPassword=req.body.ConfirmPassword;
   
console.log(password,ConfirmPassword,"REsultttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");

var HasPassword=bcrypt.hashSync(password,10);

   var Name=req.body.Name;
   var  Email=req.body.Email;
   var nic= req.body.nic;
   var ContactNo= req.body.ContactNo;
   var  Gender= req.body.Gender;
   var post= req.body.post;
   var HasPassword=HasPassword;

  if(password==ConfirmPassword){
    connection.query("INSERT INTO user(username, email, NIC,contactno,gender,position,password) VALUES ('" + Name + "','" + Email + "','" + nic + "','" + ContactNo + "','" + Gender + "','" + post + "','" + HasPassword + "')", function(error, results) {
       
        if(error) throw error

        res.render('Login');
    
        });
    }
});


module.exports = router;