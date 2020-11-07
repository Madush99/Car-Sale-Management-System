var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');
var Data = require('./Database/Admin');



router.get('/' ,function(req,res){

        res.render('SADD');

 });
 
 module.exports = router;
