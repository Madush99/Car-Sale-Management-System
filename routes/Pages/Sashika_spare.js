var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');
var Data = require('../Admin/Database/Admin');
const spareparts = 'SELECT * FROM spare_part_db';


router.get('/',function(req,res){
  connection.query(spareparts,function(err,rows){
    if(err) throw err;
    console.log(rows);

                      connection.query(Data.promotion1, function(err, promo1){
                        connection.query(Data.promotion2, function(err, promo2){
                          connection.query(Data.promotion3, function(err, promo3){
                            connection.query('SELECT * FROM extsellers', function(err, rows2){
                          res.render('feed',{
                          promotion3:promo3,
                          promotion2:promo2,
                          promotion1:promo1,
                          spare:rows,
                          spare2:rows2,
                          Auth:"TRUE"
    
                          });
                        });
                      });
                        });
                    });
     });

  });

module.exports = router;