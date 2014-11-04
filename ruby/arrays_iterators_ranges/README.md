#Arrays, Iterators, and Ranges

##Arrays

There are several ways to create an array:

```
arr = [1,2,3]
=> [1,2,3]
arr1 = Array.new([4,5,6])
=> [4,5,6]
arr2 = Array.new(3, true)
=> [true, true, true]
```
##Ranges

Ranges are sets of values with a beginning and an end:

```
aRange = (1..10) # includes 10
anotherRange = (1...10) # not including 10
lettersWorkToo = ('a'..'z')
```

Ranges are often seen in conjunction with the FOR loop:

```
for i in 1..20
	puts i
end
```

You can also do this for arrays like we did with JavaScript:

```
for i in 0...array.length
	puts array[i]
end
```

##Iterators (Enumerators)

####.each
- This is likely to be the most common iterator you see.
- It is similar to the forEach loop in JS.

```
[1, 2, 3, 4].each do |item|
	puts item
end
```

- We will see each index in the console as the iterator works its way through the data.
- Arrays are the most common objects that we usually iterate over, but in Ruby there are multiple ways of defining sets of data.

```
%w(1, 2, 3, 4) #["1", "2", "3", "4"]
```

####.each_with_index
- This is a variant on `.each`, and it allows you to pass the current index into the block:

```
[1, 2, 3, 4].each_with_index do |number, index|
	puts index
end
```

####.reduce
- Reduce takes a collection of data and "reduces" it to a single value.
- An example of why you would use this may be to sum the values of an array.

```
[1, 2, 3].reduce { |sum, el|
	sum + el
}
```

####.map
- Map will run an operation for every index of an array.

```
[1, 2, 3, 4].map { |element|
	element + 1
}
```

- Often times you will also want the index to use inside of the block.
- This can be accomplished with the `map.with_index` method.

```
[1, 2, 3, 4].map.with_index { |element, index|
	element + index
}
```

- `.map` can also be a "mutator" method by calling it with a bang - `.map!`. Using this notation will permanently change the original array.

```
[1, 2, 3, 4].map!.with_index { |element, index|
	element + index
}
```

##In-Class Lab #1
- Go through the arrays section of RubyMonk [here](https://rubymonk.com/learning/books/1-ruby-primer/chapters/1-arrays/).

##Array Methods

####.shift
- `.shift` will remove the first element of the array and return it.

```
my_array = [1, 2, 3, 4]

my_array.shift # => 1
```

####.unshift
- `.unshift` will prepend objects to the front of the array, moving other elements upward.

```
my_array = ["a", "b", "c"]

my_array.unshift("insert") # => ["insert", "a", "b", "c"]
```

####.take
- `.take` will return the first `n` elements of an array.

```
my_array = [1, 2, 3, 4]

my_array.take(3) # => [1, 2, 3]
```

####.push
- `.push` will append an object to the end of an array.

```
my_array = [1, 2, 3, 4]

my_array.push(5) # => [1, 2, 3, 4, 5]
```

####.pop
- `.pop` will remove the last element of the array and return it.

```
my_array = [1, 2, 3, 4]

my_array.pop # => [1, 2, 3]
```

####.sort
- `.sort` will compare items in the array and sort them using the <=> operator.

```
my_array = [1, 4, 2, 3]

my_array.sort # => [1, 2, 3, 4]
```

##In-Class Lab #2
- Open the RubyMonk [array tutorial](https://rubymonk.com/learning/books/1-ruby-primer).
- Try these problems:
	- Find the length of strings in an array
	- Find the frequency of a string in a sentence
	- Select random elements from an array
	- Find non-duplicate values in an array
	- Check if all elements in an array are Fixnum
- Bonus: Try the "sort the words in a given sentence" challenge.

