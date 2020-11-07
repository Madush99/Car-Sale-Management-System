var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');
var user ="sathma@gmail.com"
var sql="Select * FROM user where Email=?"

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query(sql,user,function (err,respond){
    if (err) {
      throw err;
    }

  res.render('profile',{res:respond});
});
});
module.exports = router;