var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

// router.get('/', function(req, res, next) {
//   //res.send('respond with a resource');
// });


    router.get('/:id',function(req,res,next){

      var itemC = req.params.id;
  
      connection.query("SELECT * FROM comvehicles WHERE id = ?",[itemC],function (err,rows){
  
  
        if(err) throw err;
        res.render('vehicle_profile',{res:rows});
        
        console.log(rows);
      
      });

      


    });
    
    module.exports = router;