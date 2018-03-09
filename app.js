var express = require('express');
 var path = require('path');
 var bodyParser = require('body-parser');
var cors = require('cors');
 var passport = require('passport');
 var mongoose = require('mongoose');
 var config = require('./config/database');
 var flash = require('connect-flash');
 var jwt = require('jsonwebtoken');
 var expressJwt = require('express-jwt');
 var router = express.Router();


 var User = require('mongoose');
 var passportConfig = require('passport');

// Connect To Database
mongoose.connect(config.database, {
  useMongoClient: true,
  /* other options */
});

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

var app = express();
// enable cors
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));


app.get('/api', function (req, res) {
  res.end('file catcher example');
});


var users = require('./routes/users');

// Port Number
var port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());
// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
router.route('/health-check').get(function(req, res) {
  res.status(200);
  res.send('Hello World');
});
var createToken = function(auth) {
  return jwt.sign({
    id: auth.id
  }, 'my-secret',
  {
    expiresIn: 60 * 120
  });
};
var generateToken = function (req, res, next) {
  req.token = createToken(req.auth);
  next();
};

var sendToken = function (req, res) {
  res.setHeader('x-auth-token', req.token);
  res.status(200).send(req.auth);
};
router.route('/auth/facebook')
  .post(passport.authenticate('facebook-token', {session: false}), function(req, res, next) {
    if (!req.user) {
      return res.send(401, 'User Not Authenticated');
    }

    // prepare token for API
    req.auth = {
      id: req.user.id
    };

    next();
  }, generateToken, sendToken);

//token handling middleware
var authenticate = expressJwt({
  secret: 'my-secret',
  requestProperty: 'auth',
  getToken: function(req) {
    if (req.headers['x-auth-token']) {
      return req.headers['x-auth-token'];
    }
    return null;
  }
});

var getCurrentUser = function(req, res, next) {
  User.findById(req.auth.id, function(err, user) {
    if (err) {
      next(err);
    } else {
      req.user = user;
      next();
    }
  });
};

var getOne = function (req, res) {
  var user = req.user.toObject();

  delete user['facebookProvider'];
  delete user['__v'];

  res.json(user);
};

router.route('/auth/me')
  .get(authenticate, getCurrentUser, getOne);

app.use('/api/v1', router);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
