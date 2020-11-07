const express = require('express');
var connection = require('../../config/connection');
const router = express.Router();



router.post('/:id',function(req,res){

    var s_name=req.body.s_name;
    var nic=req.body.nic;
    var contact =req.body.contact;
    var position=req.body.position;
    var password=req.body.password;
    var gender=req.body.gender;
    var email=req.body.email;
    
     var updateID=req.params.id;

     connection.query("UPDATE user SET username=?, email=?,NIC=?,contactno=?,gender=?,position=?,password=? WHERE Id=?", [s_name,email,nic,contact,gender,position,password,updateID],function (err,respond){
        if (err) throw err;
      
            res.redirect('/profile');

      });      

});


module.exports = router;