var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.get('/:item_code', function(req,res){


  var editId = req.params.item_code;

  connection.query("SELECT * FROM spare_part_db WHERE item_code = ?",[editId],function(err,rows){

    if(err) throw err;
    res.render('update_part',{spareData:rows});
    

  })


});


module.exports = router;