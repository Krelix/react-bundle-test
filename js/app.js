/**
 * Created by @krelix on 03/02/2016
 */
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Router, RouterContext, Link, useRouterHistory } from 'react-router'
import {createHashHistory} from 'history'
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import Home from './components/Home'
import ButtonCreator from './components/ButtonCreator'
import ButtonSimulator from './components/ButtonSimulator'
import reducers from './reducers'
import routes from './routes.js'

// Require the Stylus file so it can be processed by webpack when building.
require('../css/stylus/main.styl')

// Create a store using the reducers defined in ./reducers/index.js
const theStore = createStore(reducers)
// Creates a history using the hashHistory element from history
// allows access to some URLs without setting up server-side rendering
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

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

// TODO: Enable static pages creation by using a variable to distinguish between ReactDOM red

// Render the Router which will handle components rendering depending on the route
// NOTE: Use browserHistory if you don't want to see the hash sign in the URL
ReactDOM.render(
    <Provider store={theStore}>
        <Router history={appHistory}>{routes}</Router>
    </Provider>,
    document.getElementById("app")
)