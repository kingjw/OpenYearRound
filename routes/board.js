var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../database.js');
var conn = mysql.createConnection(dbconfig);

// 게시판 사이트로 들어가는 부분입니다.
router.get('/', function(req, res, next) {
  res.render('applyform',{title:'Open Year Round_board'});
});

router.post('/goBoard',function(req,res,next){//올리기 버튼 클릭 시 ajax 통신하는 부분입니다.
  var title = req.body.title;
  var contents = req.body.contents;
  var date = req.body.date;
  var sql = 'insert into `postboard` (`title`,`text`,`date`) values (?,?,?);';
  //입력한 정보를 테이블에 저장하는 쿼리문
  conn.query(sql,[title,contents,date],function(error,results,fields){
    if(error){
      console.log(error);
      console.log('postboard insert failed');
    }//if
    else{
      console.log(results);
      res.send({result:'success'});//ajax 통신이 성공하면 다시 success 메세지를 보냅니다.
    }
  });//query
});//router post
module.exports = router;
