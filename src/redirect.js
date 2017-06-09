'use strict';

module.exports = function(req, res) {
    var origURL = getOrigURL(req.params.shorturl);
    res.redirect(origURL);
};
     
function getOrigURL(shorturl) { //TODO
    return 'http://www.google.com';
}