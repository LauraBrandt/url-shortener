'use strict';

var shortener = require('./shortener.js');
var redirect = require('./redirect.js');

module.exports = function(app) {
    app.get("/", function(req, res) {
      res.sendFile(process.cwd() + "/public/index.html");
    });
    
    app.get('/new/*', function(req, res) {
      console.log('Creating new URL ...');
      shortener(req, res);
    });
    
    app.get('/:shortid', function(req, res) {
      console.log('Getting original URL ...');
      redirect(req, res);
    });
    
    app.get('*', function(req, res) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(JSON.stringify({"Error": "404"}));
    });
};