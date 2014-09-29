#Intro to JS Functions

###Learning Objectives

- Illustrate proper function definitions.
- Implement and apply function scope through a wide variety of definitions.
- Demonstrate algorithm knowledge through practice exercises.

###Defining a Function

- There are three general ways to define a function.
- Function naming:

```
function functionName() { }
```

- Function as a variable:

```
var functionName = function() { }
```

- Function in an object:

```
var object = {
	myFunction: function() { }
}
```

###Calling a Function

- In order to invoke a function, we need to "call" it.
- This is how we do it for each type:

```
functionName();

object.myFunction();
```

###Function Arguments

- Arguments allow you to pass data into functions.
- You can think of them as "temporary" variables that can only be used in that function.
- Arguments are passed in at the time of calling the function.

#####The Setup:

```
function addTwo(number1, number2) {
	return number1 + number2;
}
```

#####The Call:

```
addTwo(1, 2);
```

###Function Scope

- Data within functions stay within functions.

```
function defineVar() {
	var phrase = "Hello World!";
}

defineVar();

console.log(phrase);
```

- The variable "phrase" cannot be passed outside of the function.

###RETURN

- In order to get data outside of a function, it must be returned.
- This doesn't mean that your variables are now accessible; rather, resulting values are passed outside. Consider:

```
function addTwo(number1, number2) {
	number1 + number2;
}
```

- No data would result from this function unless it is "returned" out.
- How would we rewrite this?

###JS Function Lab 1

Forget how old you are? Calculate it.
- Write a function called calculateAge that:
	- Takes 2 arguments: birth year, current year
	- Calculates the 2 possible ages based on those years
	- Outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

###Function Exercises

1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

###Bonus: Hard Questions

8. Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
9. Write a function to sort a list of words (an array) in alphabetical order.
10. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

###Homework

- Finish all exercises not completed in class.

###Further Reading

- http://www.sitepoint.com/5-typical-javascript-interview-exercises/