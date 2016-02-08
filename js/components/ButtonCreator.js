/**
 * Created by brizarda on 03/02/2016.
 */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as buttonActions from '../actions/ButtonActions'

// Method used to map the state stores in the store to the props of the component
function mapStateToProps(state) {
    // using combineReducers from react-redux means the state will contain data
    // split based on reducer names
    return {
        "buttons": state.buttonReducer.buttons
    }
}

// Binds methods from imported action to updates on the store
// It basically calls dispatch to store with a callback to the given method from the actions
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(buttonActions, dispatch)}
}

class ButtonCreator extends React.Component {
    constructor(props) {
        super(props)
        // Bind methods to "this" context to avoid an undefined "this"
        this._checkForm = this._checkForm.bind(this)
        this._changedInput = this._changedInput.bind(this)
        // Define an initial state on creation
        this.state = {
            "buttonName": '',
            "buttonMessage": ''
        }
    }

    render() {
        // Render our component. Here it's a bit of a mess, since we have a form and the list resulting from the created
        // things. It could be refactored into 2 components with a connection to the store
        return (
            <div>
                <h1>Button Creator</h1>
                <p>This is where we make buttons for the Internet.</p>
                <form onSubmit={this._checkForm}>
                    <label htmlFor="buttonName">Button Name : </label>
                    <input placeholder="Enter your button name"
                           type="text"
                           name="buttonName"
                           ref="buttonName"
                           onChange={this._changedInput}/>
                    <br />
                    <label htmlFor="buttonMessage">Button Message : </label>
                    <input placeholder="Enter the message"
                           name="buttonMessage"
                           type="text"
                           ref="buttonMessage"
                           onChange={this._changedInput}/>
                    <br />
                    <input type="submit" onClick={this._checkForm} value="Make me a button !"/>
                </form>
                <br />
                <div>
                    {
                        this.props.buttons.map((button) => {
                            // Loop on list of buttons to show them
                            return (
                                <div className="button" key={button.id}><h5>{button.name}</h5><p>{button.message}</p>
                                </div> )
                        })
                    }
                </div>
            </div>
        )
    }

    // Method used on submit of the form
    _checkForm(e) {
        // Prevent normal browser behavior (which is to follow the action attribute...)
        e.preventDefault();
        // get the data from the form...
        let myKey = this.refs["buttonName"].value,
            myMessage = this.refs["buttonMessage"].value;
        // Call the "createButton" method passed in props (see the 'export' at the bottom of the file')
        // This is pretty much a call to Store.dispatch(createButton(myKey, myMessage))
        // That way, we call our action with some data and the dispatch call is gonna persist it in the store
        this.props.actions.createButton(myKey, myMessage);
        // Reset the values for buttonName and ButtonMessage (but not the rest of the state)
        /*this.setState((state) => {
            return Object.assign({}, state, {"buttonName": "", "buttonMessage": ""})
         })*/
    }

    // Method used to save the values of the buttonName and buttonMessage in the state (obsolete ?)
    _changedInput(e) {
        let newVal = e.target.value,
            key = e.target.name;
        // Update state and return it with the new value for the given key
        this.setState((state) => {
            //state = state || {}
                state[key] = newVal
                return state
            }
        )
    }
}

// Prop Types...
ButtonCreator.propTypes = {buttons: React.PropTypes.array};
// Default props for the component, since they're not defined by parent component
ButtonCreator.defaultProps = {buttons: []};

// Here, we don't export the actual class but a container encapsulating the class
// That container will have a reference to the store.
// We provide a way for it to map the data from the store to the ButtonCreator's props and the methods that will
// need to be dispatched to the store.
// Finally, we call it again, by passing it the class to be contained.
export default connect(mapStateToProps, mapDispatchToProps)(ButtonCreator)