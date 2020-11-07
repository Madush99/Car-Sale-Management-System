
var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');
const bcrypt = require('bcrypt');
var Data = require('../Admin/Database/Admin');
const app = require('../../app');

router.get('/',function(req,res){
 connection.query('SELECT * FROM spare_part_db',function(err,rows){

    if(err) throw err;

    console.log(rows);
    res.render('spare_parts',{
      users:rows,
    });
    

  });
});

  module.exports = router;