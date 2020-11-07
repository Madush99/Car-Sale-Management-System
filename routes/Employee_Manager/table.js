var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


/* GET table page. */
router.get('/', function(req, res, next) { 

  connection.query('SELECT * FROM employee',function (err,rows) {

    if (err) throw err;
      console.log(rows);

      res.render('table', {emp:rows});
  })

});

router.get('/deleteemp/:id', function(req,res) { 
  
  var eid = req.params.id;

  connection.query("DELETE FROM employee WHERE Id = ?",[eid],function (err,rows) {
      if(err) throw err;
      res.redirect('/table');
  })
});

router.get('/updateemp/:id', function(req, res) { 
  
  var eid = req.params.id;
  connection.query("SELECT * FROM employee WHERE Id = ?", [eid], function (err,rows) {
    if(err) throw err;
    res.render('update', {empdata:rows});
  })

});


router.post('/updateemp/:id', function(req,res){
  
  var username = req.body.username;
  var gender = req.body.gender;
  var password = req.body.password;
  var nic = req.body.nic;
  var email = req.body.email;
  var contactno = req.body.contactno;
  var emp_id = req.body.emp_id;
  var position = req.body.position;
  
  var updateid = req.params.id;

  connection.query("UPDATE employee SET empid=?, username=?,email=?,NIC=?,contactno=?,	gender=?,	position=?,password=? WHERE Id=?", [emp_id,username,email,nic,contactno,gender,position,password,updateid],function (err,respond){
    if (err) throw err;
    res.redirect('/table')
  })
});



module.exports = router;

