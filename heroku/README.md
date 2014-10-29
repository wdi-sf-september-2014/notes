# Heroku - an intro

Heroku is a push button deployment platform for your apps. It supports
many languages. Initially, you'll use it to deploy your NodeJS apps.

After you've configured your app for heroku, you will push code to 
heroku the same way you push code to github, by using `git push`.

## Pre-requisites

* [Heroku Account](https://signup.heroku.com/dc)
* [Heroku Toolbelt](https://devcenter.heroku.com/toolbelt-downloads/osx)

After you have set up your heroku account, and installed the toolbelt,
run this command in your application's directory:

```
$ heroku login
```

You'll be asked to create a public `ssh` key while logging in.

The key is used to authenticate you to heroku's git servers without
having you log in every time.

## Steps

1. [Set up a Procfile](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile)
2. Set up a `Procfile_dev` that contains `web: nodemon app.js` instead of `web: node app.js`
3. [Provision the database](https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database)
4. Update your `config/config.json`, by following [these instructions](http://sequelizejs.com/articles/heroku#migrations).
5. [Deploy the app](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)
6. Scale to 1 web process by running `heroku ps:scale web=1`
7. Run `heroku config:set NODE_ENV=production` to let sequelize know
   which configuration to use for connecting to your db on heroku.
6. Migrate the db on heroku by running `heroku run sequelize db:migrate`
7. [View the logs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#view-logs)
8. Going forward, run the app locally with:

```
$ foreman start -f Procfile_dev
```

## Additional reading

* [Scaling to more web dynos](https://devcenter.heroku.com/articles/getting-started-with-nodejs#scale-the-app)
* [Config vars](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-config-vars)
