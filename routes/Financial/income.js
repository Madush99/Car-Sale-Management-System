var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM income', function(err,rows){

    if (err) throw err;
    console.log(rows);
    res.render('income',{income:rows});

  });
  });

  router.get('/deleteIncome/:id',function(req,res){

    var incomeid = req.params.id;
    
    connection.query("DELETE FROM income WHERE id = ?",[incomeid],function (err,rows){
      if(err) throw err;
      res.redirect('/income');
    });
  
  });

  router.get('/editIncome/:id',function(req,res){

    var incomeid = req.params.id;
  
    connection.query("SELECT * FROM income WHERE id = ?",[incomeid],function(err,rows){
      if(err) throw err;
      res.render('editincome',{income:rows});
  
    });
   // res.render('edit');
  
  });

  router.post('/updateInc/:id',function(req,res){
  
    var year = req.body.year;
    var month = req.body.month;
    var sales = req.body.sales
    var spareparts= req.body.spareparts;
    var ads = req.body.ads;
   
  
    var updateId = req.params.id;
  
    connection.query("UPDATE income SET year=?,month=?,sales=?,spareparts=?,ads=? WHERE id = ?",[year,month,sales,spareparts,ads,updateId],function(err,respond){
      if(err) throw err;

      res.redirect('/income');
    });
  
  });

module.exports = router;