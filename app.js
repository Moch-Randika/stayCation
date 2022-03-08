/** ----------------------------------------------------- */
// import
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

/** ----------------------------------------------------- */
// inisiasi
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("layout", path.join(__dirname, "/views/main-layout"))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public",express.static(path.join(__dirname, '/public')));
app.use("/sb-admin-2",express.static(path.join(__dirname, '/node_modules/startbootstrap-sb-admin-2')));
app.use(expressLayouts);



/** ----------------------------------------------------- */
// connect database
  mongoose.connect('mongodb://localhost:27017/db_stayCation').then(
    () => { console.info("database connect") },
    err => { console.info("database error") }
  )




/** ----------------------------------------------------- */
// routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// admin
app.use("/admin", adminRouter)

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

module.exports = app;
