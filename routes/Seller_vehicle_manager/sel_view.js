var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {

    connection.query('SELECT * FROM addveh', function (err,rows){
    
      if (err) throw err;
    
     
      res.render('sel_view',{selVehicles:rows} );
    });
    
    });
    

module.exports = router;
