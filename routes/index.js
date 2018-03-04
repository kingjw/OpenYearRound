var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../database.js');
var conn = mysql.createConnection(dbconfig);
/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.authId) {
  res.render('indexLogin', {
    user : req.session.authId,
    title:'openyearround'
  });
} else {
  res.render('index', {
    title:'openyearround'
  });
}
});
module.exports = router;
