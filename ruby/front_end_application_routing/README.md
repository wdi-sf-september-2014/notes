#Application Routing

##What is a Router?
- A router for the front end is essentially the same concept as a backend router - you do something, whether it's rendering a page, sending some data as JSON, etc. when a route is triggered.
- Single page apps use routers to change the page state without reloading the page.
- Typical front-end routers will use the location hash that is part of the URL: `example.com#my-route`
- JavaScript has a built-in event called `hashchange` that is typically used to detect a new route.

##Hashchange

You can read more about the `hashchange` event [here](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers.onhashchange). It is an event that is part of the `window` object.

```
$(window).on("hashchange", function() {
	console.log(location.hash);
});
```

##Backbone.Router.extend()
- Backbone JS is a front-end, JavaScript MVC framework that is meant to organize your code and make it more maintainable for single page applications.
- The Backbone router allows us to have multiple app states in the same document.
- We can also pass parameters through the hash route with similar syntax to Rails.

```
var Router = Backbone.Router.extend({
	routes: {
		"products":"products",
		"products/:id":"show_product"
	}
});

var router = new Router;

router.on("route:products", function() {
	//Use AJAX to load products and compile template
});

router.on("route:show_product", function(id){
	//Use id to make AJAX call and compile template
});

Backbone.history.start();
```

##In-Class Lab
- Use the Backbone router to add routing to your products SPA.
- A great resource to read about Backbone routing can be found [here](http://backbonetutorials.com/what-is-a-router/).

##Homework
- Use the wine API located here: http://daretodiscover.net/wine to build a SPA with routing.
- App must use Backbone router to change state.