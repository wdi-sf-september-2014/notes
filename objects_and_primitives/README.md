# Objects and Primitives

## Objectives: 

* Understand how objects in the virtual world are similar to ones in the
  real world 

* Play with some JS native objects and primitives, and their behaviors

* Learn or revisit some really important JS vocabulary

* Make an object of our own


## Objects everywhere, well, almost

We say that in JS, almost everything is an object, with the only
exceptions being primitives, `null` and `undefined`. Even the primitives are used as objects of sorts. "More on those exceptions later.

### What makes an object what it is?

> ... the most sophisticated machine the human mind can build has in it 
> the limitations of the human mind.  
> ***-Robert Heinlein, Time Enough for Love***

So what's an object? It's pretty much what you'd think of, if you
considered this question: "What defines an object in the real world?" 

Eventually you'd discover that objects boil down to: 

### Their properties 
### Things you could do with them 

Let's think about it in terms of concrete objects around us:

* A dry erase marker:
  * can be used to write
  * may be thrown at students, if they aren't paying attention
  * can have a longer shelf life if its cap is put on it
  * can be a certain color

* A chair:
  * can be used as a step stool
  * is made of certain materials
  * may be used for its purpose to sit on
  * has a back to lean on

So, if those are some objects around us... 

What about objects in your machine?

### The JavaScript Console Object!

Let's start with our browser. It's made up of many many many, hundreds,
if not thousands of objects! Let's take a look at one. Open up your
browser, and go to this menu item, and try its shortcut while you're at
it: `⌥.⌘ J`. You'll be using that constantly. Shortcuts are good for
you.

![JavaScript Console](http://i.imgur.com/pzaef5N.png)

Type `console` at the `>` and press enter.

You should see something like this:

```
Console {memory: MemoryInfo, debug: function, error: function, info: function, log: function…}
```

#### A side note: REPL
Before we dive into what that whole thing is, we need to take a quick aside.

You've actually done a few very key things there, in just a few simple keystrokes:

* Opened the browser's JavaScript **r**ead-**e**val-**p**rint **l**oop or its language "shell"
* Entered an **expression** and pressed enter
* The **expression** was **read** and parsed into a **data structure** in memory
* The **data structure** was **eval**uated
* The result of evaluated data structure was **print**ed

#### Back to Console

##### Its properties

```
Console {memory: MemoryInfo, debug: function, error: function, info: function, log: function…}
```

So what's that? Well, working backward, it's the printed version of the expression `console`, which we had asked our REPL to evaluate by pressing enter. 

Now, the interesting thing there is that the expression evaluated to an `Object`, specifically the `Console` object! The `Console` is a kind of `Object`. More on what "a kind of" means next week.

Let's type `console` again, and press enter. This time, let's press the little arrow to the left of what is printed out. You should see something like this:

```
> console
< ▼ Console {memory: MemoryInfo, debug: function, error: function, info: function, log: function…}
    ▼ memory: 
    	MemoryInfojsHeapSizeLimit: 793000000
    	totalJSHeapSize: 33100000
    	usedJSHeapSize: 23100000
    ► __proto__: MemoryInfo
  ► __proto__: Console
```

We are looking at a few things there: 

* The **instance** of the Console object
* A property called **memory** and that property's properties!

So, we've now discovered some of the `Console` object's **properties**.

Let's try to get one of these property's values.

Type in `console.memory` and press enter. What happens?

##### Its functions

Let's try this in our REPL:

`console.log(console);`

A couple of things here, that are really important to understand:

* We invoked the console object's `log` **function** and passed it an **argument**, the console object!
* The function printed out the same thing we got when we had typed in `console` and pressed enter, and then it  **returned a value**: **`undefined`**.

So if `log` is a function or **behavior** of the `Console` object, are there other functions and behaviors that the `Console` object **exposes**? Yes! Let's try this:

```
for (var prop in console) {
  if (console[prop] instanceof Function) {
    console.log(prop);
  }
}
```

We've just listed all the functions, or, in other words the things we could do with the console, otherwise known as the console's available behaviors.

---

> By knowing the console's properties and what can be done with it, we've learned all (almost all) about the console and what it is - we've practically **grokked** the console and understood its essence. It's not **too** different from describing a marker, a chair, a table, or a rocket engine. We're just using a different language to do it. 
> **- Alex Notov**

---

> “I am all that I grok.” 
> **― Robert A. Heinlein, Stranger in a Strange Land**

---

#### Primitives

Now, let's type in something else into the REPL and press enter:

`console instanceof Object`

Again, we've typed an expression, which we had asked the REPL to evaluate, and then print the result.

This time, the result is `true`.

Let's try something else now:

`true instanceof Object`

The printed result is: `false`.

First, what's `false`? Well, first it's a kind of **value** in JavaScript.
If there's a `false`, there's a `true`. All they mean basically are `no` and `yes`, respectively. There's more nuance to those, but for now that's all we have to worry about.

Second what is `instanceof`? It's an **operator**. In the expression `true instanceof Object`, `true` and `Object` are **operands**.

But, but, but, didn't we say that pretty much everything is an object?! #headdesk #facepalm

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

And finally, this:

```
for (var prop in 42) {
	console.log(prop);
}
```

#### Thus, we've discovered ***primitives***!

This is a bit confusing. They are not actually Objects in the strictest sense of the word. The JavaScript programming language's core **data types** are:

* Primitives: String, Number, Boolean
* Objects (composite or "reference" types)
* null and undefined

Let's play with primitives a bit, to understand them further.

#### Exercise: play with primitives.

Try the following in your console, with your pair groups:

* `1 + 2`
* `"WDI" + " is going to teach me how to be a problem solver"`
* `"I have learned that there are " + 3 + " core data types in JS"`
* `(100).toString()`
* `"2" + 2`

Experiment with expressions not listed above, that are similar to the ones above, and see what happens.