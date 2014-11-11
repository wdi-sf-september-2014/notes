# Forms, Basic Routing, and Resource-based Routing

## Things to watch/read *the evening before* this lesson

### Review
* [ActiveRecord Basics](http://guides.rubyonrails.org/active_record_basics.html)
* [ActiveRecord Associations](http://guides.rubyonrails.org/association_basics.html)
* [ActiveRecord Query Interface](http://guides.rubyonrails.org/active_record_querying.html)

### Required
* [Rails Routing from the Outside In](http://guides.rubyonrails.org/routing.html)
* [Thoughtbot: Testing From the Outside-In](http://robots.thoughtbot.com/testing-from-the-outsidein)
* [Thoughtbot: How We Test Rails Applications](http://robots.thoughtbot.com/how-we-test-rails-applications)
* [Thoughtbot: Acceptance Tests at a Single Level of Abstraction](http://robots.thoughtbot.com/acceptance-tests-at-a-single-level-of-abstraction)
* [Railscast: simple_form](http://media.railscasts.com/assets/subscriptions/BaxxizHxJgKUWmuXNr17EA/videos/234-simple-form-revised.mp4)
* Review the code in [bart schedules app](https://github.com/wdi-sf-september-2014/bart_schedules)

### Encouraged
* [Retrieving multiple objects](http://guides.rubyonrails.org/active_record_querying.html#retrieving-multiple-objects)
* [Retrieving multiple objects in batches](http://guides.rubyonrails.org/active_record_querying.html#retrieving-multiple-objects-in-batches)
	* Then: [RubyRogues Podcast: ActiveRecord CRUD](http://devchat.tv/ruby-rogues/173-rr-activerecord-crud)
* [Katrina Owen: Therapeutic Refactoring](http://confreaks.com/videos/1071-cascadiaruby2012-therapeutic-refactoring)

## Objectives
* Understand more rails TDD with Rspec
* Implement some more forms with [simple_form](https://github.com/plataformatec/simple_form)
* Understand routing
* Understand `resources` routing

## The day's ongoing exercise
* Add Departures to [bart schedules app](https://github.com/wdi-sf-september-2014/bart_schedules) - test driven of course
	* Note: it's a 1-M relationship (Station has many Departures)
* Implement the rest of the requirements of the app

## Homework

Thinking about the relationship between Stations and Departures differently

* Implement an M-M relationship between Stations and Departures