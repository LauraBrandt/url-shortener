'use strict';

module.exports = function(req, res) {
    getOrigURL(req.params.shorturl, function(err, origUrl) {
        if (err) console.error(err);
        console.log('Redirecting to', origUrl, '...');
        res.redirect(origUrl);
    });
};
     
function getOrigURL(shorturl, callback) { 
    var origUrl = 'http://www.google.com';  //TODO
    callback("", origUrl);
}