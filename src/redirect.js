'use strict';

var Url = require("./url_model.js");

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
     
function getOrigURL(shortUrl, callback, handleNoData) { 
    Url.findOne({shortened: shortUrl}, function(err, doc) {
        if (err) console.log(err);
        if (doc) {
            callback("", doc.original);    
        }
        else {
            handleNoData();
        }
    });
}