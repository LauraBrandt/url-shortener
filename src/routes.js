'use strict';

var shortener = require('./shortener.js');
var redirect = require('./redirect.js');

module.exports = function(app) {
    app.get("/", (req, res) => {
      res.sendFile(process.cwd() + "/public/index.html");
    });
    
    app.get('/new/*', (req, res) => {
      console.log('Creating new URL ...');
      shortener(req, res);
    });
    
    app.get('/:shortid', (req, res) => {
      console.log('Getting original URL ...');
      redirect(req, res);
    });
};