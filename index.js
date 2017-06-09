'use strict';

var express = require('express');
var app = express();
var routes = require('./src/routes.js');

let port = process.env.PORT || 8080;

routes(app);

app.listen(port, function () {
  console.log('App listening on port', port);
});