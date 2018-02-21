var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../database.js');
var conn = mysql.createConnection(dbconfig);

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
      console.log(date);
      res.send({result:'success'});//ajax 통신이 성공하면 다시 success 메세지를 보냅니다.
    }
  });//query
});//router post
router.get('/:page', function(req, res, next) {
  var page = req.params.page;
  var sql='select * from postboard;';

  conn.query(sql,function(error,result,fields){
    if(error){//데이터베이스에서 불러올 때 오류 메세지 띄워줌
      console.log(error);
      console.log('get postboard information failed');
    }
    else{//화면 렌더링 할 때 보내는 값
        res.render('practice_boarder',{
              title:'openyearround', // 사이트 제목
              result : result,
              page : page,
              leng : Object.keys(result).length-1,
              page_num : 10,
              search: false
             }
           );//render

      }//else

  });//query
  //res.render('applyadmin',{title:'apply admin page'});
});


router.get('/title_content/:id',function(req,res){
  var sql='select * from postboard where id=?;';
  conn.query(sql,[req.params.id],function(err,rows){
    res.render('board_title_content',{rows : rows});
  });
});

router.get('/goCheckk/:id', function(req,res){
  var sql = "delete from `postboard` where id = ?;";
  conn.query(sql, [req.params.id], function(error,results){
    if(error){
      console.log(error);
      console.log('delete error');
    }
    else{
      console.log('삭제');
      console.log(req.param.id);
      res.render('index',{
        title:'openyearround'
      });
    }
  });
});

router.get('/:page/search', function(req, res){
  var sql = 'select * from `postboard` where title like ?;';
  var like = '%' + req.query.search_input + '%';
  var page = req.params.page;
  conn.query(sql, [like], function(error, result){
    if(error){
      console.log('search error');
      console.log(error);
    }
    else{
      console.log('work search func');
      console.log(result);
      res.render(
        'practice_boarder',
        {
          title:'openyearround',
          result: result,
          page: page,
          leng : Object.keys(result).length-1,
          page_num : 10,
          search: true
        }
      );
    }//else
  });
});

router.post('/reBoard/:id',function(req,res,next){
  var title = req.body.title;
  var contents = req.body.contents;
  var date = req.body.date;
  var id = req.params.id;
  var sql = "update `postboard` set title = ?, date = ?, text = ? where id = ?;";

  conn.query(sql,[title,date,contents,id], function(error,results, fields){
    if(error){
      console.log(id);
      console.log('postboard update failded');
    } else {
      console.log('success');
      res.send({result : 'success'});
    }
  });
});

module.exports = router;
