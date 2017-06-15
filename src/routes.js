'use strict';

var shortener = require('./shortener.js');
var redirect = require('./redirect.js');

module.exports = function(app) {
    app.get("/", (req, res) => {
      res.sendFile(process.cwd() + "/public/index.html");
    });
    
    app.get('/new/*', (req, res) => {
      console.log('Creating new URL ...');
      res.writeHead(200, { "Content-Type": "text/plain" });
      shortener(req, res);
    });
    
    app.get('/:shortid', (req, res) => {
      console.log('Getting original URL ...');
      res.writeHead(200, { "Content-Type": "text/plain" });
      redirect(req, res);
    });
    
    app.get('*', (req, res) => {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(JSON.stringify({"Error": "404"}));
    });
};