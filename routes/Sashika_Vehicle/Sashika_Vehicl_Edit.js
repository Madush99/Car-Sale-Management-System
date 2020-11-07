var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

router.get('/:id',function (req,res){


    var vehicleid = req.params.id;
    connection.query("SELECT * FROM comvehicles WHERE id = ?",[vehicleid],function (err,rows){
  
      if(err) throw err;
      res.render('editvehi',{vehidata:rows});
    })
  
  
  });


  module.exports = router;