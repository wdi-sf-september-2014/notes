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

##REST (Representational State Transfer)

- HTTP verbs include POST, GET, PUT, DELETE.
- These by convention map over directly to CRUD operations on the server side.
	- POST -> Create
	- GET -> Read
	- PUT -> Update
	- DELETE -> Delete
- Essentially, these verbs "represent" the operations that occur server-side.

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
- Make a request out to facebook.com and place the response body inside a template. Hint: Think about which template syntax to use for this.

##Using JSON

- Normally if you use a real web service it will return data to you in JSON format.
- Node however interprets this JSON as a string, so you need to parse it into real JSON.

####JSON.parse()

```
request('http://www.google.com', function (error, response, body) {
	if (!error && response.statusCode == 200) {
		var data = JSON.parse(body);
	}
});
```

##JSON API Exercise

For this exercise we will be using the User API:

`http://daretodiscover.net/user`

- Create a new application using `npm init`.
- Use the request module to make a GET request to the above url.
- Create 3 different routes using Express - first, last, all.
	- First will display a list of all users' first names.
	- Last will display a list of all users' last names.
	- All will display a list of all users' data in table form.
- Bonus: Make it pretty using Bootstrap :)

##POST Operations

- Instead of working with data that comes in to the server as a URL string, POST data is sent as an object through the request header.
- POST requests are usually mapped over to create actions.
- As a result, this data is hidden from user view.
- This is often used for confidential, one-time data sending such as account credentials while setting up an account or sending credit card details securely.

```
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
	extended:true
}));

app.post("/user", function(req, res) {
	request({
		method: "POST",
		uri: "http://daretodiscover.net/user",
		formData: {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			age: req.body.age,
			username: req.body.username
		}
	}, function(error, response, body) {
		res.redirect("/user");
	});
});
```

- Unlike GET requests, you can't access these parameters with `req.query`.
- To access POST parameters you have to use the Node `body-parser` module, which takes the name attribute from the form data and uses it as POST data.
- With this module you can simply use `req.body` as shown above.

##PUT Operations

- PUT is essentially the same as a POST request.
- PUT requests are normally mapped over to update actions.
- According to the convention, since PUT is mapped over to an update action, an ID needs to be passed to reference the data object.

```
var methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.put("/user/:id", function(req, res) {
	request({
		method: "PUT",
		uri: "http://daretodiscover.net/user/" + req.params.id,
		formData: {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			age: req.body.age,
			username: req.body.username
		}
	}, function(error, response, body) {
		res.redirect("/user");
	});
});
```

- Method override allows us to use the PUT verb in the HTML form, which is otherwise not supported.

##DELETE Operations

- Delete is the easiest of them all, but still requires a method override.
- Delete will require an ID to specify which record is to be deleted.

```
app.delete("/user/:id", function(req, res) {
	request({
		method: "DELETE",
		uri: "http://daretodiscover.net/user/" + req.params.id
	}, function(error, response, body) {
		res.redirect("/user");
	});
});
```

##In-Class Lab / Homework

- In this assignment we will create a wine inventory management system using a pre-built API: http://daretodiscover.net/wine
- The app must use the following:
	- Routes for GET, POST, PUT, DELETE.
	- 3 views - show all users, edit user, new user using EJS.
	- All CRUD operations using the correct verbs.
- Bonus: Make it pretty using Bootstrap