var express = require('express');
var router = express.Router();
var connection = require('../../config/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addincome');
});

router.post('/',function(req,res){
    const exdata = {
      year:req.body.year,
      month:req.body.month,
      sales:req.body.sales,
      spareparts:req.body.spareparts,
      ads:req.body.ads
    };
    
  connection.query("INSERT INTO income SET?", exdata, function(err,result){
      if(err) throw err;
      res.redirect('income');
  
    });
  });

module.exports = router;