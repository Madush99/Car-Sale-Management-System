
var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');






router.post('/',function(req,res){

    var file = req.files.uploaded_image;
  
  const img_name=file.name;
  var model=req.body.model;
  var model_year=req.body.model_year;
  var mileage=req.body.mileage;
  var brand=req.body.brand;
  var fuel_type=req.body.fuel_type;
  var vehi_condition=req.body.vehi_condition;
  var engine_capacity=req.body.engine_capacity;
  var color=req.body.color;
  var availability=req.body.availability;
  var price=req.body.price;
  var description=req.body.description;
  
  file.mv('public/vehiclesimages/'+file.name, function(err) {
  
  
  var sql = "INSERT INTO `comvehicles`(`model`,`model_year`,`mileage`,`brand`,`fuel_type`,`vehi_condition`,`engine_capacity`,`color`,`availability`,`price`,`description`,`vehi_image`) VALUES ('" + model + "','" + model_year + "','" + mileage + "','" + brand + "','" + fuel_type + "','" + vehi_condition + "','" + engine_capacity + "','" + color + "','" + availability + "','" + price + "','" + description + "','" + img_name + "')";
   
connection.query(sql, function(err, ress) {
  
  
      res.redirect('/vehicle_index_redirect');
   
  });
  });
  });
  
  module.exports = router;