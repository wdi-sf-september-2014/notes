# Advanced Sequelize

## Note: Don't worry, advanced doesn't mean hard.

## Objectives

* Validations
* Associations
* Cleaner callbacks with promises (maybe, but a bit unlikely)

### Validations

__G__arbage __I__n __G__arbage __O__ut

If you let users enter data willy nilly, you'll get a bunch of garbage.

The solution is to validate your data!

#### [Enter Sequelize Validations](https://github.com/chriso/validator.js#validators)

#### Let's add validations to Apartment Lab With Sequelize 

* Alpha validation on manager firstname 

```
  // ... in models/manager.js
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
  // ... in models/manager.js
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

* A manager has many tenants!
```
  // ... in models/manager.js
  classMethods: {
    associate: function(models) {
      // associations can be defined here
      Manager.hasMany(models.Tenant, { foreignKey: 'manager_id' });
    }
  }

  // ... in models/tenant.js
  classMethods: {
    associate: function(models) {
      // associations can be defined here
      Tenant.belongsTo(models.Manager, { foreignKey: 'manager_id'});
    }
  },
  instanceMethods: {
    getFullName: function() {
      return [this.firstname, this.lastname].join(' ');
    }
  }

  // ... in app.js
  app.get("/managers", function(req, res) {
    models.Manager.findAll({
      include: [ models.Tenant ]
    }).then(function(managers) { 
      res.render('index', { 
        managers: managers,
        messages: req.flash('info')
      });
    });
  });

  app.post("/managers/:id/tenants", function(req, res) {
    var managerId = parseInt(req.params.id, 10),
        path = ['/managers/', managerId, '/tenants'].join('');
    models.Manager.find(managerId).then(function(manager){
      manager.addTenant(models.Tenant.build({
        firstname: req.body.firstname,
        lastname: req.body.lastname
      })).then(function(manager) {
        res.redirect(path);
      }, function(error) {
        req.flash('info', error);
        res.redirect(path);
      });
    });
  });


  // ... in index.ejs
  <% if (m.Tenants) { %>
  <tr cols="5">
    <td>
      <h4>Tenants</h4>
      <table class="table table-striped margin-top-20">
        <thead>
          <th>Tenant name</th>
        </thead>
        <tbody>
          <% m.Tenants.forEach(function(t) { %>
          <tr><td><%= t.getFullName() %></td></tr>
          <% }); %>
        </tbody>
      </table>
    </td>
  </tr>
  <% } %>
```
