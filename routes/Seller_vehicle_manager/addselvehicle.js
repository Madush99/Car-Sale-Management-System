var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

router.post('/',function(req,res){

    var file = req.files.vehicle_image;
  
  const img_name=file.name;
  var Brand =req.body.Brand;
  var Model =req.body.Model ;
  var ModelYear =req.body.ModelYear ;
  var ContactNo =req.body.ContactNo ;
  var EngineCapacity =req.body.EngineCapacity;
  var Availability =req.body.Availability;
  var Price =req.body.Price;
  var Description =req.body.Description;
  
  
  
  file.mv('public/selVehiclesimages/'+file.name, function(err) {
  
  
  var sql = "INSERT INTO `addveh`(`Brand`,`Model`,`ModelYear`,`ContactNo`,`EngineCapacity`,`Availability`,`Price`,`Description`,`Image`) VALUES ('" + Brand + "','" + Model + "','" + ModelYear + "','" + ContactNo + "','" + EngineCapacity + "','" + Availability + "','" + Price + "','" + Description + "','" + img_name + "')";
   
  var query = connection.query(sql, function(err, ress) {
  
  
      res.redirect('/sel_vehi_table');
   
  });
  });
  });


  module.exports = router;