var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');
const app = require('../../../app');


router.get('/', function(req, res, next) {

      connection.query(Data.employeeReport,function(sellerERR,sellers){
   
      if (!sellerERR){
      
     
          res.render('Report_Sellers',{

            sellers:sellers,
       
        
          });
        }
        else{
          err.render('Error',{ERR:err});
 }
       
  });
});


module.exports = router;