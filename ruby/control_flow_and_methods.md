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

What's are some differences between JS?

* `==` vs `===`
* `elsif` vs `else if`
