var express = require('express');
const { connect } = require('../../app');
const connection = require('../../config/connection');
var router = express.Router();


router.get('/', function(req, res, next) { 
    console.log('run');
    res.render('salary', {title:'Salary'});
});

router.post('/', function (req,res){

    const saldata = {
      Employee_Name:req.body.name,
      Month:req.body.month,
      Basic_Salary:req.body.basicsalary,
      Account_No:req.body.accountno,
      Bank_Name : req.body.bankname,
      Working_Days:req.body.workingdays,
      Post:req.body.post,
      Date:req.body.date
    }

    connection.query("INSERT INTO salary SET ?",saldata,function (err,result) {

        if(err) throw err;
        res.redirect('/salary');
      });
    
    });

module.exports = router;
