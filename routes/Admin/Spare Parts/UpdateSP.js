var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');


router.post('/:Id',function(req,res){
    
 
    var Amount=req.body.Amount;
    var Model=req.body.Model;
    var Description=req.body.Description;
    var item_name=req.body.item_name;


    var updateID=req.params.availability;



    var updateID=req.params.Id;

    
    
    
    connection.query(Data.updateSP,[item_name,Amount,Model,Description,updateID],function(err,respond){
    
      if(err)
      throw err

        console.log('Spare parts updated');
        res.redirect('/Sparts')
       
    });
  
  });
    
    module.exports = router;