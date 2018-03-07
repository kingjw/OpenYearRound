var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../database.js');
var conn = mysql.createConnection(dbconfig);

router.post('/goCheck', function(req, res, next) {

  if(req.session.author == 'all'){
    console.log('user');
    res.send({results:100});
  }
  else{
    console.log('no user');
    res.send({results:200});
  }
});
module.exports = router;
