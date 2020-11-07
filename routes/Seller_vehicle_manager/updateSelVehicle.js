
var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');



router.post('/:ID',function (req,res){

    var Brand = req.body.Brand;
    var Model = req.body.Model;
    var ModelYear = req.body.ModelYear;
    var ContactNo = req.body.ContactNo ;
    var EngineCapacity = req.body.EngineCapacity;
    var Availability = req.body.Availability ;
    var Price = req.body.Price;
    var Description = req.body.Description ;
   

    var updateid = req.params.ID;

    connection.query("UPDATE addveh SET Brand=?,Model=?,ModelYear=?,ContactNo=?,EngineCapacity=?,Availability=?,Price=?,Description=? WHERE ID=?",[Brand,Model,ModelYear,ContactNo,EngineCapacity,Availability,Price,Description,updateid],function (err,respond){

      if (err) throw err;
      console.log('respond')
      res.redirect('/sel_vehi_table');

    });

});

module.exports = router;