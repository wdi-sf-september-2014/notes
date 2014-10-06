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

###.forEach()

The `.forEach` method executes a provided function once per array element.

Let's say we want to display the result of adding 2 to each index of the below array:

```
var myArray = [1, 2, 3, 4];

myArray.forEach(function(element, index, array) {
	console.log(element + 2);
});
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

##Object Initialization

- `var myObject = {};` is basically the equivalent of var `myObject = new Object();`
- What happened here? We created a new instance of an object.

####Functions are objects too...

```
function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

var myCar = new Car("Honda", "Civic", 2004);

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
```

- What we've done is basically create a generic way to spit out objects containing the make, model, and year properties of any given car.
- This is very similar to the MODEL part of the MVC pattern of coding you will see later in the course.

##Object.create() Method

So we've seen how to set up objects, but what about setting up an object from another object?

This is where we can use the `Object.create()` method.

```
var Animal = {
	type: "Invertebrate",
	displayType: function() {
		console.log(this.type);
	}
};

var animal = Object.create(Animal);

animal.displayType();
```

- This new variable becomes an object that can be manipulated.

##Object Enumeration

Iterating through objects can be achieved easily through a for-in loop. This will allow us to look through each key-value pair.

```
var myObject = {
	firstName: "Arun",
	lastName: "Sood",
	sayName: function() {
		alert(this.firstName + " " + this.lastName);
	},
	age: 27
};

for (var key in myObject) {
	console.log(key);
	console.log(myObject[key]);
}
```

##Object Exercises

####The Recipe Card

- Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
- On separate lines (one console.log statement for each), log the recipe information so it looks like:
	- Mole
	- Serves: 2
	- Ingredients:
	- Cinnamon
	- Cumin
	- Cocoa

####The Reading List

- Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
- Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
- Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

####The Movie Database

- Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
- Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

##In-Class Objects Lab

- Use the AJAX code below to make a call out to the server and return JSON data.
- Loop through all objects in the array that is returned.
- Display the returned information on a page in an interesting way.

```
var xmlhttp;

if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      //Request was successful and you can do stuff here.
      var ajaxData = xmlhttp.responseText;
    }
}

xmlhttp.open("GET","[HTTP URL]",true);
xmlhttp.send();
```

