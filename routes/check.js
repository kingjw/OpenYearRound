var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../database.js');
var conn = mysql.createConnection(dbconfig);

router.post('/goCheck', function(req, res, next) {

  if(req.session.author == 'boarder_Admin' || req.session.author == 'superior_Admin'){
    console.log('boarder or superior admin');
    res.send({results:100});
  }
  else{
    console.log('not admin');
    res.send({results:200});
  }
});
module.exports = router;
