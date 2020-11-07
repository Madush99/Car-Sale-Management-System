var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

router.post('/',function(req,res){

  var file = req.files.uploaded_image;



var item_name=req.body.item_name;
var price=req.body.price;
var brand_model=req.body.brand_model;
var quantity=req.body.quantity;
var availability=req.body.availability;
var description=req.body.description;
var images=file.name;

file.mv('public/img/'+file.name, function(err) {

  var sql = "INSERT INTO `spare_part_db`(`item_name` ,`price`,`brand_model` ,`quantity`,`availability`,`description`,`photo`) VALUES ('" + item_name + "','" +price+ "','" +brand_model+ "','" +quantity+ "','" +availability+ "','" +description+ "','" +images+ "')"

    var query = connection.query(sql, function(err, ress) {


            if(err) throw err;

            res.redirect('/redirect');



});
});

});

module.exports = router;