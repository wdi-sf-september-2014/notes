// add express
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// tell your app to use the module
app.use(bodyParser.urlencoded());

// set the view engine to ejs
app.set('view engine', 'ejs');

// create a server that will listen on a port
var server = app.listen(1337, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

// look for a url and match it
// when the url is matched, say hello world
app.get('/:name', function (request, response) {
  response.render('index', { params: request.params });
});