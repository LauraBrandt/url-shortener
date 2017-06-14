'use strict';

var validUrl = require('valid-url');
var Url = require("./models.js");

module.exports = function(req, res) {
    var orig_url = req.params[0];
    console.log('Original URL is', orig_url);
    
    if (validUrl.isUri(orig_url)) {
        var short_host = req.headers['x-forwarded-proto'] + '://' + req.headers.host + '/';
        
        createDoc(orig_url, short_host, function(err, doc) {
            if(err) console.log(err);
            var result = {
                'Original URL' : doc.original,
                'Shortened URL' : doc.shortened
            };
            res.end(JSON.stringify(result, null, 2));
            console.log(JSON.stringify(result));
        });
        
    } else {
        res.end(JSON.stringify({'Error': 'Sorry, that is not a valid URL. Please check the URL and try again.'}, null, 2));
    }
};

function createDoc(orig_url, host, callback) {
    var newUrl = new Url({ 
        original: orig_url
    });
    
    newUrl.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New entry saved to db:", orig_url);
        doc.shortened = host + doc.urlId;
        doc.save(function(err, doc) {
            if (err) console.error(err);
            console.log('Shortened URL associated:', doc.shortened);
            callback("", doc);
        });
    });
}