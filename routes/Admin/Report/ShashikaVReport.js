var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');
const app = require('../../../app');


router.get('/', function(req, res, next) {

      connection.query(Data.VehicleReport,function(Shashika_VehicleERR,Shashika_Vehicle){

      if (!Shashika_VehicleERR){
      
     
          res.render('Report_Shashika_Vehicle',{

            Shashika_Vehicle:Shashika_Vehicle,
       
        
          });
        }
        else{
          err.render('Error',{ERR:err});
 }
       
  });
});


module.exports = router;
