var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');
var Data = require('./Database/Admin');




router.get('/', function(req, res, next) {
    connection.query(Data.getAdminDashboard,function(EmployeeERR,Employee){
      connection.query(Data.getAdminDashboard,function(SellerERR,Seller){
        connection.query(Data.comvehicles,function(OwnerVehicleERR,OwnerVehicle){
          connection.query(Data.spare_part_db_AdminDashboard,function(OwnerSparepartsERR,OwnerSparepart){
  
  
    if (!EmployeeERR){
      
      if (!SellerERR){
        
        if (!OwnerVehicleERR){
        
          if (!OwnerSparepartsERR){
            res.render('Chart',{
  
              OwnerVehicle:OwnerVehicle[0].total,
              OwnerSpare:OwnerSparepart[0].total,
              Employees:Employee[0].total,
              Sellers:Seller[0].total
              
  
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
  