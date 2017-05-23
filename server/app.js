var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var dashboardRoute = require('./routes/DashboardRoute');
var partnerDetailsRoute = require('./routes/partnerDetailsRoute');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");
var webpackHotMiddleware = require('webpack-hot-middleware');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var connectflash = require('connect-flash');
var gitLabFork = require('./routes/GitLabFork');
var session = require('express-session');

var app = express();
var compiler = webpack(webpackConfig);
app.use(require('express-session')({ secret: 'accesskey' }));
var loginRoute = require('./routes/loginRoute');

mongoose.connect('mongodb://localhost/partnerDasboard');
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error!!!"));
db.once('open', function() {
    console.log('connected to mon successfully!!!');
});

app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash());

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }, // Same as `output.publicPath` in most cases.
    quiet: true,
    noInfo: true,
    host: '0.0.0.0',
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}));

app.use(webpackHotMiddleware(compiler, {

    }))
    // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/assests')));

app.use('/login', loginRoute);
app.use('/', routes);
app.use('/users', users);
app.use('/getUser', users);
app.use('/ilimi', dashboardRoute);
app.use('/gitLab', gitLabFork);
app.use('/partnerDetails', partnerDetailsRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}));


module.exports = app;
