var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');
const bcrypt = require('bcrypt');
var Data = require('../Admin/Database/Admin');
const app = require('../../app');

const vehicleRows = 'SELECT * FROM comvehicles WHERE availability = "Sold" ';
const spareRows = 'SELECT * FROM spare_part_db WHERE availability="Sold"';
const totExpenses = 'SELECT SUM( electricty + water + salary + other )net FROM expenses WHERE year = "2020" ';
const totIncome = 'SELECT SUM( sales + spareparts + ads) total FROM income WHERE year = "2020" ';
const totSales = 'SELECT sales FROM income WHERE id = 3 ';
const netProfit = 'SELECT (SELECT SUM( sales + spareparts + ads) FROM income WHERE year = "2020") - (SELECT SUM( electricty + water + salary + other ) FROM expenses WHERE year = "2020") as netprofit';


router.post('/' ,function(req,res){

    
var ussername=req.body.email
var passwords=req.body.password
var Position=req.body.post



if (ussername && passwords) {

    if(Position=="Admin"){
    	connection.query('SELECT password FROM employee WHERE email = ? and position =?', [ussername,Position], function(error, results) {

            if (results.length > 0) {

                    var pwd= results[0].password
                      if(bcrypt.compareSync(passwords,pwd)){

                        connection.query(Data.getAdminDashboard,function(EmployeeERR,Employee){
                          connection.query(Data.getAdminDashboard,function(SellerERR,Seller){
                            connection.query(Data.getAdminDashboard,function(OwnerVehicleERR,OwnerVehicle){
                              connection.query(Data.vehiclecount,function(OwnerSparepartsERR,OwnerSparepart){
                      
                      
                        if (!EmployeeERR){
                          
                          if (!SellerERR){
                            
                            if (!OwnerVehicleERR){
                            
                              if (!OwnerSparepartsERR){
                                res.render('Admin',{
                      
                                  OwnerVehicle:OwnerVehicle[0].total,
                                  OwnerSpare:OwnerSparepart[0].total,
                                  Employees:Employee[0].total,
                                  Sellers:Seller[0].total,
                              
                                });
                              }
                              else{
                                err.render('Error',{ERR:err});
                              }
                            }
                          else{
                            err.render('Error',{ERR:err});
                             }
                         }
                        else{
                        err.render('Error',{ERR:err});
                       }
                       
                       }
                             });
                           });
                          });
                        });
  
                    }else{

                         console.log("Incorrect email or passowrd")
                         res.render('Login',{message:"Incorrect email or passowrd"});
                         }

			} else {
        res.render('Login',{message:"Incorrect email or passowrd"});
			}						
           
		});

    }  else if(Position=="Accountant"){
        connection.query('SELECT password FROM employee WHERE email = ? and position =?', [ussername,Position], function(error, results) {
             if (results.length > 0) {
  
                  var pwd= results[0].password
                  if(bcrypt.compareSync(passwords,pwd)){
                 




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
                      res.render('adminhome',{vehicle:vehicle, adpay:adpay, results:results[0].net,income:income[0].total, sales:sales[0], netprofit:netprofit[0].netprofit});
                    });
                  
                     
                    });
                      
                  
                    });
                    
                    
                  });
                  
                  });
                });



                  }
                  else{
                    console.log("Incorrect email or passowrd")
                    res.render('login',{message:"You're not a registered user"});
                  }
  
            } else {
              res.render('Login',{message:"Incorrect email or passowrd"});
            }			
          });
          
    }else if(Position=="Vehicle_Manager"){
      connection.query('SELECT password FROM employee WHERE email = ? and position =?', [ussername,Position], function(error, results){
        if (results.length > 0) {
                  var pwd= results[0].password
                  if(bcrypt.compareSync(passwords,pwd)){

                    connection.query('SELECT * FROM comvehicles', function (err,rows){

                      if (err) throw err;
                    
                      console.log(rows);
                      res.render('vehicle_index',{vehicles:rows} );
                    });
                    
                  }
                  else{
                    console.log("Incorrect email or passowrd")
                    res.render('Login',{message:"Incorrect email or passowrd"});
                  }
        } else {
          res.render('Login',{message:"Incorrect email or passowrd"});
        }			
      });   



      }else if(Position=="Spare_Manager"){
        connection.query('SELECT password FROM employee WHERE email = ? and position =?', [ussername,Position], function(error, results) {
        if (results.length > 0) {
          
                  var pwd= results[0].password
                  if(bcrypt.compareSync(passwords,pwd)){

                    connection.query('SELECT * FROM spare_part_db',function(err,rows){


                      if(err) throw err;

                      console.log(rows);
                      res.render('spare_parts',{
                        users:rows,
                      });
                      

                    });
                  }
                  else{
                    console.log("Incorrect email or passowrd")
                    res.render('Login',{message:"Incorrect email or passowrd"});
                  }
        } else {
          res.render('Login',{message:"Incorrect email or passowrd"});
        }			
     });   
    }else if(Position=="Manager"){
      connection.query('SELECT password FROM employee WHERE email = ? and position =?', [ussername,Position], function(error, results) {
        if (results.length > 0) {
                  var pwd= results[0].password
                  if(bcrypt.compareSync(passwords,pwd)){
                      console.log("Seller_Manager working")
                      res.render('EM');
                  }
                  else{
                    console.log("Incorrect email or passowrd")
                    res.render('Login',{message:"You're not a registered user"});
                  }
  
        } else {
          res.render('Login',{message:"Incorrect email or passowrd"});
        }			
     });
  }
else{
  res.render('Login',{message:"Incorrect email or passowrd"});
 }






}else{
  res.render('Login',{message:"Incorrect email or passowrd"});


}
});




module.exports = router;