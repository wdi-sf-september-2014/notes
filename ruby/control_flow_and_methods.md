# Ruby Control Flow and Methods

Because we did control flow in JS, ruby's control flow is going to be a
piece of cake. We'll draw parallels between JS and ruby throughout the
lesson, and practice it all together!

## `if` statements

In JS:

```javascript
var yes = true;
if (yes) {
  console.log("Indeed!");
}
```

In ruby:

```ruby
yes =  true
if yes
  puts "Indeed!"
end
```

But, in ruby, there's a cleaner way:

```ruby
yes = true
puts "Indeed!" if yes
```

The above is called a statement modifier. It's beautiful.

Let's make our ruby repl more beautiful, because writing ruby should be more
beautiful than just plain text:

```
$ gem install pry
$ gem install pry-doc
```

What about `if-else if-else` you say? Easy!

```ruby
name = "Alex"
if name == "Bob"
  puts "Hello Bob"
elsif name == "John"
  puts "Hello John"
else
  puts "Hello Someone"
end
```

What's are some differences between ruby and JS above?

* `==` vs `===`
* `elsif` vs `else if`

A question you should ask yourself:

* Does ruby have a `===`?

The answer is more subtle than you think:
> Ruby does not have operators, its objects implement operators!

Whoah, what? Wait a minute. Confused?

### Exercise #1: Figure out how ruby operators work

Let's take a look at the [`case`](http://ruby-doc.org/core-2.1.4/doc/syntax/control_expressions_rdoc.html#label-case+Expression) expression. Read about it and explain to me what I mean by "Ruby does not have operators, its objects implement operators" [Hint](http://ruby-doc.org/core-2.1.4/Object.html#method-i-3D-3D-3D)

### Exercise #2: Back to control flow

In groups of 2, read through [control flow expressions](http://ruby-doc.org/core-2.1.4/doc/syntax/control_expressions_rdoc.html), and after you understand a control flow statement, put your group's name and the name of the statement on the whiteboard, to discuss your findings with the class. First come, first served. After you have your name on the board, read about the next control flow statement. If you want, join a group already talking about it, by adding your name to that topic. Your group will teach, based on what you discover, and I will moderate.

## Playing with methods

In ruby, objects receive messages - these messages are sent to objects via the syntax:

`receiver.message` or `receiver.message()`

The `message` is the method name. Parentheses are optional.

When a method or message wants arguments, you may pass them in parentheses, like so:

`receiver.message(1, '2', "three")`

or:

`receiver.message 1, '2', "three"`

For all but the simplest method invocations, using parens is best practice.

### Associating `blocks` with method calls

Let's say we have the array:
`[1, 2, 3]`

```ruby
[1, 2, 3].each { |el| puts el }
```

or 

```ruby
[1, 2, 3].each do |el|
  puts el
end
```

What does this remind you of?

```javascript
[1, 2, 3].forEach(function(el) {
  console.log(el);
});
```

So, basically, passing blocks to a method in ruby, is a lot like passing an anonymous function in javascript! It's awesome being a polyglot programmer, because the concepts often translate from one language to the next, and you begin to appreciate the subtleties of each implementation and become a better programmer as a result.

### Question : What's the return value of the iterator in javascript? How about in ruby? Understanding these subtle differences is crucial. So, figure it out.

Let's try passing one more block to our array:

```ruby
[1, 2, 3].reduce(:+)
```

Yes, ruby is awesome. Yes, a block was passed. The above is the equivalent of:

```ruby
[1, 2, 3].reduce { |sum, el| sum + el }
```

Remember this?

```javascript
[1, 2, 3].reduce(function(sum,el) {
  return sum + el;
});
```

That's all for today!

## Homework: 

* Complete [rubymonk control structures subchapter](https://rubymonk.com/learning/books/1-ruby-primer/chapters/8-control-structures/)
* Complete [rubymonk objects and methods subchapter](https://rubymonk.com/learning/books/1-ruby-primer/chapters/6-objects/)
* Extra credit: [Read why's poignant guide until and including chapter 3](http://mislav.uniqpath.com/poignant-guide/)
* Extra credit: Complete [tryruby](tryruby.org)
