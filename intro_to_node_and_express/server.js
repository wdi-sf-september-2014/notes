// server.js
var http = require("http");
var url = require("url");

http.createServer(function greet(req, res) {
  var pathname=url.parse(req.url).pathname;
  console.log(pathname);
  
  var name = pathname.split("/");

  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("<b>Hello World "+ name[1] + "</b>");
  res.end();
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
