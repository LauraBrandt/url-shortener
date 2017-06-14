'use strict';

var DB_NAME = 'urlshortener_db';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
 
var connection = mongoose.createConnection("mongodb://localhost/" + DB_NAME);

autoIncrement.initialize(connection);

var urlSchema = new Schema({
  original: String,
  shortened: String,
  urlId: Number
});
 
urlSchema.plugin(autoIncrement.plugin, {
    model: 'Url',
    field: 'urlId',
    startAt: 1000,
    incrementBy: 1
});
var Url = connection.model('Url', urlSchema);

//connection.close();
module.exports = Url;
