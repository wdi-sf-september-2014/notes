#DOM Events in JavaScript

In order to make web pages more interactive, events are necessary to trigger actions on certain elements. A button click, mouse over, and tap are examples.

##Selecting Elements

- In order to bind events to DOM elements, you need to select the elements first.
- The most common specific JS selector is `getElementById`.

`document.getElementById("myDiv")`

`<div id="myDiv"></div>`

- You can also search via a class name.

`document.getElementsByClassName("myDivs")`

`<div class="myDivs"></div>`

- You can search via tag name. This is very unspecific.

`document.getElementsByTagName("div")`

- You can use CSS selectors just like you would in a stylesheet to select elements.

`document.querySelector("div#myDiv")`

`document.querySelectorAll("div.myDivs")`

##Attaching Events

- Common Events:
	- change
	- click
	- mouseover
	- mouseout
	- keydown
	- keyup

#####"Shortcut" Method

```
document.getElementById("myDiv").onchange = function() { };

document.getElementById("myDiv").onclick = function() { };

document.getElementById("myDiv").onmouseover = function() { };
```

#####addEventListener

```
document.getElementById("myDiv").addEventListener("click", function() {
	//Your code here
}
```

- Events can only be attached to specific elements. Therefore, when you return a collection such as the result of `document.querySelectorAll` you CANNOT simply do this:

```
document.querySelectorAll(".paragraph").addEventListener("click", function() {
	alert("Click worked");
}
```

- We would need to loop through each element returned and attach a click handler:

```
var paragraphs = document.querySelectorAll(".paragraph");

for (var i = 0; i < paragraphs.length; i++) {
	paragraphs[i].addEventListener("click", function() {
		alert("Click worked");
	}
}
```

##Exercise 1

- Clone [this repo](ex_1/).
- Create your own app.js file and link it to the document using the `script` tag.
- Attach a click event to each paragraph, with an alert that pops up when clicked.
- Attach the same click handler to the entire nav. Hint: Use `getElementsByTagName`.
- Create a click handler for each footer link, and hijack the default action to make it show an alert rather than Google.com.