var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
const app = require('../../../app');
var Data = require('../Database/Admin');

router.get('/', function(req, res, next) {
      connection.query(Data.SpareData, function(err, data){
        connection.query(Data.Sparecount, function(err, count){
        if(err){
          
          res.render('Admin')
        }
else{
        console.log(data);

     res.render('ADSpare',{
       data:data,
      title:'Spare Parts Management',
      count:count[0].total
      });
}

        });
      });

});
 





  module.exports = router;