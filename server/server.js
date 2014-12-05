var express = require('express');
// var db = require('./db');
var app = express();
var router = require('./routes.js');
var config = require('./oauth.js')
var passport = require('passport')
var GoogleStrategy = require('passport-google').Strategy;

app.use("/questions", router);

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '../../public'));


app.listen(port);
