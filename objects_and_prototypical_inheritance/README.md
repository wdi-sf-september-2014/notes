# Objects and Prototypical Inheritance

## Objective: 

Let's build a model of how acceleration works in different vehicles by
making a drag race demonstration that has an SF GoCar, motorcycle, an
Audi S4 and a semi-truck! This won't be a fair race. So, if you want it
to be more fair, you can use vehicles that are a little more comparable.

Trucks, cars, trains, and motorcycles are all *vehicles*. So how can
we create a model of the relationships beteween different kinds of
vehicles, and what does it mean for one vehicle to be different from
another - and, how do those differences affect acceleration?

### First, what affects a vehicle's acceleration from the line? 

Newton's Second Law of Motion
`F = m*a`

The force required to move a vehicle is the product of mass times
acceleration. So if we know the force and the mass, we can get the
acceleration!

What about the force?

Well, different vehicles exert force against the pavement by combining:

The engine's power
The drive ratios (the transmission)
The wheels 

Outside forces on the vehicles are:

Drag
Friction
Weight of the vehicle

Today, we'll pretend like drag and friction don't exist, and we'll just
focus on the properties that propel a vehicle forward.

### Every powered vehicle in our model will have:

#### Properties
* An engine that produces some power
* Mass
* A drag coefficient

#### Behaviors
* A way to start it
* A way to apply power
* A way to stop it

#### Exercise:
In groups, create a `Vehicle` object with object initializer/POJO
notation that has:

* 3 properties above 
* 3 functions that log to the console what state the vehicle is in: 
  * is it started or stopped
  * is it accelerating
