var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');




router.get('/:Id',function(req,res){
    var userid=req.params.Id;
    connection.query("DELETE FROM user WHERE Id=?",[userid],function(err,rows){
    if(err){
      console.log('Loading error');
    }
    else{

      res.redirect('/');
      console.log('A user deleted');
       }
      })
    });



    
    module.exports = router;