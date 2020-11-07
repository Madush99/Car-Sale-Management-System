var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');



router.get('/:ID',function (req,res){


    var sel_vehicleid = req.params.ID;
    connection.query("SELECT * FROM addveh WHERE ID = ?",[sel_vehicleid],function (err,rows){
  
      if(err) throw err;
      res.render('update_sel_vehicle',{selVehidata:rows});
    })
  
  
  });





module.exports = router;