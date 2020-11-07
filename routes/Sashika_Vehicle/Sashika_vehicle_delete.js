var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');



router.get('/:id',function(req,res){

  var vehicleid = req.params.id;
  
  connection.query("DELETE FROM comvehicles WHERE id = ?",[vehicleid],function (err,rows){
    if(err) throw err;
    res.redirect('/vehicle_index_redirect');
  });

});




module.exports = router;