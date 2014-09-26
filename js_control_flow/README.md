# JavaScript Control Flow

##Learning Objectives
* Demonstrate proper use of conditionals.
* Apply principles of operators in conditional statements.
* Illustrate proper use of the `FOR` and `WHILE` loops.
* Identify improper loops that can result in infinite looping.

## Agenda 
* Javascript Control Flow
  * Conditionals (if/else)
  * While loop
  * For loop
  * Switch case

##Objectives
* Be able to use various JS data types
* Be able to control flow operators in JS
* Be able to manipulate JS object literals

# Getting Started
###Conditionals

* Standard `if, else` blocks
* Slightly more advanced `if, else if, else` blocks

###Comparison Operators

* AND `&&`, OR `||`
* `>`, `<`, `>=`, `<=`

### Exercise #1: The Fortune Teller

  Why pay a fortune teller when you can just program your fortune yourself?

  - Store the following into variables: number of children, partner's name, geographic location, job title.
  - Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

## Conditionals: always use Triple Equal "===" or "!=="
* Check to see if two values are identical with the "===" strict equality.
  
```
    console.log("Always use triple equal sign to test equality.")

    console.log(42 === 42);
    //=> true

    console.log(3 === "3");
    //=> false

    // Double equal operator gives the wrong result!!
    console.log(3 == "3");
    //=> true

    console.log(2 + 2 === 4);
    //=> true

    console.log("foo" !== "bar");
    //=> true

  ```
  ```
  console.log("if - else if - else:")
  // var state = "red";
  var state = "green";
  // var state = "blue";

  // "message" is an example of a JavaScript Object Literal.
  var message = {
                "failing": "Tests are failing.",
                "passing": "Tests are passing.",
                "refactor": "Time to refactor."
              }
              
  if (state === "red") {  
    console.log(message.failing);
  } else if (state === "green") {
    console.log(message.passing);
  } else { // Time to refactor.
    console.log(message.refactor);  
  }
  ```
  
## Exercise #2: The World Translator
- Write a function named helloWorld that:
  - takes 1 argument, a language code (e.g. "es", "de", "en")
  - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
- Call that function for each of the supported languages and log the result to make sure it works.

## For loop

  ```
  var mixed = [1, "two", "three", true];
  
  console.log("For Loop:")
  
  // Most common mistake is using commas instead of "semicolons" inside the loop declaration.
  
  for(var i = 0; i < mixed.length; i++) {
    console.log("The element at index " + i + " is: " + mixed[i]); 
  }
  ```
  
## While loop
  ```  
  var a = [1,2,3,4];
  var b = [1,2,3,4];

  console.log("While Loop:")
  
  var i = 0;
  
  while(i < a.length) {
    console.log("The element at index " + i + " is: " + a[i]);
    i++; 
  }
  ```
##Infinite Loops

- While writing a loop it is possible to create a loop that will go until infinity.
- Obviously we try to avoid this while coding.

```
for (var i = 0; i > 0; i++) {
	console.log(i);
}
```

###Exercise #3: 
- Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
  
## Switch Case
  
  ```
  var expression = "label2"

  switch (expression) {
    case "label1":
        console.log("First case: label1");
        break;
    case "label2":
        console.log("Second case: label2");
        break;
    case "labelN":
        console.log("Nth case: labelN");
        break;
    default:
        console.log("Default case.");
        break;
    }
   ```
### Basic JavaScript Calculator Lab

- Create a calculator in JavaScript.
- Prompt the user to enter an operator and two operands.
- Support the following operations: addition, subtraction, multiplication, and division. Output may appear in the console or in an alert.

###Homework

- Write a function that calculates and shows the value of one number to the power of another.
- The function should take 2 arguments - one number as the base, one as the exponent.
- An example could be `2^10` with the function looking something like `calculateExponent(2,10)`.
- Submit a pull request to homework repo.

## Resources:
* [Code School free course on the Developer Tools](https://www.codeschool.com/courses/discover-devtools)
* [JavaScript Alonge](https://leanpub.com/javascript-allonge/read#leanpub-auto-a-pull-of-the-lever-prefaces)
* [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

##Style Guide
Check out some style guides for coding  

- [http://nerds.airbnb.com/our-javascript-style-guide](Airbnb JS Guide)
- [https://github.com/zillow/javascript](Zillow JS Guide) 