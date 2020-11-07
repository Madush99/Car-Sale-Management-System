var express = require('express');
var router = express.Router('');
var connection = require('../../../config/connection');
var Data = require('../Database/Admin');
const app = require('../../../app');


router.get('/',function(req,res){ 
    connection.query(Data.ContactusShow,function(err,rows){
  if(err)
  { 
    console.log('Loading error');
  }
  else{
    console.log(rows);
    res.render('AdminContact_Page',{users:rows});

     }
   });
  });
  
module.exports = router;
