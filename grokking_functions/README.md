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

## Further reading

### [Let's talk about var](https://leanpub.com/javascript-allonge/read#let)
### [As Little as Possible About Functions, But No Less](https://leanpub.com/javascript-allonge/read#functions)
### [Named function expressions demystified](http://kangax.github.io/nfe/)
