#JavaScript Prototypes and Constructors

As you're working with JavaScript, you may have noticed the strange `new` operator. We will be discussing the difference between a function and a constructor.

##What is a Constructor?

- A FUNCTION, a plain function. Only difference is it is being used as a constructor.
- Functions can be written to be used as a constructor or to be called as a normal function.
- Functions can also be used either way.

##How a Constructor Works

```
var User = function User() {
	//Code here
}

var user = new User();
```

In JavaScript, this does four things:

####It creates a new object.

- Simply creates a brand new object: {}.

####It sets the `constructor` property of the object to `User`.

```
user.constructor == User //true
user instanceof User //true
```

- This isn't an ordinary property that would show up while console.log-ing.
- The built-in constructor property is something you can't set manually.

```
var FuzzyBear = function FuzzyBear() { }
user.constructor = FuzzyBear;

user.constructor === FuzzyBear //true

user instanceof FuzzyBear //false
user instanceof User //true
```

- It sets up the object to delegate to `User.prototype`.
- It calls `User()` in the context of the new object.
- Functions automatically get a property called `prototype` that is just an empty object.

When an object is constructed, it inherits all of the properties of its constructor's prototype:

```
User.prototype.firstName = "Arun";
var user = new User;
user.firstName //Arun
```

The `User` instance picked up the firstName from `User`'s prototype.

####The object is set up to delegate any properties which haven’t been explicitly set up to its constructor’s prototype. That means that we can change the prototype later, and still see the changes in the instance.

```
User.prototype.firstName = "Alex";
user.firstName //Alex
```

##Putting it All Together

Given this tool, we can implement something like classes in JavaScript.

