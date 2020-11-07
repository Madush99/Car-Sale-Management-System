var express = require('express');
var router = express.Router();
const app = require('../../../app');
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');

router.get('/:Id', function(req, res) {

    var spd=req.params.Id;
    console.log('Parameter is',spd);
    connection.query(Data.vehicleDeletes,[spd],function(err,rows){

        if(err){
    console.log('Error');

        }
else{
      res.redirect('/Vehicle');
      console.log('Success');
    }
    });

});
 
  module.exports = router;