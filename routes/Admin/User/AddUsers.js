var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');
const bcrypt = require('bcrypt');


router.post('/' ,function(req,res){

  var passwords=req.body.Password
  var HashPassword = bcrypt.hashSync(passwords,10);

  const userdata={

    empid:req.body.EmpID,
    username:req.body.Name,
    email:req.body.Email,
    NIC:req.body.nic,
    contactno:req.body.ContactNo,
    gender:req.body.Gender,
    position:req.body.Position,
    password:HashPassword
    
  }





connection.query(Data.getaddUser,userdata,function(err,result){

  if(err){
    console.log('Loading error');
  }
else{

  res.redirect('Employee');
  console.log('Data inserted');
   }
  })
});





    module.exports = router;