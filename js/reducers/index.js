/**
 * Created by brizarda on 04/02/2016.
 */
import {combineReducers} from 'redux'
import buttonReducer from './ButtonReducer'

/* Uncomment this when you want to combine multiple reducers to export */
/*const appReucers = combineReducers({
 buttonReducer
 //, other reducers
 })*/

const appReducers = buttonReducer

export default appReducers