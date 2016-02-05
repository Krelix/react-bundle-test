/**
 * Created by brizarda on 05/02/2016.
 */
import React from 'react'

export default class ButtonLogger extends React.Component {
    render() {
        if (this.props && this.props["messages"]) {
            return (
                <div>
                    <hr />
                    {this.props.messages.map((message) => {
                        return <p>{message}</p>
                    })}
                </ div >
            )
        } else {
            return null
        }
    }
}

