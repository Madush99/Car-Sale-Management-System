var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');



router.post('/' ,function(req,res){

var file = req.files.uploaded_image;
const img_name=file.name;

connection.query(Data.promotion1Delete,function(err,rows){
  if(err){
    console.log('Promotion ad1 error OCD');
  }
  else{
    console.log('Promotion ad1 Deleted');
  }
});

  file.mv('public/img/promotion/Ads1/'+file.name, function(err) {
    var sql = "INSERT INTO `promotion1`(`promotion`) VALUES ('" + img_name + "')";




    connection.query(sql, function(err, ress) {
      if(err){
      console.log(img_name);
      }
      connection.query(Data.promotion1, function(err, promo1){
        connection.query(Data.promotion2, function(err, promo2){
          connection.query(Data.promotion3, function(err, promo3){
          console.log("img retrived");
          res.render('promotion',{
          promotion3:promo3,
          promotion2:promo2,
          promotion1:promo1,
          title:"Promotion"
          });
        });
        });

      });
   
});




});
 });
 
 module.exports = router;