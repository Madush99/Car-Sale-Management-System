var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.post('/:item_code',function(req,res){

  var item_name = req.body.item_name;
  var price = req.body.price;
  var brand_model = req.body.brand_model;
  var quantity = req.body.quantity;
  var availability=req.body.availability;
  var description = req.body.description;

  var updateItem = req.params.item_code;

  connection.query("UPDATE spare_part_db SET item_name=?,price = ?,brand_model =?,quantity=?,availability =?,description =? WHERE item_code =?",[item_name,price,brand_model,quantity,availability,description,updateItem],function (err,respond){

    if(err) throw err;
    res.redirect('/redirect');

  });


});

module.exports = router;