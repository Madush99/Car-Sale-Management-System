var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');
const bcrypt = require('bcrypt');



router.post('/:id',function(req,res){
    var empid=req.body.empid;
    var name=req.body.name;
    var email=req.body.email;
    var NIC =req.body.nic;
    var contactno=req.body.contactno;
    var gender=req.body.gender;
    var Position=req.body.Position;
    var password=req.body.password;
    
   
    var HashPassword = bcrypt.hashSync(password,10);



    var updateID=req.params.id;
    connection.query(Data.getupdateUser,[empid,name,email,NIC,contactno,gender,Position,HashPassword,updateID],function(err,respond){
    
      if(err) {
        console.log('Loading error');
      }
      else
      {
      res.redirect('/Employee')
       }
      });
    });

    
    module.exports = router;