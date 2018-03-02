var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../database.js');
var conn = mysql.createConnection(dbconfig);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login',{
    title:'openyearround', // 사이트 제목
  });//render
});
module.exports = router;
