require('dotenv').config();
const fetch = require('node-fetch');
const jsonld = require('jsonld');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var favoriteRouter = require('./routes/favorite')
var foodsRouter = require('./routes/foods');
var visitsRouter = require('./routes/visits');
var naturalsRouter = require('./routes/naturals');
var infosRouter = require('./routes/infos');
var bookingsRouter = require('./routes/bookings')
var destinationRouter = require('./routes/destinations')


var app = express();
const cors = require('cors');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/favorite', favoriteRouter);
app.use('/foods', foodsRouter);
app.use('/visits', visitsRouter);
app.use('/naturals', naturalsRouter);
app.use('/infos', infosRouter);
app.use('/bookings', bookingsRouter)
app.use('/destinations', destinationRouter)



module.exports = app;
