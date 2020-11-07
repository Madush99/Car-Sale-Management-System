var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.get('/:item_code',function(req,res){

var itemC = req.params.item_code;
  
  connection.query("DELETE FROM spare_part_db WHERE item_code = ?",[itemC],function (err,rows){
  
    if(err) throw err;
    res.redirect('/redirect');
    
  })
  
  
  });
  module.exports = router;