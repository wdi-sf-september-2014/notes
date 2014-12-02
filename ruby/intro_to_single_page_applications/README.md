#Single-Page Applications With JS

Today we will be working on a single page application that uses the API we built with Rails. We will use JavaScript to handle the user interactions, which will then be served by the API service.

##API Application Endpoints

###Purchases

Get all purchases

`GET /purchases`

Get one purchase

`GET /purchases/:id`

###Products

Get all products

`GET /products`

Get one product

`GET /products/:id`

Create a new product

`POST /products`

Update a product

`PUT/PATCH /products/:id`

Delete a product

`DELETE /products/:id`

##Single Page App Requirements
- You can choose to use your app on localhost as the API, or the Heroku app here: https://ga-wdi-products-inventory-api.herokuapp.com/
- App should use jQuery to handle user input (form submissions, button clicks, etc.).
- App should use jQuery to perform AJAX calls to your web service.
- UI should be intuitive, and use Bootstrap or Foundation.
- All views should be in the same document, swapped in and out from the DOM via jQuery and "compiled" with Handlebars.
- A sample and very general flow could be something like this:

index.html

```
<div id="content"></div>

<script type="x-handlebars-template" id="products-template">
	<!--Content here-->
</script>
```

app.js

```
//AJAX call to web service

//Compile Handlebars template

//Place finished HTML into the container
```

##Further Thinking
- What are some of the downsides of writing applications like this?
- What is missing functionality-wise?
- Why are single page applications all the rage?
- What are some of the advantages that single page applications have over traditional apps?

