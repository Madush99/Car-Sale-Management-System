var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');
const bcrypt = require('bcrypt');
var Data = require('../Admin/Database/Admin');
const app = require('../../app');


router.post('/' ,function(req,res){

    
var ussername=req.body.email
var passwords=req.body.password
var Position=req.body.post



if (ussername && passwords) {

    if(Position=="Vehicle"){
    	connection.query('SELECT password FROM user WHERE email = ? and position =?', [ussername,Position], function(error, results) {

            if (results.length > 0) {

                    var pwd= results[0].password
                      if(bcrypt.compareSync(passwords,pwd)){

                          res.render('sel_vehicle_insert', { title: 'sel_vehicle_insert' });
                        
                          
  
                    }else{

                         console.log("Incorrect email or passowrd")
                        res.render('login',{message:"You're not a registered user"});
                         }

			} else {
        res.render('login',{message:"Incorrect email or passowrd"});;
			}						
           
		});

    }  else if(Position=="Spare_parts"){

                    
         
      connection.query('SELECT password FROM user WHERE email = ? and position =?', [ussername,Position], function(error, results) {

        if (results.length > 0) {

                var pwd= results[0].password
                  if(bcrypt.compareSync(passwords,pwd)){

                    connection.query('SELECT * FROM extsellers',function (err,rows) {
  
                      if (err) throw err;
                      
                        res.render('ExternalSeller_Vehi', {extsellers:rows});
                    })
                  

                }else{

                     console.log("Incorrect email or passowrd")
                    res.render('login',{message:"You're not a registered user"});
                     }

  } else {
    res.render('login',{message:"Incorrect email or passowrd"});;
  }						
       
});

      
                  
  
      	
          
    }



}else{

    response.send('Password and email not match!');


}
});




module.exports = router;