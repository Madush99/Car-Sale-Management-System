var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

router.get('/', function(req, res, next) { 

    connection.query('SELECT * FROM salary',function (err,rows) {
  
      if (err) throw err;
        console.log(rows);
  
        res.render('salarytable', {salary:rows});
    })
  
  });

  router.get('/deletesalary/:id', function(req,res) { 
  
    var sid = req.params.id;
  
    connection.query("DELETE FROM salary WHERE id = ?",[sid],function (err,rows) {
        if(err) throw err;
        res.redirect('/salarytable');
    });
  });

  router.get('/updatesalary/:id', function(req, res) { 
  
    var sid = req.params.id;
    connection.query("SELECT * FROM salary WHERE id = ?", [sid], function (err,rows) {
      if(err) throw err;
      res.render('salaryupdate', {saldata:rows});
    })
  
  });

  router.post('/updatesalary/:id', function(req,res){

    var Employee_Name = req.body.name;
    var Month = req.body.month;
    var Basic_Salary = req.body.basicsalary;
    var Account_No = req.body.accountno;
    var Bank_Name = req.body.bankname;
    var Working_Days = req.body.workingdays;
    var Post = req.body.post;
    var Date = req.body.date;

    var uid = req.params.id;
  
    connection.query("UPDATE salary SET Employee_Name=?,Month=?,Basic_Salary=?,Account_No=?,Bank_Name=?,Working_Days=?,Post=?,Date=? WHERE id=?", [Employee_Name,Month,Basic_Salary,Account_No,Bank_Name,Working_Days,Post,Date,uid],function (err,respond){
      if (err) throw err;
      res.redirect('/salarytable')
    })
  });
  

  module.exports = router;