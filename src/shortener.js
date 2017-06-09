'use strict';

var validUrl = require('valid-url');

module.exports = function(req, res) {
    var orig_url = req.params[0];
    if (validUrl.isUri(orig_url)) {
        do {
            var urlID = LPad(Math.floor(Math.random()*10000), 4);
            var short_url = req.headers.host + '/' + urlID;
        } while (false); //TODO - check to make sure it doesn't already exist in db
        //TODO - add to db
        res.end(JSON.stringify(
                    { 'Shortened URL' : short_url,
                      'Original URL' : orig_url },
                    null,
                    2));
    } else {
        res.end(JSON.stringify({'Error': 'Sorry, that is not a valid URL. Please check the URL and try again.'}, null, 2));
    }
};

var LPad = function(num, length) {
        var str = num.toString();
        while (str.length < length) str = '0' + str;
        return str;
};