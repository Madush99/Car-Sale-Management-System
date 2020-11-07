var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');
const app = require('../../../app');


router.get('/', function(req, res, next) {

      connection.query(Data.employeeReport,function(Sellers_VehicleERR,Sellers_Vehicle){
   
      if (!Sellers_VehicleERR){
      
     
          res.render('Report_Sellers_Vehicle',{

            Sellers_Vehicle:Sellers_Vehicle,
       
        
          });
        }
        else{
          err.render('Error',{ERR:err});
 }
       
  });
});


module.exports = router;
