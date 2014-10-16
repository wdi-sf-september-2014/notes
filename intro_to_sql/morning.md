# Intro to Databases and SQL - Morning

## What is a database?

- Sometimes called a DBMS (Database Management System)
- It is a program that enforces structure on your data and allows a computer to quickly retreive data
- A database should support CRUD operations.
  - CRUD => Create, Read, Update, Delete

## Why Use a Database?

Why is it better than just writing to files?

* Data is structured
* Databases are transactional
* Data retrieval is fast
* Has a system for remote access
* Has a system for backup

[Basic Concepts](http://www.postgresql.org/docs/9.3/static/tutorial-concepts.html)

## What is a schema?

A database __schema__ is the definition that describes the entire configuration of the database

## What is a Primary Key?

It denotes an attribute on a table that can uniquely identify the row.

## What does SERIAL Do?

SERIAL tells the database to automatically assign the next unused integer value to id whenever we insert into the database and do not specify id.  In general, if you have a column that is set to SERIAL, it is a good idea to let the database assign the  value for you.

## Data Types

Similar to how JS or Ruby has types of data, SQL defines types that can be stored in the DB. Here are some common ones:

* serial
* integer
* numeric // Numbers are exact, no rounding error
* float // Rounding error is possible, but operations are faster than Numeric
* varchar, text
* timestamp
* boolean (True or False)

For more, take a look at [Data Types in postgresql](http://www.postgresql.org/docs/9.3/static/datatype.html).

## Normalization

Normalization is a more advanced database design topic.  The idea behind normalization is that the data in your table should not be repeated.  The introduction of the [wikipedia article on normalization](http://en.wikipedia.org/wiki/Database_normalization) gives a good summary.
