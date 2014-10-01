# Grokking functions

In JS, you need to understand functions. It's essential. 

You got a basic sip of functions from Arun this morning.
Now, we'll explore functions in more depth.

## Core Objective: Grok functions.

Know why this IIFE returns `true` regardless of the argument passed
to it:

```
(function (value) {
  return (function (copy) {
    return copy === value;
  })(value);
})("Hello World");
```

## Sub-objectives

* Functions as environments << This is absolutely key
* Function declaration vs function expression
  * Function declaration
  * Function expression
  * Anonymous function expression
  * Immediately-invoked function expressions (IIFE)

### A very basic function, again

```
(function () {

});
```

### Let's give it a body, and invoke it on zero arguments

```
(function () {
  console.log("Hello world");
})();
```

### Let's give it a body, and invoke it on a single argument: name 

```
(function (name) {
  console.log("Hello world, " + name);
})("Alex");
```

### Let's give it a name, in one of the ways

```
function greet(name) {
  console.log("Hello world, " + name);
}

greet("Alex");
```

### Function declarations

* Used, generally when we know exactly when the function will be called
* May not be defined inside conditional statements

### Function expressions

* May be defined inside conditional statements, and returned from other
  functions - this makes them extremely useful.
* Used generally when we don't know when the function will be called

#### Named function expressions

* Useful, because our debugger will tell us the name of the function
  precisely, without error or weird cases
* We would suggest this approach for the most flexibility

### Let's talk about environments

* A function creates an environment, which creates "privacy"

* A function "adopts" its parent environment

```
'use strict';

// function declaration
function greet() {
    return "hello world";
}

// function expression
var greet_me_in_the_morning = function () {
    return "good morning";
};

// named function expression
var greet_me_in_the_evening = function greet() {
    return "good evening";
};

// immediately invoked function expression
(function(when) {
  return "good " + when;  
})(when);
```

#### Let's talk about `var`

The `var` keyword binds a variable to an environment

#### Let's look at the stack

#### Let's talk about `this`

##### Functions, defined on objects

#### Let's talk about `call`

##### And its cousin `apply`

#### Hoisting and its pitfalls

### Functions are a reference type

Two functions, when written as **function expressions**, with the same
signatures and the same bodies are stored at different memory locations.

Comparing two such functions with `===` will return false.

## Homework

### [Build a trivial test framework](https://github.com/wdi-sf-september-2014-hw/simple_test_framework_with_js_functions) 

## Further reading

### [Let's talk about var](https://leanpub.com/javascript-allonge/read#let)
### [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
### [Named function expressions demystified](http://kangax.github.io/nfe/)
### [As Little as Possible About Functions, But No Less](https://leanpub.com/javascript-allonge/read#functions)
