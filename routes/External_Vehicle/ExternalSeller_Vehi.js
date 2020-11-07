var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.post('/', function(req, res){

 
  var file = req.files.uploaded_image;
  var image_spare_ext=file.name;

    var item_name = req.body.name;
    var model = req.body.smodel;
    var brand = req.body.brand;
    var description = req.body.sdescription;
    var quantity = req.body.qty;
    var contact_no = req.body.contact;
    var location = req.body.slocation;
    var availability = req.body.savailability;
    var price = req.body.sprice;
    var s_condition = req.body.scondition;

    file.mv('public/ExternalSpareSeller/'+file.name, function(err) {
    
    var sql = "INSERT INTO `extsellers`(`item_name`, `model`, `brand`,`description`, `quantity`, `contact_no`, `location`, `availability`,`price`, `s_condition`, `ext_s_image`) VALUES ('" + item_name + "','" +model+ "','" +brand+ "','" +description+ "','" +quantity+ "','" +contact_no+ "','" +location+ "','" +availability+ "','" +price+ "','" +s_condition+ "','" +image_spare_ext+ "')"

  
 
  connection.query(sql, function(err, ress) {
    connection.query('SELECT * FROM extsellers',function (err,rows) {
  
      if (err) throw err;
      
        res.render('ExternalSeller_Vehi_table', {extsellers:rows});
    })


});
});
});


  

module.exports = router;
