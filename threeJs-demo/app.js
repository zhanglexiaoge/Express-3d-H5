var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var demo = require('./routes/demo');
var newdemo = require('./routes/newdemo');
var orbit = require('./routes/orbit');
var bunny = require('./routes/bunny');
var blender = require('./routes/blender');
var obj = require('./routes/obj');
var vtk = require('./routes/vtk');
var car = require('./routes/car');
var benz = require('./routes/benz');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/demo', demo);
app.use('/new',newdemo);
app.use('/orbit',orbit);
app.use('/bunny',bunny);
app.use('/blender',blender);
app.use('/obj',obj);
app.use('/vtk',vtk);
app.use('/car',car);
app.use('/benz',benz);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8000, function() {   //监听http://127.0.0.1:8000端口
    console.log("server start");
});
//例如 访问某个页面 localhost:8000/users
module.exports = app;
