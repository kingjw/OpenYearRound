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

router.post('/gologin',function(req,res,next){
  var id = req.body.id;
  var password = req.body.password;

  var sql = "select * from oyr_user where user_name=?";
  conn.query(sql,[id], function(error,results,fields){
    if(error){
      console.log(id);

    } else {
      var user = results[0];
      if(!user){
        console.log('id fail');
        res.send({results:'error'});
      } else if(password == user.password){
        console.log('okokok');
        res.send({results:'success'});
      } else {
        console.log('fail');
        res.send({results:'error'});
      }
    }
  });
});
module.exports = router;
