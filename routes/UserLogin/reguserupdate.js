const express = require('express');
var connection = require('../../config/connection');
const router = express.Router();
var user ="sathma@gmail.com"
var sql="Select * FROM user where Email=?"



router.get('/:id',function(req,res){
      

      connection.query(sql,user,function (err,respond){
            if (err) {
              throw err;
            }
        
          res.render('Reguserupdate',{res:respond});
        });
      })       




module.exports = router;