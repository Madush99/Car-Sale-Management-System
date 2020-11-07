var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');


router.post('/:Id',function(req,res){
    
 
    var Amount=req.body.Amount;
    var Brand=req.body.Brand;
    var Color=req.body.Color;
    var Model=req.body.Model;
    var engine_capacity=req.body.engine_capacity;
    var mileage=req.body.mileage;
    var Description=req.body.Description;
    
    var updateID=req.params.Id;

    connection.query(Data.vehicleupdate,[Model,mileage,Brand,engine_capacity,Color,Amount,Description,updateID],function(err,respond){

        console.log('Spare parts updated');
        res.redirect('/Vehicle')
       
    });
  
  });
    
    module.exports = router;