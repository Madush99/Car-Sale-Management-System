var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');
const app = require('../../../app');


router.get('/', function(req, res, next) {

      connection.query(Data.SpareReport,function(sellers_SpareERR,sellers_Spare){
   
      if (!sellers_SpareERR){
      
     
          res.render('Report_sellers_Spare',{

            sellers_Spare:sellers_Spare,
       
        
          });
        }
        else{
          err.render('Error',{ERR:err});
 }
       
  });
});


module.exports = router;