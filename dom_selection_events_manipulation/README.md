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