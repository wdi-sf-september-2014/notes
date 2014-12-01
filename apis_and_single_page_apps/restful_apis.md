# Building a RESTful JSON API

## Read/watch before class

### *Absolutely* Required
#### [HTTP Request Anatomy](https://www.youtube.com/watch?v=DvQp7hJk0TA)
#### [What is REST](https://www.youtube.com/watch?v=e6h87rzeGJE)

### For the next two, please complete the associated challenges at home!
#### [Surviving APIs with Rails Level 1](http://railsapis.codeschool.com/levels/1/challenges/1)
#### [Surviving APIs with Rails Level 2](http://railsapis.codeschool.com/levels/2/challenges/1)

## Objectives

### Morning
* Understand REST more deeply
* Learn and discuss the vocabulary and tooling for building a basic RESTful JSON API with Rails

### Afternoon
* Build a RESTful JSON API with Rails

## A review of REST

### Why does REST exist?

#### Creating a standardized interface between systems
#### Creating a simple way to represent data

### What is it?

#### Set of rules about *representing* data between clients and servers
#### Stateless
#### Cacheable
#### Multi-layered
#### Uniform interface

## Learning about building an API in Rails

### Notes:
```
# Identify and write down questions you have as a group
# Make sure to identify any discovered vocabulary for discussion
# We will be discussing your questions and discovered vocabulary as a class
```

### In pairs, watch for 10 minutes [Surviving APIs with Rails Level 3](http://railsapis.codeschool.com/levels/3/challenges/1)
### Complete the challenge in 20 minutes
### Take a 5 minute break
### In pairs, watch for 10 minutes [Surviving APIs with Rails Level 4](http://railsapis.codeschool.com/levels/4/challenges/1)
### Complete the challenge in 20 minutes
### Take a 5 minute break
### In pairs, watch for 10 minutes [Surviving APIs with Rails Level 5](http://railsapis.codeschool.com/levels/5/challenges/1)
### Complete the challenge in 20 minutes

## Homework

Build a JSON RESTful API for a products inventory application. 

### Requirements
* When returning any **Product**, the API should return the number of items remaining in the inventory.

* The number of remaining items in the inventory for a specific **Product** should be changeable via its PATCH endpoint.

* When returning a **Purchase**, the API should also return that **Purchase** object's related **Product** objects.

* **Purchase** objects may not be created/edited/or deleted via the API.

Please be creative and think about what other attributes might be good on the **Product** and **Purchase** model.

### Bonus (encouraged if you finish the above)

Add a **Buyer** endpoint. A **Purchase** should have one **Buyer**. If you create this endpoint, any returned **Purchase** should also list its associated buyer.

### Required Endpoints:
```
       Prefix Verb   URI Pattern                   Controller#Action
    purchases GET    /purchases(.:format)          purchases#index
     purchase GET    /purchases/:id(.:format)      purchases#show
     products GET    /products(.:format)           products#index
              POST   /products(.:format)           products#create
      product GET    /products/:id(.:format)       products#show
              PATCH  /products/:id(.:format)       products#update
              PUT    /products/:id(.:format)       products#update
              DELETE /products/:id(.:format)       products#destroy   
```

