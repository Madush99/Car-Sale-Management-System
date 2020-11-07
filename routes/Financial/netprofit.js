var express = require('express');
const { or } = require('sequelize/types');
var router = express.Router();
var connection = require('../../config/connection');


const totExpenses = 'SELECT SUM( electricty + water + salary + other )net FROM expenses WHERE year = "2020" ';
const totIncome = 'SELECT SUM( sales + spareparts + ads) total FROM income WHERE year = "2020" ';
const netprofit = 'SELECT (SELECT SUM( sales + spareparts + ads) FROM income WHERE year = "2020") - (SELECT SUM( electricty + water + salary + other ) FROM expenses WHERE year = "2020") as netprofit';


router.get('/', function(req, res, next) {

  connection.query(totExpenses,function(err,results){
    if (err) throw err;
    console.log(results);

    connection.query(totIncome,function(err,income){
      if (err) throw err;
      console.log(income);

      connection.query(netprofit,function(err,profit){
        if (err) throw err;
      console.log(profit);
      res.render('netprofit',{results:results[0].net, income:income[0].total, profit:profit[0].netprofit});
  });
});
});
});



  router.post('/',function(req,res){
    const exdata = {
      year:req.body.year,
      income:req.body.income,
      expenses:req.body.expenses,
      netprofit:req.body.netprofit
    };
    


    const year = {year:req.body.year} ;
    
    if(exdata.year == 2020 || exdata.year >= 2020 ){
      connection.query("INSERT INTO incomestat SET?", exdata, function(err,result){
        if(err) throw err;
        res.redirect('incomestat');
      });
    }else{
     
      res.send("This Year Already Exists");
      console.log("Working");
      
      
    }
    
  
  
    
  });
  // connection.query("INSERT INTO incomestat SET?", exdata, function(err,result){
  //     if(err) throw err;
  //     res.redirect('incomestat');
  
  //   });
 
  
  module.exports = router;