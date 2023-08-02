var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
var cors = require('cors')


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentRouter = require('./routes/studentRoute');
const teacherRouter = require('./routes/teacherRoute');
const scoreRouter = require('./routes/scoreRoute');
const coefficientRouter = require('./routes/coefficientRoute')
const cursusRouter = require('./routes/cursusRoute');
const uploadRouter = require('./routes/upload');


const authRouter = require('./routes/authRoute');

const app = express(); 

// mongoose.connect('mongodb://localhost:27017/app')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload({
  createParentPath: true
}));

connectDataBase().catch(err => console.log(err));

async function connectDataBase() {
  await mongoose.connect('mongodb+srv://klaykassius148:oBoqNAKQkjUZl0Ch@cluster0.voyik8m.mongodb.net/?retryWrites=true&w=majority');
  console.log("database is connect")
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/score', scoreRouter);
app.use('/coefficient', coefficientRouter);
app.use('/cursus', cursusRouter);
app.use('/upload', uploadRouter);

app.use('/auth', authRouter);

// app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

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

// master
