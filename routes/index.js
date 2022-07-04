var express = require('express');
var router = express.Router();
var Product = require("../models/product");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("home");
});


router.get('/contactus', function(req, res, next) {
  res.render("contactus"); 
});

router.get('/about',function(req,res,next){
  res.render('about')
});

module.exports = router;
