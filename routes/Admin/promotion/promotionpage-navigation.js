var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');

router.get('/' ,function(req,res){
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
 
 module.exports = router;