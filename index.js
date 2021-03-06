'use strict';

// Get requirements
var express = require('express');
var routes = require('./src/routes.js');

// Set up for running
var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + '/public'));

// Set up database connection
var mongoose = require('mongoose');
var DB_URL = process.env.MONGOLAB_URI;
mongoose.connect(DB_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function(callback){
    console.log('Mongoose default connection open to ' + DB_URL);
    // Run app
    routes(app);
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

// Listen
app.listen(port, function () {
  console.log('App listening on port', port);
});