var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.get('/:ID',function(req,res){

    var sel_vehicleid = req.params.ID;
    
    connection.query("DELETE FROM addveh WHERE ID = ?",[sel_vehicleid],function (err,rows){
      if(err) throw err;
      res.redirect('/sel_vehi_table');
    })
  
  });
  
  module.exports = router;