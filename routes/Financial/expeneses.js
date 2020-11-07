var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM expenses', function(err,rows){

    if (err) throw err;
    console.log(rows);
    res.render('expeneses',{expenses:rows});

  });
  });

  
  router.post('/',function(req,res){
    const exdata = {
      year:req.body.year,
      month:req.body.month,
      electricty:req.body.electricty,
      water:req.body.water,
      salary:req.body.salary,
      other:req.body.other
    };
    
  connection.query("INSERT INTO expenses SET?", exdata, function(err,result){
      if(err) throw err;
      res.redirect('expeneses');
  
    });
  });

  router.get('/deleteExpenses/:id',function(req,res){

    var userid = req.params.id;
    
    connection.query("DELETE FROM expenses WHERE id = ?",[userid],function (err,rows){
      if(err) throw err;
      res.redirect('/expeneses');
    });
  
  });

  router.get('/editexpenses/:id',function(req,res){

    var userid = req.params.id;
  
    connection.query("SELECT * FROM expenses WHERE id = ?",[userid],function(err,rows){
      if(err) throw err;
      res.render('editexpenses',{userdata:rows});
  
    });
   // res.render('edit');
  
  });
  
  router.post('/updateExpn/:id',function(req,res){
  
    var month = req.body.month;
    var electricty = req.body.electricty;
    var water = req.body.water;
    var salary = req.body.salary;
    var other = req.body.other;
  
    var updateId = req.params.id;
  
    connection.query("UPDATE expenses SET month=?,electricty=?,water=?,salary=?,other=? WHERE id = ?",[month,electricty,water,salary,other,updateId],function(err,respond){
      if(err) throw err;

      res.redirect('/expeneses');
    });
  
  });

  
  
  

  module.exports = router;