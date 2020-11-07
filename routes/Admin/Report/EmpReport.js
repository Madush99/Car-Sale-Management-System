var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');
const app = require('../../../app');


router.get('/', function(req, res, next) {

      connection.query(Data.employeeReport,function(EMPERR,EMP){
   
      if (!EMPERR){
      
     
          res.render('Report_Sellers',{

            EMP:EMP,
       
        
          });
        }
        else{
          err.render('Error',{ERR:err});
 }
       
  });
});


module.exports = router;