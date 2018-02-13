var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../database.js');
var conn = mysql.createConnection(dbconfig);

router.post('/goCheck', function(req, res, next) {
  password = req.body.Password;

  var sql = "SELECT * FROM `checkPW` WHERE `password`=?";

  conn.query(sql, [password], function(error, results, fields) {
    if (error) {
      console.log('fail!');
    }
    else {
      var checkPassword = results[0];
      if(results[0]){
        res.send({results:100});
      }
      else{
        res.send({results:200});
      }
    }
  });
});

module.exports = router;
