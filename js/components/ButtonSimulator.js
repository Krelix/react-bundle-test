/**
 * Created by brizarda on 03/02/2016.
 */
import React from 'react'

// TODO: Split into multiple files...
class ButtonArray extends React.Component {
    constructor(props) {
        super(props)
        //this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    render() {
        if (this.props && this.props["buttons"]) {
            return (
                <div>
                    { this.props.buttons.map((button) => {
                        return (<div className="button" key={button.id}
                                     onClick={this.handleButtonClick.bind(this, button.id)}>{button.name}</div> )
                    })}
                </div>
            )
        } else {
            return null
        }
    }

    handleButtonClick(index, e) {
        // Get the button from props by using the data-reactid on the target.
        alert(this.props.buttons[Number(index) - 1].message);
        // TODO: Create a store, add the message to it and re-render the logger to show the message.
    }
}

class ButtonLogger extends React.Component {
    render() {
        if (this.props && this.props["messages"]) {
            return (
                <div>
                    {this.props.messages.map((message) => {
                        return <p>{message}</p>
                    })}
                </ div >
            )
        } else {
            return (
                <div style={{clear: "both"}}>
                    <hr />
                    <p>No button to test &#128545;</p></div>
            )
        }
    }
}

export default class ButtonSimulator extends React.Component {
    render() {
        let buttonTest = [{id: 1, name: "Click me...", message: "WHY DID YOU DO THIS"}]
        return (
            <div>
                <h1>Simulator</h1>
                <p>Here, we try breaking the buttons we made.</p>
                <hr />
                <ButtonArray buttons={buttonTest}/>
                <ButtonLogger />
            </div>

        )
    }
}