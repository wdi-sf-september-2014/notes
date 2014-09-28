# Objects and Primitives

## Objectives: 

* Understand how objects in the virtual world are similar to ones in the
  real world 

* Play with some JS native objects and primitives, and their behaviors

* Grok how primitives become objects, only if temporarily so

* Learn or revisit some really important JS vocabulary

* Make an object of our own


## Objects everywhere, well, almost

### Everything is an object
### Except for primitives, null, and undefined

### What makes an object what it is?

> ... the most sophisticated machine the human mind can build has in it 
> the limitations of the human mind.  
> ***-Robert Heinlein, Time Enough for Love***

Eventually you'd discover that objects boil down to: 

### Their properties 

### Things you could do with them 

What about objects in your machine?

### The JavaScript Console Object!

#### A side note: REPL

#### Back to Console

##### Its properties

##### Its functions

---

> By knowing the console's properties and what may be done with it, we've learned all (almost all) about the console and what it is - we've practically **grokked** the console and understood its essence. It's not **too** different from describing a marker, a chair, a table, or a rocket engine. We're just using a different language to do it. 
> **- Alex Notov**

---

> “I am all that I grok.” 
> **― Robert A. Heinlein, Stranger in a Strange Land**

---

#### Primitives (or value types)

#### Exercise: check if primitives are objects too

Let's try a couple of more things in your pair groups:

* `false instanceof Object`
* `"WDI" instanceof Object`
* `123 instanceof Object`

Then: `"WDI".toLowerCase()`

And try this:

```
for (var prop in "WDI") {
	console.log(prop);
}
```

Then, try this:
`1.toString()` and `(1).toString()`

**Question:** Why doesn't the former work and the latter does?

**Answer:** the expression "1.toString()" is parsed by the REPL and expects a decimal, not a function after the decimal point.

And finally, this:

```
for (var prop in 42) {
	console.log(prop);
}
```

#### Thus, we've discovered ***primitives***!

Let's play with primitives a bit, to understand them further.

#### Exercise: play with primitives.

Try the following in your console, with your pair groups:

* `1 + 2`
* `"WDI" + " is going to teach me how to be a problem solver"`
* `"I have learned that there are " + 3 + " core data types in JS"`
* `(100).toString()`
* `"2" + 2`

Experiment with expressions not listed above, that are similar to the ones above, and see what happens.

#### Question you should ask yourself: 
If primitives, are not objects, how do they have functions defined on them?

#### Answer: 
It turns out that JS actually temporarily wraps primitives in their Object counterparts to perform certain operations

#### Second question: 
Well, but in the REPL, aren't expressions stored in memory? What's the deal with memory anyway? 

#### Let's talk about the garbage collector

## Further reading

### [The Secret Life of Primitives](http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
### [Values and Expressions](https://leanpub.com/javascript-allonge/read#leanpub-auto-prelude-values-and-expressions)