import React from 'react'

export default class App extends React.Component {
    render() {
        // Return HTML content with links to other parts
        // By default, we are on the "Home" part, which load the Home component
        return (
            <div>
                <div className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/buttonMaker">Button Creator</Link>
                    <Link to="/buttonSimulator">Simulator</Link>
                </div>
                <div id="content">{this.props.children}</div>
            </div>
        )
    }
}