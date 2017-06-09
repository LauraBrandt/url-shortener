'use strict';

module.exports =  {
    LPad: function(num, length) {
        var str = num.toString();
        while (str.length < length) str = '0' + str;
        return str;
    }
};