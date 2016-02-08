/**
 * Created by brizarda on 05/02/2016.
 */
import React from 'react'
import {connect} from 'react-redux'

// Same as in ButtonCreator, but we're using ES2015 arrow function
const mapStateToProps = (state) => {
    // If messages exists
    if (state)
        return {
            "messages": state.messageReducer.messages
        }
    else
        return {}
}

class ButtonLogger extends React.Component {
    render() {
        if (this.props && this.props["messages"]) {
            return (
                <div style={{"clear": "both","border-top": "white 1px solid"}}>
                    {this.props.messages.map((message) => {
                        return <p key={message.id}>{message.date.toLocaleString()} - {message.text}</p>
                    })}
                </ div >
            )
        } else {
            return null
        }
    }
}

export default connect(mapStateToProps)(ButtonLogger)