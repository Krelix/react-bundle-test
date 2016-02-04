/**
 * Created by brizarda on 03/02/2016
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, DefaultRoute, IndexRoute, RouterContext, browserHistory } from 'react-router'
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import Home from './components/Home'
import ButtonCreator from './components/ButtonCreator'
import ButtonSimulator from './components/ButtonSimulator'
import reducers from './reducers'

//const reducer = combineReducers(Object.assign({}, buttonReducers))

const theStore = createStore(reducers)
console.log("Created the store")
console.log(theStore)

class App extends React.Component {
    render() {
        // Return HTML content with links to other parts
        // By default, we are on the "Home" part, which load the Home component
        return (
            <div>
                <div className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/buttonMaker">Button Creator</Link>
                    <Link to="/buttonSimulator">Simulator</Link>
                </div>
                <div id="content">{this.props.children}</div>
            </div>
        )
    }
}

// Create the routes available
// Provides navigation within the app (but no direct access from URL yet)
// Root is / and its default content is the Home component
// Content (props.children) changes if you have a different route to the appropriate component
let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="buttonMaker" component={ButtonCreator}/>
        <Route path="buttonSimulator" component={ButtonSimulator}/>
    </Route>
)

/* Old version of React Router (pre-1.0)
 Router.run(routes, (Handler) => {
 React.render(<Handler/>, document.body)
 })*/

// Render the Router which will handle components rendering depending on the route
ReactDOM.render(
    <Provider store={theStore}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>,

    document.getElementById("app")
)