var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');



router.get('/:item_code', function(req,res){

  var sparepartcode = req.params.item_code;
 
  connection.query("DELETE FROM extsellers WHERE item_code =?", [sparepartcode], function(err, rows){
 
    if (err) throw err;
    res.redirect('/redirectExternalpage');
  });
 
 });


 
module.exports = router;

