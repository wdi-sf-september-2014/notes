var express = require("express"),
	pg = require("pg"),
	bodyParser = require("body-parser"),
	bcrypt = require("bcrypt"),
	models = require("./models/index.js");

var app = express();

//Modules for use with Passport

var passport = require("passport"),
    localStrategy = require("passport-local").Strategy,
    flash = require('connect-flash'),
    session = require("cookie-session");

//Setup Passport for use

app.use(session( {
  secret: 'thisismysecretkey',
  name: 'chocolate chip',
  maxage: 3600000
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    models.User.find({
        where: {
            id: id
        }
    }).done(function(error,user){
        done(error, user);
    });
});

app.set("view engine", "ejs");

//Use body parser to use req.body.whatever

app.use(bodyParser.urlencoded({
	extended:true
}));

//Signup form routes

app.get("/new", function(req, res) {
	res.render("signup.ejs");
});

app.post("/new", function(req, res) {
	models.User.createNewUser({
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		username:req.body.username,
		password:req.body.password
	});
});

//Home route

app.get("/", function(req, res) {
	if (req.isAuthenticated()) {
		res.render("index.ejs", {
			isAuthenticated: req.isAuthenticated(),
			userInfo: req.user
		});
	} else {
		res.render("index.ejs", {
			isAuthenticated: false
		});
	}
});

//Logout

app.get("/logout", function(req, res) {
	req.logout();
	res.redirect("/");
});

//Login form routes

app.get("/login", function(req, res) {
	res.render("login.ejs");
});

//Set up login POST route to be handled through Passport

app.post("/login", passport.authenticate("local", {
	successRedirect: "/",
	failureRedirect: "/login"
}));

//Start the server

app.listen(3000);