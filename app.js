var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
//MongoDB setup
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/travelGuru";
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

//MongoDB initialization code
mongo.connect(url, function(err, db) {
  if (err) throw err;
  var travelDB = db.db("travelGuru");
  //Sample data
  var myCity = { cname: "Los Angeles", address: "Highway 37" };
  travelDB.createCollection("cities", function(err, res) {
    if (err) throw err;
    console.log("Collection for cities created!");
    });
   travelDB.collection("cities").insertOne(myCity, function(err, res) {
      if (err) throw err;
      // console.log("Connection to DB established!: ", travelDB);
      console.log("1 sample document inserted");
    db.close();
    });
});

module.exports = app;
app.listen(3000);
