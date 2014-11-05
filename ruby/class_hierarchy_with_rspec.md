# Test driven class hierarchy

## Objectives
### Morning
* Learn about [RSpec](https://github.com/rspec/rspec)
* Run tests automatically with [autotest](https://github.com/rspec/rspec-autotest)
* Define and write a `Person` object by writing tests first

## `Person` object requirements
* We should be able to make new `Person` objects via their constructor
* A `Person` object should have a `first_name`, `last_name`, `age`, and `gender`
* A `Person` object's `age`, and `gender` should not be directly changeable
* A `Person` should age 1 day for every ten seconds since they had been created
* The `Person` class should return an array of `people`, which should be all the `Person` objects ever created

### Afternoon
* Introduce inheritance and some basic semantics
* Write some more tests to define the hierarchy
* The hierarchy should be:
* `Student < Person`
* `Instructor < Person`
* `Course has many students`
* `Course has two instructors`
* Get creative with methods and attributes that you define on `Student` and `Instructor` objects. This is your opportunity to practice
* Feel free to add more layers to the hierarchy, but make sure all previous tests pass
* Don't write any code that doesn't have tests for it
* Write the hierarchy
* Remember to keep things simple and write tests, before writing any functionality. This is crucial. Define the functionality with the test.