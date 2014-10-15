var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
	extended:true
}));

app.use(methodOverride("_method"));

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

app.get("/user", function(req, res) {
	request({
		method: "GET",
		uri: "http://daretodiscover.net/user"
	}, function(error, response, body) {
		res.render("index.ejs", {
			data: JSON.parse(body)
		});
	});
});

app.get("/newuser", function(req, res) {
	res.render("new-user.ejs");
});

app.get("/user/:id", function(req, res) {
	request({
		method: "GET",
		uri: "http://daretodiscover.net/user/" + req.params.id
	}, function(error, response, body) {
		res.render("edit-user.ejs", {
			data: JSON.parse(body)
		});
	});
});

app.delete("/user/:id", function(req, res) {
	request({
		method: "DELETE",
		uri: "http://daretodiscover.net/user/" + req.params.id
	}, function(error, response, body) {
		res.redirect("/user");
	});
});

app.listen(3000);