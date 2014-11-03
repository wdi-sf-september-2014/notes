#Introduction to Ruby

##A Little About Ruby
- To practice using Ruby we can use the Interactive Ruby (IRB) tool.
- Everything is an object.
- Everything that is manipulated is an object, and the results of those manipulations are objects.
- To compare to JS, you have prototypes on objects, such as array functions like .map or .reduce that you can call on instances of array objects.
- In Ruby everything is an object and you'll be able to use object methods on it all.

Let's take a look at some examples:

```
puts "Arun Sood".length
puts "Arun".index("A")
puts 35.even?
```

- We can tell that everything is an object, because everything has a "class":

```
"Arun Sood".class #String
4.class #Fixnum
[].class #Array
Object.class #Class
```

- Something like this `message = "Hello World"` is essentially the equivalent of `message = String.new("Hello World")`.

- There is little conversion of type:

####JS

```
console.log("Hello " + 4 + 2); //Hello 42
```

####Ruby

```
puts "Hello " + 4 + 2 #no implicit conversion of Fixnum into String
```

##Modules Versus Objects

####Modules
- Modules are like libraries.
- Usually used for containing a bunch of "helper" functions that you can call throughout your program.
- Great example is the [Math module](http://www.ruby-doc.org/core-2.1.4/Math.html) built into Ruby:

```
Math.sqrt(9) #3.0
```

####Objects
- Ruby is a proper object-oriented language.
- "Classes" wrap methods that are related to that object.
- Instead of prototypes in JS that relate to some object, we have classes that encapsulate methods.
- Classes can also inherit from other classes - this is called extension. We will get to this later.

```
class Car
	def initialize(color, make, model)
		@color = color
		@make = make
		@model = model
	end
	
	def drive
		puts "We are now driving!"
	end
	
	def paint(new_color)
		@color = new_color
		puts @color
	end
	
	def describe_car
		puts "We are driving in the #{@color} #{@make} #{@model}"
	end
end

Car.new("Red", "Honda", "Civic").paint("Blue")
```

##Practicing Ruby

Let's practice Ruby syntax by going through the [Try Ruby](http://tryruby.org) tutorial.

##Getting User Data in IRB
- Ruby has a method called `gets` that allows you to retrieve data from the user typing into the console.
- This method is similar to `prompt` in JS.
- In order to prevent the input from receiving a new line each time you must call the `.chomp` method:

```
message = gets.chomp
```
##In-Class Lab #1
- We will create a simple string conversion tool that take in a string and alters it using our string class methods.
- First, write one `gets` statement that will take a string from our user.
- Create a class called `ConvertString` that will wrap our methods.
- Create an initializer that will set the given string to a class variable.
- Create 4 different methods that will apply 4 string class methods to the inputted string. You can reference them [here](http://www.ruby-doc.org/core-2.1.4/String.html).
- Output the resulting string to the console using `puts`.
- Instantiate the class using each of these methods.

##In-Class Lab #2
- Let's create a simple calculator using the Ruby Math module.
- First, write two `gets` statements that will take 2 numbers from our user.
- Create a class called `Calculator` that will wrap all of our methods.
- Create an `initializer` method that takes in the 2 numbers and sets them as class variables.
- Write at least 4 methods that perform different math operations and output the result using `puts`. You can reference them [here](http://www.ruby-doc.org/core-2.1.4/Math.html).
- Instantiate your class using each of these 4 methods.
- Bonus: As a bonus you can create a simple `if else` statement that will choose which method to pick based on a third `gets` input. We will talk about this in the afternoon so you will have to look this up.
- Bonus 2: Create another method that uses one of the Math constants in your operation.