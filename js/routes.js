/**
 * Created by brizarda on 09/02/2016.
 */
import {Route, IndexRoute} from 'react-router'

import Home from './components/Home'
import ButtonCreator from './components/ButtonCreator'
import ButtonSimulator from './components/ButtonSimulator'
import App from './components/App'

// Create the routes available
// Provides navigation within the app (but no direct access from URL yet)
// Root is / and its default content is the Home component
// Content (props.children) changes if you have a different route to the appropriate component
export default routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="buttonMaker" component={ButtonCreator}/>
        <Route path="buttonSimulator" component={ButtonSimulator}/>
    </Route>
)