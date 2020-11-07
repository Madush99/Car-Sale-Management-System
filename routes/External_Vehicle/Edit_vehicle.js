var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.get('/:item_code', function(req,res){


    var editId = req.params.item_code;
  
    connection.query("SELECT * FROM extsellers WHERE item_code = ?",[editId],function(err,rows){
  
      if(err) throw err;
      res.render('edit',{extsellers:rows});
      
  
    })
  
  
  });
  module.exports = router;
