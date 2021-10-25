var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require("cors");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv").config()

const admin = require("firebase-admin");

const serviceAccount = require("./config/firebase/customers-dev-1c53b-firebase-adminsdk-g7bzq-3d5ef09f64.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var app = express();

var MongoDBUtil = require('./modules/mongodb/mongodb.module').MongoDBUtil;
var ProductController = require('./modules/product/product.module')().ProductController;
var CustomerController = require('./modules/customer/customer.module')().CustomerController;
var SaleController = require('./modules/sale/sale.module')().SaleController;
var UserController = require('./modules/user/user.module')().UserController;

// npm install firebase firebase-admin
// FIREBASE CODE 

const admin = require("firebase-admin");

const serviceAccount = require("./config/firebase/infinity-co-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// FUNCION DEL PROFE
function checkAuth(req, res, next) {
  if (req.headers?.authorization?.startsWith('Bearer ')) {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    admin.auth().verifyIdToken(idToken)
      .then(() => {
        next()
      }).catch((error) => {
        res.status(403).send('Unauthorized with wrong access_token')
      });
  } else {
    res.status(403).send('Unauthorized')
  }
}
// FIN FUNCION DEL PROFE



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

MongoDBUtil.init();

app.use(cors());

function checkAuth(req, res, next) {
  if (req.headers?.authorization?.startsWith('Bearer ')) {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    admin.auth().verifyIdToken(idToken)
      .then(() => {
        next()
      }).catch((error) => {
        res.status(403).send('Unauthorized')
      });
  } else {
    res.status(403).send('Unauthorized')
  }
}

app.use('*', checkAuth);
app.use('/products', ProductController);
app.use('/sales', SaleController);
app.use('/users', UserController);



app.get('/', function (req, res) {
  var pkg = require(path.join(__dirname, 'package.json'));
  res.json({
    name: pkg.name,
    version: pkg.version,
    status: 'up'
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: res.locals.message,
    error: res.locals.error
  });
});

module.exports = app;
