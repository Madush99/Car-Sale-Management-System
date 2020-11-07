var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.get('/', function(req, res, next) {

  connection.query('SELECT * FROM incomestat ', function(err,rows){

    if (err) throw err;
    console.log(rows);
    res.render('incomestat',{incomestat:rows});

  });
  //console.log('Working');
  
});



router.get('/viewincome/:id',function(req,res){

  var incomeid = req.params.id;

  connection.query("SELECT * FROM incomestat WHERE id = ?",[incomeid],function(err,rows){
    if(err) throw err;
    res.render('viewincome',{incomedata:rows});

  });
 // res.render('edit');

});

router.post('/updatestat/:id',function(req,res){
  
  var month = req.body.month;
  var income = req.body.income;
  var expenses= req.body.expenses;
  var netprofit = req.body.netprofit;
 

  var updateId = req.params.id;

  connection.query("UPDATE incomestat SET month=?,income=?,expenses=?,netprofit=? WHERE id = ?",[month,income,expenses,netprofit,updateId],function(err,respond){
    if(err) throw err;

    res.redirect('/incomestat');
  });

});

router.get('/NetprofitReport/:id',function(req,res){

  var incomeid = req.params.id;

  connection.query("SELECT * FROM incomestat WHERE id = ?",[incomeid],function(err,rows){
    if(err) throw err;
    res.render('NetprofitReport',{incomedata:rows});

  });
 // res.render('edit');

});

module.exports = router;
