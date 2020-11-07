var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');
var Data = require('./Database/Admin');



router.post('/' ,function(req,res){

var file = req.files.uploaded_image;
  
   const img_name=file.name;
    const empid=req.body.Name;
    const name=req.body.Email;
   const email=req.body.ContactNo;
  
  file.mv('public/img/'+file.name, function(err) {


    var sql = "INSERT INTO `vehicle`(`photo` ,`amount`,`model` ,`description`) VALUES ('" + img_name + "','" + empid + "','" + name + "','" + email + "')";
 
    var query = connection.query(sql, function(err, ress) {

   
        res.render('VADD');
     
 });

});
     
  
 });
 
 module.exports = router;
