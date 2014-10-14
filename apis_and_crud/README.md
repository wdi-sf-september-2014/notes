#APIs and CRUD

##Review of EJS Templating

- EJS stands for Embedded JavaScript.
- This means that within EJS code you can write standard JS.
- EJS looks for templates in the `views` folder.
- EJS uses `<% %>`, `<%= %>`, and `<%- %>` blocks to display JS content.

####<%= %>

This notation is to be used when you want to "escape" HTML in the data returned. This will not allow HTML returned to be rendered as HTML.

####<%- %>

This notation will not escape the data returned, and will allow HTML to be rendered.

####<% %>

This notation is to be used when you don't want to print any resulting values to the view. A good example of this would be if you want to use a FOR loop in your template.

####Example Hello World Using EJS

app.js

```
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res) {
	res.render("index.ejs", {
		greeting: "Hello World"
	});
});

app.listen(3000);
```

views/index.ejs

```
<h1>Testing out EJS</h1>

<h2>Greeting is: <%= greeting %></h2>

<div style="margin-top:50px;">
	<% for (var i = 0; i < 5; i++) { %>
		<h5>Repeated Text</h5>
	<% } %>
</div>
```

##What is an API?

####Internal API

- A "web service" that is meant to interact solely with the apps that you build.
- Mobile apps will often need a web service that allows them to interact with a centralized database system.

####External API
- The traditional way of interacting with a database essentially is through methods written by the developer and only accessible by his or her code.
- APIs allow an application to be selectively "programmed" or interacted-with through third-party code.
- Basically blocks of code that can interact with an app in a pre-defined way.

####How is Data Handled?

- Nowadays JSON is the most popular data format for interacting with an API.
- JSON APIs are known as REST, or Representational State Transfer APIs.
- Older APIs use the SOAP method (Simple Object Access Protocol), which uses the XML data format.

####API Example: ExpressJS

- ExpressJS maps over simple commands (Express syntax) to a slightly more complex Node.js format.
- Allows you to write code in a readable, understandable fashion that maps over to standard Node.js commands.

##Making Calls to Web Services

- On the client side we have AJAX, on the server side we have cURL.
- Using Node.js we have to make requests with cURL.

####Request Module

- Allows us to make HTTP requests easily using Node.

```
var request = require('request');

request('http://www.google.com', function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body) // Print the google web page.
	}
});
```
##Request Exercise

- Create a new Node app using `npm init`.
- Set up EJS as your templating engine.
- Make a request out to facebook.com and place the response body inside a template.