var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');
var Data = require('./Database/Admin');



router.post('/' ,function(req,res){

var file = req.files.uploaded_image;
  
   const img_name=file.name;
    const empid=req.body.Email;
    const name=req.body.Name;
   const email=req.body.ContactNo;
  

  file.mv('public/img/'+file.name, function(err) {


    var sql = "INSERT INTO `spareparts`(`photo` ,`amount`,`model` ,`description`) VALUES ('" + img_name + "','" + name + "','" + empid + "','" + email + "')";
 
    var query = connection.query(sql, function(err, ress) {

   
        res.render('ADSpare');
     
 });

});
     
  
 });
 
 module.exports = router;
