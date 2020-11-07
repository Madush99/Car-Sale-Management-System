
var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

router.get('/', function(req, res, next) {
    
  });

router.get('/NetprofitReport/:id',function(req,res,next){

    var incomeid = req.params.id;
  
    connection.query("SELECT * FROM incomestat WHERE id = ?",[incomeid],function(err,rows){
      if(err) throw err;
      res.render('NetprofitReport',{incomedata:rows});
  
    });
   // res.render('edit');
  
  });
  


    module.exports = router;