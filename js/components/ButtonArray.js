/**
 * Created by brizarda on 05/02/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    // If buttons exist
    if (state && state.buttons)
        return {
            "buttons": state.buttons
        }
    else
        return {}
}

class ButtonArray extends React.Component {
    render() {
        // Render different stuff depending on props
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
            // fromCodePoint used to get an emoji in the HTML page
            // Use that for unicode characters (safer than pasting the unicode character in,
            // if your files get changed from UTF-8 to something else
            return (
                <div style={{clear: "both"}}>
                    <p>{'No button to test yet ' + String.fromCodePoint(128545)}</p></div>
            )
        }
    }

    handleButtonClick(index, e) {
        // Get the button from props by using the data-reactid on the target.
        console.log(this.props.buttons[Number(index)].message);
        // TODO: Create a store, add the message to it and re-render the logger to show the message.
    }
}

export default connect(mapStateToProps)(ButtonArray)