# Test Driven Development

## Objetives

* Understand the philosophy and the *why* of testing
* Write an app with model tests, using the tests to drive your work

## Philosophy

### The Big Deal™ - Think about what you'll do, before you do it

* :pencil: Write a test to describe and specify the code you'll write
* :broken_heart: Have the test fail
* :green_heart: Write the *minimum* amount of code to pass the test
* :repeat: Refactor your code

### Side effects

* Maintainable code
* Confidence in your own code/others' confidence in your code
* Less "jiggling until it works"

### Examples of projects in the wild that embody this philosophy

* [Express](https://github.com/strongloop/express/blob/master/Contributing.md#prs-and-code-contributions)
  * [app.use test](https://github.com/strongloop/express/blob/master/test/app.use.js)
* [Express Cookie-Session](https://github.com/expressjs/cookie-session)
  * [cookie session test](https://github.com/expressjs/cookie-session/blob/master/test.js)
* [Sequelize](https://github.com/sequelize/sequelize/blob/master/CONTRIBUTING.md#pull-requests)
  * [has-one test](https://github.com/sequelize/sequelize/blob/master/test/associations/has-one.test.js)

#### Travis CI and automated builds

[Express Travis Builds](https://travis-ci.org/strongloop/express)
[Live Builds Running *NOW*](https://travis-ci.org/)

## [Let's do this!](https://github.com/wdi-sf-september-2014/todo_with_tests)

### In-class Exercise/Lab/HW: build a todo app with model tests

#### Required functionality:
* Create a todo list
  * A todo list should have a title and a description

```
// In test/models/todo_list_spec.js
describe('TodoList', function() {
  describe('attributes', function() {
    it('should have a title', function() {
      var list = models.TodoList.build({
        title: "My List"
      });

      expect(list.title).to.equal("My List");
    });
  });
});
```

##### What might be the next step?

How about:

```
$ sequelize model:create --name TodoList --attributes title:string,description:string
```

immediately followed by:

```
$ sequelize db:migrate
```

  * Titles may be at most 100 characters
  * The description must be at least 5 characters long and at most 140
    characters

##### What happens when a sequelize validator fails?
##### Hint: Think about fulfilled vs rejected promises

If we think about it, in terms of promises, we may use [Chai as Promised](http://chaijs.com/plugins/chai-as-promised)

```
$ npm install chai-as-promised --save-dev
```

```
promise.should.be.rejectedWith(Error);
```

When a validation fails, a promise is unfulfilled, and the result of the
unfulfilled promise is a `ValidationError`.
[ValidationError](https://github.com/sequelize/sequelize/blob/master/lib/errors.js#L40)

```
// In test/models/todo_list_spec.js
describe('validations', function() {
  var ValidationError = require('sequelize').ValidationError;

  it('should be invalid for titles > 100 characters', function(done) {
    expect(
      models.TodoList.create({
        title: "asdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdf"
      })
    ).to.be.rejectedWith(ValidationError).notify(done);
  });
});
```

##### Your turn

Write tests and validations for todolist descriptions between 5 and 140 characters

##### Let's build some of this UI - tests passing are only so exciting

* Create a todo item for a todo list
  * A todo item should have a required title
  * A todo item should not be creatable without a todo list specified
  * The title must be at least 5 characters long and at most 100
    characters
  * You should be able to complete a todo item

* View todo lists by their id
* View a todo lists' completed items

* Delete a todo list
  * This should also delete all of its items, if there are any
* Delete a todo
