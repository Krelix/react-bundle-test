## Playing with Buttons

This project is mainly an example on how to setup and work with React, React Router and Redux. It uses NodeJS (>= 5.5.0) to build and answer to server requests, and Webpack to build and bundle the app to be delivered to the user's browser.

### How to start

After checkout, just run `npm install` to install the NodeJS Modules. Then, just run `npm start` to start the application. Webpack will bundle the code and you can then access the site at http://localhost:8080/webpack-dev-server/ (`/webpack-dev-server/` enables hot swapping)

### How to fiddle with the code

The file `js/app.js` is the entry point for the application. It is heavily commented to describe as much as possible. The easiest thing to do would be to add a new Component in `js/components/` that renders some text. This is what the `Home` component does, and it is the default page for the application when it is loaded in a browser.
Next step would be to add a link to it in the `navigation` and add it to the routes.

The `ButtonMaker` component is an example of a form with inputs and saving results to the store and how to connect the component with the store instance, how to get the data from the state and save it to the component's props and the actions that the component can apply.

The `ButtonSimulator` is a composite of 2 more components :
  
  * `ButtonArray` lists the button created in `ButtonCreator`, then adds an `onClick` handler to create a message based on the button's properties and save it to the Store.
  * `ButtonLogger` shows all the message in the Store with the date at which they've been added. 

### Dependencies

All dependencies are marked as devDependencies since we bundle everything in a single file (`bundle.js`) and serve a static HTML page.

````json
"devDependencies": {
    "babel-core": "^6.0.0",
    "babel-loader": "^6.2.1",
    "babel-preset-es2015": "^6.3.13",
    "babel-preset-react": "^6.3.13",
    "babel-preset-stage-0": "^6.3.13",
    "history": "^2.0.0",
    "react": "^0.14.7",
    "react-dom": "^0.14.7",
    "react-hot-loader": "^1.3.0",
    "react-redux": "^4.2.1",
    "react-router": "^2.0.0-rc5",
    "redux": "^3.2.1",
    "webpack": "^1.12.12",
    "webpack-dev-server": "^1.14.1"
  }
````

### TODO

Here is a list of additional elements that could be done :

* Use `Immutable.js` to avoid changing the state of the Store
* Use a lot more CSS. This looks rather terrible... (either pure CSS or Stylus ?)
* Add a section to explain a bit more the Webpack and Babel configuration
* More things to do... ?