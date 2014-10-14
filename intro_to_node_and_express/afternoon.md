# Intro to Node.js and Express - Afternoon

## Parsing routes, and starting http servers sucks

### Enter Express!

### Exercise: Convert your 'Hello World' example to use express
#### Follow this guide: 
[Hello world with express](http://expressjs.com/starter/hello-world.html)

### Install [nodemon](https://github.com/remy/nodemon)
Why is this tool useful?

### Let's build another quick app with express, to play with it more

#### Node calculator!

[Follow these instructions](https://github.com/wdi-sf-july/notes/tree/master/week_03_intro_web_applications/day_01_intro_frameworks/dawn_intro_express#our-first-express-app)

### Let's talk about templates

It gets pretty boring if all you're returning to the browser is plain
text.

#### Enter HTML!

Let's revisit Hello World, but this time with HTML :)

Try to put this code into a file:

```
<!doctype html>

<html>
  <head>
  </head>
  <body>
    Hello world!
  </body>
</html> 
```

Then in your Express-Based `Hello World` app:

```
var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

// tell your app to use the module
app.use(bodyParser.urlencoded())

app.get('/', function(req, res){
  // use a render
  res.render('index.html');
});
```

What went wrong?

In groups, figure out how to set the template engine for express to
`ejs`.

Next, figure out how to "pass a variable" to the template in your `res.render` invokation.

### [Lab/homework](https://github.com/wdi-sf-july/news_feed)
