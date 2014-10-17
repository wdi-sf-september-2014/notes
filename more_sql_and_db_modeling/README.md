#More SQL And DB Modeling

##SQL Joins

- We will be using the lesson [here](https://github.com/arun-instructor/notes/tree/master/week_03_intro_web_applications/day_04_db_models_and_more_sql/dawn_joins/joins_lesson).
- [SQL Zoo Join Exercise](http://sqlzoo.net/wiki/The_JOIN_operation)

##Using Postgres SQL With Node

- In order to use Postgres SQL you have to install an adapter that knows how to interact with the database server: `var pg = require("pg");`
- We then need to configure the database connection:

```
var db = {};

db.config = {
    database: "book_manager",
    port: 5432,
    host: "localhost"
};
```

- We then have to connect to the database and set up the query function:

```
db.connect = function(runAfterConnecting) {
	pg.connect(db.config, function(err, client, done){
		if (err) {
			console.error("Something went wrong.", err);
		}
		runAfterConnecting(client);
		done();
	});
};

db.query = function(statement, params, callback){
	db.connect(function(client){
		client.query(statement, params, callback);
	});
};
```

- When we need to make queries, we need to use the `db.query` method:

```
db.query("SQL QUERY GOES HERE", function(error, result) { });
```

##Designing a Database

- Build a database with at least 3 tables for a simple blogging system.
- Perhaps user information, blog posts, followers

##In-Class Lab / Homework

- Today we will be building an apartment management system.
- We will be working with an already-built DOM [here](apartment_app/).
- The app must use Postgres SQL to persist data and must work with Node.
- Bonus: Add delete button.
- Bonus Bonus: Add edit method with buttons.
- MAX BONUS! Activate the maintenance request feature.