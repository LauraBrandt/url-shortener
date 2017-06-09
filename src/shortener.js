'use strict';

var functions = require('./shortener_funcs.js');
var validUrl = require('valid-url');

module.exports = function(req, res) {
    var orig_url = req.params[0];
    console.log(orig_url)
    if (validUrl.isUri(orig_url)) {
        do {
            var urlID = functions.LPad(Math.floor(Math.random()*10000), 4);
            var short_url = req.headers.host + '/' + urlID;
        } while (false); //TODO - check to make sure it doesn't already exist in db
        res.write('new url is: ' + short_url);
    } else {
        res.end(JSON.stringify({'Error': 'Sorry, that is not a valid URL. Please check the URL and try again.'}, null, 2));
    }
    res.end();  
};