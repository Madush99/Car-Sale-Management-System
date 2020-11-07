var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.get('/', function(req, res, next) {

    connection.query('SELECT * FROM addveh', function (err,rows){
    
      if (err) throw err;
    
      console.log(rows);
      res.render('sel_vehicle_table',{sel_vehicle:rows} );
    });
    
    });

      
    
      
      


  

  module.exports = router;