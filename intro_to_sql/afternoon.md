# Intro to Databases and SQL - Afternoon

## Install [postgres.app](http://postgresapp.com/)

## Start postgres

## Start psql

### Getting started with psql

If you installed Postgress.app you have access to psql from the elephant icon at the top of the screen:

* ![image](https://raw.githubusercontent.com/wdi-sf-march-2014/notes/master/DatabasesIntro/Postgres.png)

If you are using the command line:

* In your terminal, type ```psql```.  

__psql__ is the (a) command line tool to interact with postgres databases, by default it connects to the localhost database with the name of the current user


psql has some of its own commands which begin with `\`


List all of the available databases:

```
\list
```

List all of the available tables in the current database:

```
\dt
```

There are lots of other commands which you can see with:

```
\?
```
Use `q` to exit the help screen

__ALL PSQL COMMANDS START WITH `\` __


At this point we should have a database with no tables in it.  So now we need to create tables - using SQL __(NOT to be confused with the psql app itself)__

##psql and SQL 

* CREATE a Database:

```
  CREATE DATABASE testdb;
```

* Connect to the new database:

```
  \connect testdb

 ->You are now connected to database "testdb" as user "stuart".
  
```

* CREATE a TABLE

```
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name TEXT,
    phone VARCHAR(15),
    email TEXT
);
```

* INSERT (remember single quotes for text)

```
INSERT INTO students 
(name, phone, email) 
VALUES 
('Mary Wilson', '(510)-555-5555', 'bob@example.com');

```

* SELECT

```
SELECT id, email FROM students WHERE name = 'Bob Jones';
```

* UPDATE

```
UPDATE students SET email='bobby@example.com' WHERE name = 'Bob Jones';
```

* DELETE

```
DELETE from students WHERE name = 'Mary';
```

* QUIT psql 
```
/q
```

ADD A FOREIGN KEY

``` ALTER TABLE _____ ADD CONSTRAINT something_fk FOREIGN KEY (____) REFERENCES _____ (_____) ON DELETE NO ACTION; ```
