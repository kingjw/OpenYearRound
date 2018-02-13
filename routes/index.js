var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../database.js');
var conn = mysql.createConnection(dbconfig);
/* GET home page. */
router.get('/', function(req, res, next) {
  var sql='select * from postboard;';//지원자 정보를 불러오는 쿼리문 저장
  conn.query(sql,function(error,results,fields){
    if(error){//데이터베이스에서 불러올 때 오류 메세지 띄워줌
      console.log(error);
      console.log('get postboard information failed');
    }
    else{//화면 렌더링 할 때 보내는 값, 사이트 제목, 지원자 정보
      res.render('index',{
        title:'openyearround', // 사이트 제목
        board : results // 지원자 정보
      });//render
    }
  });//query
  //res.render('applyadmin',{title:'apply admin page'});
});
module.exports = router;
