/**
 * Created by brizarda on 03/02/2016.
 */
import React from 'react'

export default class ButtonCreator extends React.Component {
    constructor(props) {
        super(props)
        this._checkForm = this._checkForm.bind(this)
        this._changedInput = this._changedInput.bind(this)
        this.state = {
            buttonName: "",
            buttonMessage: "",
            buttons: []
        }
    }

    render() {
        return (
            <div>
                <h1>Button Creator</h1>
                <p>This is where we make buttons for the Internet.</p>
                <form>
                    <label htmlFor="buttonName">Button Name : </label>
                    <input placeholder="Enter your button name"
                           value={this.state.buttonName} type="text"
                           name="buttonName"
                           onChange={this._changedInput}/>
                    <br />
                    <label htmlFor="buttonMessage">Button Message : </label>
                    <input placeholder="Enter the message"
                           value={this.state.buttonMessage}
                           type="text" name="buttonMessage"
                           onChange={this._changedInput}/>
                    <br />
                    <input type="submit" onClick={this._checkForm} value="Make me a button !"/>
                </form>
                <br />
                <div>
                    {this.state.buttons.map((button) => {
                        return (<div className="button" key={button.name}>{button.message}</div> )
                    })}
                </div>
            </div>
        )
    }

    _checkForm(e) {
        e.preventDefault();
        console.log("Calling the submit method...")
        console.log(e)
        console.log(this.state)
        // TODO: Save data into a store to use when navigating
        this.setState((state) => {
            let myKey = state["buttonName"],
                myMessage = state["buttonMessage"]
            return {
                "buttons": state["buttons"].concat([{name: myKey, message: myMessage}]),
                "buttonName": "",
                "buttonMessage": ""
            }
        })
    }

    _changedInput(e) {
        let newVal = e.target.value,
            key = e.target.name;
        this.setState((state) => {
                state = state || {}
                state[key] = newVal
                return state
            }
        )
    }
}