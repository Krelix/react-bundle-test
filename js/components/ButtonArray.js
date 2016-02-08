/**
 * Created by brizarda on 05/02/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import * as messageActions from '../actions/MessageActions'

// Same as in ButtonCreator, but we're using ES2015 arrow function
const mapStateToProps = (state) => {
    // If buttons exist
    if (state)
        return {
            "buttons": state.buttonReducer.buttons
        }
    else
        return {"buttons": []}
}

// Map dispatch to actions to impact messages and not buttons
const mapDispatchToProps = (dispatch) => {
    "use strict";
    return {actions: bindActionCreators(messageActions, dispatch)}
}

class ButtonArray extends React.Component {
    render() {
        // Render different stuff depending on props
        if (this.props && this.props.buttons) {
            return (
                <div style={{display: "flex"}}>
                    { this.props.buttons.map((button) => {
                        return (<div className="button" key={button.id}
                                     onClick={this.handleButtonClick.bind(this, button.id)}>{button.name}</div> )
                    })}
                </div>
            )
        } else {
            // fromCodePoint used to get an emoji in the HTML page (because why not)
            // Use that for unicode characters (safer than pasting the unicode character in,
            // if your files get changed from UTF-8 to something else it'll render a weird character)
            return (
                <div style={{clear: "both"}}>
                    <p>{'No button to test yet ' + String.fromCodePoint(128545)}</p></div>
            )
        }
    }

    // Passing the index from the onClick even, with the 'bind' function
    handleButtonClick(index, e) {
        this.props.actions.addMessage(this.props.buttons[Number(index)].message);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonArray)