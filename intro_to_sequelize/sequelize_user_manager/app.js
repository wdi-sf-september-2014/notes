var express = require("express");
var pg = require("pg");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// var Sequelize = require("sequelize");
// var config = require("./config/config.json").development;
// var sequelize = new Sequelize(config.database, null, null, config);
// var User = sequelize.import(__dirname + "/models/user.js");

var models = require("./models/index.js");

var app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
	extended:true
}));

app.use(methodOverride("_method"));

app.get("/new", function(req, res) {
	res.render("new.ejs");
});

app.post("/new", function(req, res) {
	models.User.create({
		first_name:req.body.firstname,
		last_name:req.body.lastname,
		age:req.body.age
	}).success(function(data) {
		res.send(data);
	});
});

app.get("/", function(req, res) {
	models.User.findAll().success(function(users) {
		res.render("index.ejs", {
			all_users: users
		});
	});
});

app.get("/edit/:id", function(req, res) {
	models.User.find(req.params.id).success(function(user) {
		res.render("edit.ejs", {
			user_info: user
		});
	});
});

app.put("/edit/:id", function(req, res) {
	models.User.find(req.params.id).success(function(user) {
		user.updateAttributes({
			first_name:req.body.firstname,
			last_name:req.body.lastname,
			age:req.body.age
		}).success(function() {
			res.redirect("/");
		});
	});
});

app.delete("/delete/:id", function(req, res) {
	models.User.find(req.params.id).success(function(user) {
		user.destroy().success(function() {
			res.redirect("/");
		});
	});
});

app.listen(3000);