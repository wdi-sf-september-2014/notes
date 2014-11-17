#AJAX and Handlebars Templating

##Learning Objectives
- Make appropriate API calls using jQuery and AJAX.
- Identify proper uses of front-end templating.
- Properly apply Handlebars framework to create templates from JSON data.

##Setup
- Download the [Handlebars library](http://handlebarsjs.com/).
- Download [JSONView Chrome plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en).

##AJAX Refresher
- For today's lesson we will be using jQuery to handle the AJAX calls.
- AJAX is a way to send and receive data from the server asynchronously from the page load.
- The syntax for jQuery AJAX is as follows:

```
$.ajax({
	url: "YOUR ENDPOINT HERE",
	type: "GET",
	success: function(data) { },
	error: function(jqXHR, textStatus, errorThrown) { }
});
```

##Handlebars JS
- Handlebars is a front-end templating framework.
- Think of EJS or ERB, for the front end.
- Basically, you will need a templating framework any time you have a collection of data and you want to display it in some specified way.
- Handlebars is really good at taking JSON data and displaying it.

##How to Use Handlebars
- Handlebars templates are handled through `<script>` tags, which allow them to be ignored while rendering the page:

```
<script id="my-template" type="text/x-handlebars-template">
```

- You can write any normal HTML here, but you can also write Handlebars-specific code:

```
<script id="my-template" type="text/x-handlebars-template">
	<div class="entry">
		<h1>{{title}}</h1>
		<div class="body">
			{{body}}
		</div>
	</div>
</script>
```

- The curly code is essentially keys to a JSON object.
- If you need to, you can also loop through an array of JSON objects to produce very dynamic templates. You will do this today. Here is an example from the docs on how this can be done through helpers:

```
<h1>Comments</h1>

<div id="comments">
	{{#each comments}}
		<h2><a href="/posts/{{id}}">{{title}}</a></h2>
		<div>{{body}}</div>
	{{/each}}
</div>
```

- This example assumes that `comments` is an array of JSON objects.

- Before a template is used however, it must be first "compiled":

```
var source   = $("#my-template").html();
var template = Handlebars.compile(source);
```

- The function `Handlebars.compile` returns a function that can be passed JSON data as an argument.
- This resulting function returns HTML after the JSON data is processed into it.
- You can then apply your template anywhere you need to:

```
var jsonData = {
	title: "My New Post",
	body: "This is my first post!"
};

var template_html = template(jsonData);
$("#some-div").html(template_html);
```

##In-Class Lab
- Make a GET request out to `http://daretodiscover.net/user` to retrieve user data.
- Use Handlebars to create a simple template for each JSON object returned.

##Homework
- Make a GET request to `http://daretodiscover.net/wine` to retrieve information about various wines.
- Use Handlebars to create a template to display a list of the wines.
- Bonus: Use Bootstrap and make it look pretty.
- Bonus 2: Use [Zurb Foundation](http://foundation.zurb.com/), another amazing front end framework, instead of Bootstrap.