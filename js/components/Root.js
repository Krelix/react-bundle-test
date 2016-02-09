import React from 'react'
import { Router, RouterContext, useRouterHistory } from 'react-router'
import {createHashHistory} from 'history'
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'
import routes from '../routes.js'

export default class Root extends React.Component {
    render() {
        // Create a store using the reducers defined in ./reducers/index.js
        let theStore = createStore(reducers)
        // Creates a history using the hashHistory element from history
        // allows access to some URLs without setting up server-side rendering
        let appHistory = useRouterHistory(createHashHistory)({queryKey: false});

        console.log("In the render of root~")
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
            </head>
            <body>
            <Provider store={theStore}>
                <Router history={appHistory}>{routes}</Router>
            </Provider>
            </body>
            </html>
        )
    }
}