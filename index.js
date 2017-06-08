var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/:tinyurl', function(req, res) {
  
});

app.listen(port, function () {
  console.log('App listening on port', port);
});