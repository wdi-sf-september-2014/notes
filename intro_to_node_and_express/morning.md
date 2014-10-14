# Intro to Node.js and Express - Morning

## Why Node?

### Group exercise (5m)

In groups of 2, recall what happens when a typical web server receives a
web request. If you don't remember, look up a web request's life from
the time it's issued to a web server, to the time a result is returned
back to the user in a browser. 

Focus in on what happens once the request has been accepted by the
server, in terms of access to the filesystem, other processes, and
network access to third party services.

#### Share out (5m)

### Quick quiz:

```
console.log('Hello World');

setTimeout(function() {
    console.log('timer finished!');
}, 2000);

console.log('After calling set timeout');
```

Question: What happens above?
Followup question: What happens if I change 2000 to zero?

### Video (25m): 
[What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

![Event Loop](http://i.imgur.com/BGhaUlx.png)

### Break (5m)

### Exercise (30m)

Write a demonstration of the asynchronous nature of the event loop

1. Write a function `multiplyByTwoIfEven` that will multiply a number
   passed to it by by two if the passed in number is even and
   invoke a callback function passing the result of multiplying by 2.
2. If the passed in number is odd, it should invoke the callback
   function with a `new Error()` as the callback function's first
parameter.
3. The callback function should be invoked with `setTimeout`, after a
   random time period between 0 and 1000ms.
4. Write a `for` loop or use `forEach`, iterating over the numbers 0 to 10,
   which calls `multiplyByTwoIfEven` for each number from 0 to 10, and
passes it a callback function, which outputs either the error or the
result of the multiplication.
5. Put the above code into a file called `async_demo.js` and run it with
   `node` from your terminal to show the results.

### Exercise solution review (10m)

### Our first web server with node (10m)

```
// server.js
var http = require("http");

function greet(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello World");
  res.end();
}

var server = http.createServer(greet);

server.listen(3000);
```

#### [Node inspector](https://github.com/node-inspector/node-inspector)

#### Exercise (10m)

Add the following line of code, where it is appropriate to do so in 
`server.js` to retrieve the path, which the user is requesting from 
the browser:

`var pathname=url.parse(req.url).pathname;`

Then, using `pathname`, figure out a way to serve different responses
using the pathname as the 

##### Question: What are some problems with this approach?
