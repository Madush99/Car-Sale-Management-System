  
var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');


router.get('/:Id',function(req,res){

    var userid = req.params.Id;
    connection.query(Data.editVehicle,[userid],function(err,rows){
      
        if(err){
          console.log('Loading error');
        }
        else{
          console.log('Edit Vehicle running');
        res.render('EditVehicle',{SPData:rows});
        }
      });
    });
    module.exports = router;
