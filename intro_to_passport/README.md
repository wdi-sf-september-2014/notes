#Authentication with Passport

##What Is Authentication?

####Ability to store and retrieve user credentials

Firstly, an authentication scheme allows your users to be able to save information about themselves into the app like username, password, name, birthday, etc.

####Way to keep parts of your app reserved for logged-in users

In most applications you want to separate common areas from private areas, such as a user's profile page or dashboard. Logging in users properly requires an authentication scheme.

##How is Authentication Performed?

In industry-standard applications, authentication is performed through a standard set of processes:

1. User registers for site providing username, password, etc.
2. Password is encrypted using a salted hash system like Bcrypt and saved into the database.
3. User visits login page and enters credentials (username, password, etc).
4. Password entered is checked against the password hash in the database.
5. Session cookie is set allowing user details to persist across pages and browser closes.

##Where Does Passport Come In?

- Sessions are not built in to Node, so Passport replicates this key feature.
- Passport appends methods and model information into the `req` object in Express to allow us to manage sessions.
- Passport operates mainly in the "middleware" to accomplish its tasks, so between request and response.
- Passport can handle standard authentication, but also assist heavily with OATH, which is the most common way to authenticate using an external API.

##Password Encryption Via Bcrypt

We first need to require our modules:

```
var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);
```

We need to then create a method to encrypt our password using the Blowfish algorithm:

```
hashPass: function(password) {
	return bcrypt.hashSync(password, salt);
}
```

And then we can write a function to compare a given password with the hash in the database:

```
comparePass: function(userpass, dbpass) {
	return bcrypt.compareSync(userpass, dbpass);
}
```

This password can then be saved in the database along with the new model information (such as a new user):

```
createNewUser: function(userInfo) {
	User.create({
   		first_name:userInfo.first_name,
      	last_name:userInfo.last_name,
       username:userInfo.username,
       password:this.hashPass(userInfo.password)
   });
}
```

Read more on the Blowfish algorithm [here](http://en.wikipedia.org/wiki/Blowfish_(cipher)).

##Setting Up Passport

This is absolutely non-intuitive, and requires mostly memorization.

We first need to import our new modules:

```
var passport = require("passport"),
    localStrategy = require("passport-local").Strategy,
    flash = require('connect-flash'),
    session = require("cookie-session");
```

Setup Passport to use appropriate middleware:

```
app.use(session( {
  secret: 'thisismysecretkey',
  name: 'chocolate chip',
  maxage: 3600000
  })
);

app.use(passport.initialize());
app.use(passport.session());
```

Passport uses "serialize" functions that allow the module to create session objects from the validated information:

```
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
```

##Apply Passport for User Authentication

In your post route for your user authentication form, you can use Passport like so:

```
app.post("/login", passport.authenticate("local", {
	successRedirect: "/",
	failureRedirect: "/login"
}));
```

This local "strategy" can be found in the User model:

```
passport.use(new localStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, function(username, password, done) {
      User.find({
        where: {
          username: username
        }
      }).done(function(error, user) {
        if (user) {
          if (User.comparePass(password, user.password)) {
            done(null, user);
          } else {
            done(null, null);
          }
        } else {
          done(null, null);
        }
      });
    }
  ));
```

If authentication succeeds, the `done()` method will be called, and the user is now serialized into the `user` object.

##What Does All This Mean?!

- User sessions now persist across pages and browser refreshes.
- User data can be used throughout the site.
- Content can be hidden or shown based on user authentication state.

app.js

```
app.get("/", function(req, res) {
	res.render("index.ejs", {
		isAuthenticated: req.isAuthenticated(),
		user: req.user
	});
});
```
index.ejs


```
<% if (isAuthenticated) { %>
	<h1>You are logged in!</h1>
<% } %>
```

##Lab / Homework

- Take the apartment manager lab you created and add an authentication layer.
- Users should be able to register for an account.
- Passwords must be hashed with Bcrypt.
- Apartment manager pages should only be visible when user is logged in.