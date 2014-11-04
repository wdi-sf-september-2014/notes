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

