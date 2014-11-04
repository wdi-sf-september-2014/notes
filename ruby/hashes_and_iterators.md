# Hashes, Iterating over Hashes, Our own iterators

## Hashes

Hashes are just a key-value data structure.

Let's make one!

```ruby
book_ratings = {
	"Stranger in a Strange Land" => 3,
	"2001: A Space Odyssey" => 5,
	"The Hitchhiker's Guide to the Galaxy" => 4,
	"War and Peace" => 5,
	"I, Robot" => 4
}
```

What if we wanted to get fancy?

```ruby
books_by_author = {
	"Asimov, Isaac" => {
		"I, Robot" => 4,
		"Foundation" => 5,
		"Foundation and Empire" => 5
	},
	"Tolstoy, Leo" => {
		"War and Peace" => 4,
		"Anna Karenina" => 5,
		"The Death of Ivan Ilyich" => 4
	},
	"Adams, Douglas" => {
		"The Hitchhiker's Guide to the Galaxy" => 4
	},
	"Heinlein, Robert" => {
		"Stranger in a Strange Land" => 3
	},
	"Clarke, Arthur, C." => {
		"2001: A Space Odyssey" => 5
	}
}
```

What is one possible issue that you can think of with the above?

Generally, you don't want to have very hard to manipulate long hash keys.

So, let's go to something more straightforward.

An actual use for hashes might be to count things, in, let's say a category. Let's consider a bookshelf, again, but this time, just count the number of books that are on the shelf, per genre.

```ruby
books_by_genre = {
	"pulp" => 3,
	"scifi" => 10,
	"nonfic" => 10,
	"comedy" => 4,
	"tragedy" => 5,
	"romance" => 0
}
```

Let's find out all the genres:

```ruby
books_by_genre.keys
```

Let's find out the numbers of books, without the categories:

```ruby
books_by_genre.values
```

### Exercise: Write the code to get the average number of books in a category

How about if we don't want to repeat code and write beautiful ruby?

Let's look up how `BasicObject#instance_eval` works.

Let's see if the hash contains a certain genre:

```ruby
books_by_genre.include? "pulp"
```

How about deleting a genre entirely? I hate pulp. Easy:

```ruby
books_by_genre.keep_if do |k,v| 
	["scifi", "nonfic", "comedy", "tragedy", "romance"].include? k
end
```

or, a cleaner method:
```ruby
books_by_genre.reject { |k,v| k == "pulp" }
```

Let's take a look at `books_by_genre` again.

Was it modified? o.O

What if you use the `reject!` version?

Do you see the pattern of having `?` and `!` at the end of method names?

### Time to try to mess stuff up:

```ruby
books_by_genre["pulp"] = 1000
```

Reassigning to a hash key that already exists, doesn't create a new hash key with that value. Hash keys are unique. Collisions are overriden.

How about trying dot notation, like in js?

```ruby
books_by_genre.pulp
> NoMethodError: undefined method `pulp' for #<Hash:0x00000105b03f28>
```

Yep, kaboom.

## Some hash iterators

### Exercise: Let's output our hash with `.each`
#### Questions: Look it up, can you pass just the element to `.each`? What are the two parameters that you can pass to the block? What happens if you just pass one?

### Exercise: Map `books_by_genre` to an array of mini-hashes, where each mini-hash in the array contains something like: 

```ruby
[{ "pulp" => 3}, { "scifi" => 10 }, ... ]
```

## Our own iterators

Well it's fun to use stuff that was built for us... but what if we wanted to write our iterators? 

### First, some functions that take blocks:

```ruby
def greet_with_time &block
	yield Time.now
end

greet_with_time { |time| puts "Hello, it's #{time}" }
```

Let's dissect what just happened...

What do you think `yield` does?

What if we called `yield` more than once?

Let's try it, but add another param:

```ruby
def greet_with_time &block
	yield Time.now
	yield Time.now
end

greet_with_time do |time, greet_tomorrow| 
	puts "Tomorrow, it's #{time}" 
end
```
Cool story, so why should we care?

Well, what do you think this kind of thing does for you?

Why is `.each` better than a `while` loop?

First, let's recall the `while` loop construct.

It's kinda ugly. Lots of useless and irrelevant things in it. Even a `for` loop isn't *that* much better. We can do better. 

How might `.each` be implemented to perform an operation on each element of an array? In other words, how can we wrap a `while` loop, hide its ugliness, and only care about the operation?

That leads us to today's lab:

### [Lab](https://github.com/wdi-sf-september-2014/sorted_array_with_iterators)