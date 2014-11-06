#Introduction to Ruby on Rails

##Prologue

In an office, on a sticker-laden MacBook Pro far far away, a programmer types away. She labors and labors over code, wondering to herself late into the night - "Why can't this be easier? Why can't I be at my stand-up comedy show or flying away in my acro yoga class tonight instead?"

She then happened to accidently Google "Ruby" while looking around for alternative hip engagement rings and stumbled upon the Ruby Docs! After about an hour of bewilderment having no idea how to read them, she almost gave up... until...

##Rails from the Rails People

"Ruby on Rails is an open-source web framework that's optimized for programmer happiness and sustainable productivity.

It lets you write beautiful code by favoring convention over configuration."

####Oh Gravity...

A programmer is only as productive as the speed at which he or she can learn and code in a language. Rails vastly optimizes a developer's productivity by offering a convention to follow, so less thought is necessary. It tells you what to do and how to do it.

##What Rails Includes

Remember all that Node stuff? For each piece of the development puzzle there was yet another module, another thing to remember how to do. Rails however wraps in most of the important functionality right out of the box:
- MVC programming pattern convention
- Templating engine with syntax nearly identical to ejs
- ORM called ActiveRecord which is assured to be much better than Sequelize.
- Support for developing APIs with token authentication, namespacing, and multiple response types.
- A database already wrapped in called SQLite3
- An asset pipeline for managing static assets like stylesheets, javascript files, and images.
- Asset "uglifier" or "minifier".
- SASS support
- CoffeeScript support
- Built-in testing suite called MiniTest.
- Authentication flow with Bcrypt and has_secure_password.
- Development web server called WEBrick.
- EASY PEEZY extension of functionality through community-supported gems.
- Oh and sessions... Yeah that's a big one!

##MVC Pattern Coding

We've already seen some of this already, but Rails takes it to a new level. With Node we saw that view logic was separated from model logic which was separated from "controller" login (aka app.js).

In rails there is a specific convention that separates each of these key concerns to make the application as neat as possible.

####Models
- Models are where data interactions happen.
- You will often see logic related to pulling and saving to databases here.

####Views
- Views are what the users will actually see.
- It is the UI made dynamic through the templating engine.
- Views in Rails are served through layouts.

####Controllers
- Controllers bridge the gap between models and views.
- They take requests and do something with them.
- One controller can have many methods relating to that specific logical concern.

####Routes
- Like Node, routes take HTTP requests from a specific URL and hand them off to a specific controller and a specific method inside that controller.
