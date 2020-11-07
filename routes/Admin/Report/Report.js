var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');
const app = require('../../../app');


router.get('/', function(req, res, next) {
  connection.query(Data.employeeReport,function(EmployeeERR,Employee){
    connection.query(Data.employeeReport,function(SellerERR,Seller){
      connection.query(Data.VehicleReport,function(OwnerVehicleERR,Vehicle){
        connection.query(Data.SpareReport,function(OwnerSparepartsERR,Sparepart){


  if (!EmployeeERR){
    
    if (!SellerERR){
      
      if (!OwnerVehicleERR){
      
        if (!OwnerSparepartsERR){
          res.render('Report',{

            OwnerVehicle:Vehicle,
            OwnerSpare:Sparepart,
            Employees:Employee,
            Sellers:Seller,
        
          });
        }
        else{
          err.render('Error',{ERR:err});
        }
      }
    else{
      err.render('Error',{ERR:err});
       }
   }
  else{
  err.render('Error',{ERR:err});
 }
 
 }
       });
     });
    });
  });
});


module.exports = router;
