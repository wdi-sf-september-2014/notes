#More ActiveRecord and Authentication

##Associations

For this section we will be using Elie's notes [here](https://github.com/wdi-sf-fall/notes/tree/master/week_07_rails_continued/day_02_associations_and_auth/dawn_associations).

## Validations

#### Validation methods

for all of these validations you can pass in an error message of - :message => "Something error related" 

- validates_presence_of - attribute must not be blank
- validates_length_of - must have a length of x. Pass in a hash with (:is, :minimum, :maximum, etc.) 
- validates_numericality_of - attribute must be an integer or float (can pass in :equal_to)
- validates_inclusion_of - attribute must be in a list of choices 
- validates_exclusion_of - attribute must be in a list of choices 
- validates_format_of - attribute must match a regular expression (pass in :with)
- validates_uniqueness_of - attribute must be unique
- validates_acceptance_of - makes sure an attribute is accepted (a TOS is agreed)
- validates_confirmation_of - attribute must be confirmed (type in password twice). Rails will only run this if the attribute is set to something
- validates_associated - validates associated objects (validate options in associated relationships)

- can pass in (:on => :save/:create/:update) to specify when to validate
- can also pass in :if => :method / :unless => :method to help with determining when to validate (only check email if user wants to be identified by email)

#### Using validation methods

- Before you even start - think and ask yourself what should I validate?
- Add the validations after your associations in the model
- in rails console you can run s.valid? to see if it's valid and then s.errors to see what's wrong if there is a problem.

#### Validates Method

- shortcut for validations 
- wrap these all up in a hash

```
validates :COL_NAME, 
	presence: true, 
	length: {:maximum => 50}, 
	numericality: false, 
	uniqueness: true
```

#### In-class Validation Example

We set our validations in our app/models/user.rb model.

```
class User < ActiveRecord::Base
  validates_presence_of :first_name
  validates_presence_of :last_name
end
```

or

```
class User < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
end
```

##Authentication

We will be using Elie's notes for this as well, located [here](https://github.com/wdi-sf-fall/notes/tree/master/week_07_rails_continued/day_02_associations_and_auth/dusk_auth).

##Class Lab

For today's lab you will add associations, validations, and authentication to the Chirp lab from last week.