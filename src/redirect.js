'use strict';

var Url = require("./models.js");

module.exports = function(req, res) {
    var shortUrl = req.headers['x-forwarded-proto'] + '://' + req.headers.host + '/' + req.params.shortid;
    getOrigURL(shortUrl, 
            function(err, origUrl) {
                if (err) console.error(err);
                console.log('Redirecting to', origUrl, '...');
                res.redirect(origUrl);
            }, 
            function() {
                console.log('Invalid ID');
                res.end(JSON.stringify({'Error': "Sorry, that ID doesn't exist in our database. Please check the address and try again."}, null, 2));
            }
    );
};
     
function getOrigURL(shortUrl, callback, error_handler) { 
    Url.find({shortened: shortUrl}, function(err, docs) {
        if (err) console.log(err);
        if (docs[0]) {
            callback("", docs[0].original);    
        }
        else { // no results found
            error_handler();
        }
    });
    
}