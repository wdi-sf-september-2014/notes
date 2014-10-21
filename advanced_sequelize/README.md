# Advanced Sequelize

## Note: Don't worry, advanced doesn't mean hard.

## Objectives

* Validations
* Associations
* Cleaner callbacks with promises

### Validations

_G_arbage
_I_n
_G_arbage
_O_ut

If you let users enter data willy nilly, you'll get a bunch of garbage.

The solution is to validate your data!

#### [Enter Sequelize Validations](https://github.com/chriso/validator.js#validators)

#### Let's add validations to Apartment Lab With Sequelize 

* Alpha validation on manager firstname 

```
  // ... in manager.js
  firstname: {
    type: DataTypes.STRING,
    validate: {
      isAlpha: {
        msg: 'Your first name cannot have anything except letters'
      }
    }
  }
```

* Alpha validation on manager lastname
```
  // ... in manager.js
  lastname: {
    type: DataTypes.STRING,
    validate: {
      isAlpha: {
        msg: 'Your last name cannot have anything except letters'
      }
    }
  }
```

#### Let's display those messages

`npm i --save cookie-session`
`npm i --save connect-flash`

#### Your turn: 

* Add the same validation on Tenant
* Add a field called `email` to the Manager model
  * Think about another step that you'll have to make
  * [Hint](http://sequelizejs.com/docs/1.7.8/migrations#functions-addcolumn)
* Add unique validation on `email` (figure out what you have to do, it's
  not quite validation)
  * [Hint](http://sequelizejs.com/docs/1.7.8/models#definition)
* Add `isEmail` validation on email

### Associations


