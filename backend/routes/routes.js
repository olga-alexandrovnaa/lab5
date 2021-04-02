var express = require('express');
var router = express.Router();
var path = require('path')

const fs = require('fs');
var stocks = require('../json/stocks');
var person = require('../json/person');
var setting = require('../json/setting');

router.get('/', function(req,res,next) {
  res.render('index');
});

router.get('/brokers', function(req,res,next) {
  res.json(person);
});

router.post('/brokers', function(req,res,next) {
  person = req.body;
  fs.writeFile("../json/person.json", JSON.stringify(person),function(err, result) {
    if(err) console.log('error', err);
  });
});


router.get('/setting', function(req,res,next) {
  res.json(setting);
});

router.post('/setting', function(req,res,next) {
  setting = req.body;
  fs.writeFile("../json/settings.json", JSON.stringify(setting),function(err, result) {
    if(err) console.log('error', err);
  });
});

router.get('/stoks', function(req,res,next) {
  res.json(stocks);
});

router.post('/stoks', function(req,res,next) {
  stocks = req.body;
  fs.writeFile("../json/stocks.json", JSON.stringify(stocks),function(err, result) {
    if(err) console.log('error', err);
  });
});

module.exports = router;
