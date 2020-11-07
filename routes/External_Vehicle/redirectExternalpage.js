var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.get('/', function(req, res){

    connection.query('SELECT * FROM extsellers',function (err,rows) {
  
      if (err) throw err;
      
        res.render('ExternalSeller_Vehi_table', {extsellers:rows});
    })


});


module.exports = router;
