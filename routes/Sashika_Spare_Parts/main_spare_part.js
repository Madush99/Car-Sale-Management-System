var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

router.get('/',function(req,res){
 

  });

  router.get('/get_part/:item_code',function(req,res){

    var itemC = req.params.item_code;

    connection.query("SELECT * FROM spare_part_db WHERE item_code = ?",[itemC],function (err,rows){


      if(err) throw err;
      res.redirect('/');
      
    
    
    });
  });
  
    console.log('itemC');


module.exports = router;