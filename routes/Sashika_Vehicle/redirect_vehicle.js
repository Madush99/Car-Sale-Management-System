var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.get('/' ,function(req,res){

    

connection.query('SELECT * FROM comvehicles', function (err,rows){

    if (err) throw err;
  
    console.log(rows);
    res.render('vehicle_index',{vehicles:rows} );
  });

});
  module.exports = router;