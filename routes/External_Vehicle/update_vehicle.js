var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');


router.post('/:item_code', function(req,res){


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
    
    var updateId = req.params.item_code;
  
    console.log(item_name,model,brand,description)
    
    connection.query("UPDATE extsellers SET item_name=?,model=?,brand=?,description=?,quantity=?,contact_no=?,location=?,availability=?,price=?,s_condition=?  WHERE item_code=?",[item_name,model,brand,description,quantity,contact_no,location,availability,price,s_condition,updateId], function (err,respond){
  
  
        if(err) throw err;

        res.redirect('/redirectExternalpage');
    
    
    
    
      });
    
    
    });
  
  module.exports = router;