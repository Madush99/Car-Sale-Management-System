var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

/* GET home page. */
router.get('/', function(req, res, next) { 

  connection.query('SELECT * FROM user',function (err,rows) {

    if (err) throw err;
    
      res.render('ExtSellers', {users:rows});
  })

});

module.exports = router;

