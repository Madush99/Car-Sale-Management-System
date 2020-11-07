
var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');


router.get('/' ,function(req,res){



connection.query(Data.promotion2Delete,function(err,rows){
    if(err){
      console.log('Promotion ad1 error OCD');
    }
    else{
     res.redirect('/Promotion');
    }
  });

});
 
module.exports = router;