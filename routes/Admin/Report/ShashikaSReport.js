var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');
const app = require('../../../app');


router.get('/', function(req, res, next) {

      connection.query(Data.SpareReport,function(Shashika_SpareERR,Shashika_Spare){
   
      if (!Shashika_SpareERR){
      
     
          res.render('Report_Shashika_Spare',{

            Shashika_Spare:Shashika_Spare,
       
        
          });
        }
        else{
          err.render('Error',{ERR:err});
 }
       
  });
});


module.exports = router;
