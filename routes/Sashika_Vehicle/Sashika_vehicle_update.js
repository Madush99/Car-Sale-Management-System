var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');



router.post('/:id',function (req,res){

    var model = req.body.model;
    var model_year = req.body.model_year;
    var mileage = req.body.mileage;
    var brand = req.body.brand;
    var fuel_type = req.body.fuel_type;
    var vehi_condition = req.body.vehi_condition;
    var engine_capacity = req.body.engine_capacity;
    var color = req.body.color;
    var availability = req.body.availability;
    var price = req.body.price;
    var description = req.body.description; 

    var updateid = req.params.id;

    connection.query("UPDATE comvehicles SET model=?,model_year=?,mileage=?,brand=?,fuel_type=?,vehi_condition=?,engine_capacity=?,color=?,availability=?,price=?,description=? WHERE id=?",[model,model_year,mileage,brand,fuel_type,vehi_condition,engine_capacity,color,availability,price,description,updateid],function (err,respond){

      if (err) throw err;
      res.redirect('/vehicle_index_redirect')

    });

});
module.exports = router;