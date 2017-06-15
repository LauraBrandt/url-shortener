'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

var setUpUrl = function() {
    autoIncrement.initialize(mongoose);
    
    var urlSchema = new Schema({
      original: String,
      shortened: { type: String, unique: true },
      urlId: Number
    });
     
    urlSchema.plugin(autoIncrement.plugin, {
        model: 'Url',
        field: 'urlId',
        startAt: 1000,
        incrementBy: 1
    });
    
    var Url = mongoose.model('Url', urlSchema);
    
    return Url;
};

module.exports = setUpUrl();