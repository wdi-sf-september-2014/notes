#Arrays and Objects

##Array Functions

###.push()

The `.push` method allows you to add new items to the end of an array and returns the new length.

```
var myArray = ["Apple", "Banana", "Orange"];

myArray.push("Grape", "Peach");
```

###.pop()

The `.pop` method removes the last element of an array and returns that element. This will actually change the array.

```
var myArray = ["Apple", "Banana", "Orange", "Grape"];

myArray.pop();

//Array is now ["Apple", "Banana", "Orange"];
```

###.shift()

The `.shift` method removes the first element of an array and returns that element. This will also change the array.

```
var myArray = ["Apple", "Banana", "Orange", "Grape"];

myArray.shift();

//Array is now ["Banana", "Orange", "Grape"];
```

###.unshift()

The `.unshift` method adds one or more elements to the beginning of an array and returns the length of the new array. This will change the array.

```
var myArray = ["Apple", "Banana", "Orange", "Grape"];

myArray.unshift("Peach");

//Array is now ["Peach", "Banana", "Orange", "Grape"];
```

###.map()

Array mapping allows you to create a new array from running some provided function on each index of the given array.

Let's say we want to multiply every number in the below array by 2 to produce a new array:

```
var myArray = [2, 3, 4, 5];

var newArray = myArray.map(function(currentValue, index, array) {
	return currentValue * 2;
});
```

###.reduce()

Array reduce allows you to run a function on all array indexes and return a single value. Let's say we wanted to add together all of the items in this array:

```
var myArray = [2, 3, 4, 5];

var sum = myArray.reduce(function(previousValue, currentValue, index, array) {
	return previousValue + currentValue;
});
```

##Array Exercises

Do the array exercises from [this repo](https://github.com/litterbox-sf-fall/notes/blob/master/week_01_fundamentals/day_3_intro_to_javascript/dusk_control_flow_and_functions/primitives_lab.md).

##Objects - Plain 'Ol JavaScript Objects (POJO)

####Object Notation

```
var myObject = {
	firstName: "Arun",
	lastName: "Sood",
	role: "Instructor"
};
```

####Accessing Objects

```
myObject.firstName

myObject.lastName

myObject.role
```

####Objects can have multiple data types

```
var myObject = {
	firstName: "Arun",
	lastName: "Sood",
	sayName: function() {
		alert(this.firstName + " " + this.lastName);
	},
	age: 27
};
```

####`this` keyword

- `this` refers to the current object scope.
- In the case of `myObject` above, the current scope is `myObject`.
- I could have simply referred to it by `myObject`, but `this` is very DRY.
- You will see this syntax very often in "MVC"-type JavaScript frameworks such as Backbone.js.

##Object Exercises

Do the object exercises from [this repo](https://github.com/litterbox-sf-fall/notes/blob/master/week_01_fundamentals/day_3_intro_to_javascript/dusk_control_flow_and_functions/primitives_lab.md).

