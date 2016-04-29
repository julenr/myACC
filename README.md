#AngularJS-ES6 starter Repo

This repo serves as a minimal starter to get a SPA up-and-running with Angular 1.5 and ES6 (ES2015) transpiled with Babel, using Webpack for the build process. It's a minimal starter with tasks for building the boilerplate.

##These are its features:

* The best practice in directory/file organization for Angular (allowing for infinite horizontal app scaling)
* A ready-to-go build system for working with ES6 by means of Webpack module bundler
* Webpack developer server to serve statics files, monitoring changes and automaticaly refreshing the UI
* AngularJS JavaScript framework v1.5
* npm dependency manager
* JavaScript linting through ESLint
* Directions for creating additional Angular components
* A full testing system in place (Karma, Mocha, Chai and PhantomJS headless browser)
* Less CSS pre-processor style support
* Bootstrap 3 CSS framework
* Jade template engine


##Table of Contents

* Walkthrough
* Build System
* File Structure
* Testing setup
* Getting Started
* ​Dependencies
* Installing
* Running the App
* Testing


##Walkthrough

##Build System

This build system uses npm and Webpack together for its build system. Yes, you don't need grunt if you're using Webpack.

Webpack handles all file-related concerns:

* Transpiling from ES6 to ES5 with Babel
* Loading HTML files as modules
* Transpiling stylesheets and appending them to the DOM
* Refreshing the browser and rebuilding on file changes
* Bundling the app
* Loading all modules
* Doing all of the above for *.test.js files as well

 npm is the orchestrator:

* Starting and calling Webpack to run the different process to start the server or build the production
* Starting a development server (yes, Webpack can do this too)

## File Structure

This is organized following a componentized and modularized approach. This will be the eventual standard (and particularly helpful, if using Angular's new router) as well as a great way to ensure a tasteful transition to Angular 2, when the time is ripe. Everything--or mostly everything, as we'll explore (below)--is a component. A component is a self-contained concern--may it be a feature or strictly-defined, ever-present element of the UI (such as a header, sidebar, or footer). Also characteristic of a component is that it harnesses its own stylesheets, templates, controllers, routes, services, and specs. This encapsulation allows us the comfort of isolation and structural locality. Here's how it looks:

client
⋅⋅angular/
⋅⋅⋅⋅index.js * app entry file
⋅⋅⋅⋅index.config.js * app configuration file (main route goes here)
⋅⋅⋅⋅assets/ * images, fonts and any other files required
⋅⋅⋅⋅components/ * where components live
⋅⋅⋅⋅⋅⋅app/ * main component
⋅⋅⋅⋅⋅⋅⋅⋅index.js * entry file. Declarations occur here
⋅⋅⋅⋅⋅⋅⋅⋅app.routes.js * routes and configurations
⋅⋅⋅⋅⋅⋅⋅⋅app.controller.js * app controller
⋅⋅⋅⋅⋅⋅⋅⋅app.style.less * app styles (it could also be a css file)
⋅⋅⋅⋅⋅⋅⋅⋅app.template.html * app template (it could also be a jade file)
⋅⋅⋅⋅⋅⋅⋅⋅app.test.js * app unit tests (for template, component and controller)
⋅⋅⋅⋅⋅⋅section/ * component example (it follows the same structure as the app component)
⋅⋅⋅⋅⋅⋅navbar/ * header menu component (built on Bootstrap NavBar, it follows the same structure as the app component)
⋅⋅⋅⋅services/ * here are the common shared services for the whole application (it follows the same structure as the app component)
⋅⋅⋅⋅styles/ * all the common shared styles
⋅⋅⋅⋅build/ * this folder is generated by Webpack comprising all the files needed for production
⋅⋅⋅⋅node_modules/ * npm modules
⋅⋅⋅⋅templates/ * html templates for the different Webpack building processes
⋅⋅⋅⋅WEB-INF/ * assets to run the application in a Java environment
.babelrc * Babel configuration file
.csslintrc * CSS lint configuration file
.eslintrc * ESLint configuration file
.eslintignore * ESLint ignore configuration file
.gitignore * git ignore configuration file
karma.conf.js * karma test runner configuration file
package.json * npm application configuration file
README.md * this file
webpack.config.js * Webpack configuration file



##Testing Setup

All tests are also written in ES6. We use Webpack to take care of the logistics of getting those files to run in the various browsers (currently configured for PhantomJS), just like with our client files. This is our testing stack:

* Karma
* Webpack + Babel
* Mocha
* Chai
* PhantomJS

To run tests, type npm test in the terminal.

#Getting Started

##Dependencies

Tools needed to run this app:
* node and npm Once you have these, install the following as globals:
npm install -g karma karma-cli webpack

##Installing
* clone this repo
* npm install -g karma karma-cli webpack install global cli dependencies
* npm install to install dependencies


##Running the App
Npm uses Webpack to build and launch the development environment. After you have installed all dependencies, you may run the app.

* npm start will bundle the app in memory with webpack, launch a development server, and watch all files. The port will be displayed in the terminal.
* npm run build  will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into build/. It also prepares index.html to be used as application entry point, links assets, generates source maps and manifest files and created dist version of our application.

##Testing

To run the tests, run npm test

Karma combined with Webpack runs all files matching *.test.js inside the angular folder. This allows us to keep test files local to the component--which keeps us in good faith with continuing to build our app modularly.

Be sure to define your *.test.js files within their corresponding component directory. You must name the spec file like so,[name].test.js. Mocha is the testing suite and Chai is the assertion library. If you would like to change this, see karma.conf.js.

If you want to connect to your local backend server make sure it is hosting on
http://localhost:8090/api/invoicing/
The back end service has been configured to allow CORS support.

