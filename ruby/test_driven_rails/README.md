# Test Driven Rails

## Objectives

### Understand the ideas behind outside-in development
### Build a fully functional rails app, outside-in

## The app:

We're working with Ruby on Rails, so I figured... choo-choo, BART schedule listing app. 

### Functionality

* There are ***Stations***
* A ***Station*** has:
	* a ***name***
	* a ***previous Station***
	* a ***next Station***
	* has many ***Departures***
* A ***Departure***
	* has a ***train line*** (for example: Richmond, Millbrae, etc)
	* has a ***time***

* The home page should list the next 4 departures, for each station
* Departures should be grouped by station
* Full crud for each model

## Quick rampup:

### Initialize a rails app, with postgres, and without a test framework
```
$ rails new bart_schedules -T --database=postgresql
```

```
$ cd bart_schedules
```

#### Don't forget git!!!

```
$ git init
```

### Configure your db

In `config/database.yml`:

* Remove `username` and `password` entries
* Add `host: 127.0.0.1`

### Add gems to Gemfile:

```ruby
# bootstrap
gem 'twitter-bootstrap-rails'
# better, cleaner forms
gem 'simple-form'

group :test, :development do
  # rspec for rails
  gem 'rspec-rails'
  # fill stuff in in forms and stuff
  gem 'capybara'
  # open a page after a test
  gem 'launchy'
  # will let us run tests automatically
  gem 'guard-rspec'
  # notifications
  gem 'rb-fsevent' if `uname` =~ /Darwin/
end

group :test do
  # make reusable model factories for your tests
  gem 'factory_girl_rails'
  # all sorts of great matchers for rspec
  gem ‘shoulda-matchers’
end

group :development do
  # just awesome-looking errors
  gem 'better_errors'
  # let's be able to debug with pry in rails
  gem 'pry-rails'
  # omg. this is better than butter on sliced bread.
  gem 'pry-byebug'
end
```

Then, don't forget to:

```
$ bundle install
```

### Create your db

```
$ rake db:create
```

### Configuration

Configure rspec
```
$ rails g rspec:install
```

Configure boostrap
```
$ rails g bootstrap:install static
```

Modify `spec/spec_helper.rb`
```
require 'capybara/rails'
require 'capybara/rspec'
require 'rspec/rails'
require 'shoulda/matchers'
config.include FactoryGirl::Syntax::Methods
```

Initialize guard
```
$ guard init
```

Create a file called `spec/support/factories.rb`

### Keep using git!

Get into this habit, now

```
$ git add . && git commit
```

### For keeping your test db in sync:

```
$ rake db:test:prepare
```