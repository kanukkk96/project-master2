var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var engines = require('consolidate');
var logger = require('morgan');
var path = require("path");
var cookieParser = require('cookie-parser');

const multer = require('multer');
const upload = multer({dest: './upload'})

// router 설정
var page1_1Router = require('./dist/routes/page1_1.js');
var page1_2Router = require('./dist/routes/page1_2.js');
var page1_3Router = require('./dist/routes/page1_3.js');
var page1_4Router = require('./dist/routes/page1_4.js');
var page2_1Router = require('./dist/routes/page2_1.js');
var page2_2Router = require('./dist/routes/page2_2.js');
var page2_3_1Router = require('./dist/routes/page2_3_1.js');
var page2_3_2Router = require('./dist/routes/page2_3_2.js');
var page2_3_3Router = require('./dist/routes/page2_3_3.js');
var page2_3_4Router = require('./dist/routes/page2_3_4.js');
var page2_3_5Router = require('./dist/routes/page2_3_5.js');
var page2_3_6Router = require('./dist/routes/page2_3_6.js');
var page2_3_7Router = require('./dist/routes/page2_3_7.js');
var page2_3_8Router = require('./dist/routes/page2_3_8.js');
var page2_3_9Router = require('./dist/routes/page2_3_9.js');
var page2_3_10Router = require('./dist/routes/page2_3_10.js');
var page2_3_11Router = require('./dist/routes/page2_3_11.js');
var page3Router = require('./dist/routes/page3.js');
// 수정

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + '/dist');
app.set('js', __dirname + '/dist/js');

// 화면 engine을 html로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// app.engine('html', engines.mustache);
// app.set('view engine', 'html');

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
// app.use(express.static(__dirname + '/dist/css'));
// app.use('/css', express.static(__dirname + '/dist/css'));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static('dist'));
app.use('/Profile', express.static('./upload'));

app.use('/page1_1',page1_1Router);
app.use('/page1_2',page1_2Router);
app.use('/page1_3',page1_3Router);
app.use('/page1_4',page1_4Router);
app.use('/page2_1',page2_1Router);
app.use('/page2_2',page2_2Router);
app.use('/page2_3_1',page2_3_1Router);
app.use('/page2_3_2',page2_3_2Router);
app.use('/page2_3_3',page2_3_3Router);
app.use('/page2_3_4',page2_3_4Router);
app.use('/page2_3_5',page2_3_5Router);
app.use('/page2_3_6',page2_3_6Router);
app.use('/page2_3_7',page2_3_7Router);
app.use('/page2_3_8',page2_3_8Router);
app.use('/page2_3_9',page2_3_9Router);
app.use('/page2_3_10',page2_3_10Router);
app.use('/page2_3_11',page2_3_11Router);
app.use('/page3',page3Router);

module.exports = app;

var port = 3000;
var hostname = '192.168.0.137';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");

  res.render('views/user/login.html');

  next();
});

http.createServer(app).listen(port, hostname, function() {
  console.log("server on! " + hostname)
})