'use strict';

var shortener = require('./shortener.js');
var redirect = require('./redirect.js');

module.exports = function(app) {
    app.get("/", (req, res) => {
      res.sendFile(process.cwd() + "/public/index.html");
    });
    
    app.get('/new/*', (req, res) => {
      shortener(req, res);
    });
    
    app.get('/:shorturl', (req, res) => {
      redirect(req, res);
    });
};