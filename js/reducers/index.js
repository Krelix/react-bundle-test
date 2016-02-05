/**
 * Created by brizarda on 04/02/2016.
 */
import {combineReducers} from 'redux'
import buttonReducer from './ButtonReducer'
import messageReducer from './MessageReducer'

/* Uncomment this when you want to combine multiple reducers to export */
const appReducers = combineReducers({
    buttonReducer,
    messageReducer
 })

// Single reducer case
//const appReducers = buttonReducer

export default appReducers