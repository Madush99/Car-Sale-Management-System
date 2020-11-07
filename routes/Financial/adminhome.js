var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

//const vehicleRows = 'SELECT * FROM vehicle WHERE sold = "sold" AND date BETWEEN "2020/09/01" AND "2020/09/31" ';
//const spareRows = 'SELECT * FROM adpay as adpay WHERE date BETWEEN "2020/09/01" AND "2020/09/31" ';
const totExpenses = 'SELECT SUM( electricty + water + salary + other )net FROM expenses WHERE year = "2020" ';
const totIncome = 'SELECT SUM( sales + spareparts + ads) total FROM income WHERE year = "2020" ';
const totSales = 'SELECT sales as sel FROM income WHERE id = 3 ';
const netProfit = 'SELECT (SELECT SUM( sales + spareparts + ads) FROM income WHERE year = "2020") - (SELECT SUM( electricty + water + salary + other ) FROM expenses WHERE year = "2020") as netprofit';

router.post('/', function(req, res, next) {

 connection.query(vehicleRows, function(err,vehicle){
    if (err) throw err;
    console.log(vehicle);
    
  connection.query(spareRows,function(err,adpay){
    if (err) throw err;
    console.log(adpay);

   connection.query(totExpenses,function(err,results){
     if (err) throw err;
     console.log(results);

  connection.query(netProfit,function(err,netprofit){
    if (err) throw err;
    console.log(netprofit);

    connection.query(totIncome,function(err,income){
      if (err) throw err;
      console.log(income);

  connection.query(totSales,function(err,sales){
    
    if(err) throw err;
    console.log(sales)
    res.render('adminhome',{vehicle:vehicle, adpay:adpay, results:results[0].net, income:income[0].total, /*sales:sales[0].sel*/netprofit:netprofit[0].netprofit});
  });

   
  });
    

  });
  
  
});

 });

});


// router.get('/adminhome', function(req, res,next) {
//   connection.query('SELECT * FROM adpay as adpay WHERE date BETWEEN "2020/09/01" AND "2020/09/31" ', function(err,results){

//     if (err) throw err;
//     console.log(results);
//     res.render('adminhome',{results:results[0].adpay});
  

//   });

//   //console.log('Working');
  
// });

// router.get('/dash', function(req, res) {
 
//   connection.query('SELECT SUM( electricty + water + salary + other )net FROM expenses WHERE month = "january" ' ,function(err,results) {

//     if (err) throw err;
//     console.log(results);
//     res.render('adminhome',{results:results[0].net});

//   });
 });



module.exports = router;
