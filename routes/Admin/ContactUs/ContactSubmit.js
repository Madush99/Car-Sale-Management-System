var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');


router.post('/', function(req, res, next) {
  
    const contact={
     
        email:req.body.email,
        Message:req.body.message,
        name:req.body.name,
      }
      connection.query(Data.contactUs,contact,function(err,result){

        if(err){
          console.log('Loading error');
        }
      else{
      
        res.redirect('/');
        console.log('Data inserted');
         }
        })





});

module.exports = router;
