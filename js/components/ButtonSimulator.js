/**
 * Created by brizarda on 03/02/2016.
 */
import React from 'react'
import ButtonLogger from './ButtonLogger'
import ButtonArray from './ButtonArray'

export default class ButtonSimulator extends React.Component {
    render() {
        let buttonTest = [{id: 1, name: "Click me...", message: "WHY DID YOU DO THIS"}]
        return (
            <div>
                <h1>Simulator</h1>
                <p>Here, we try breaking the buttons we made.</p>
                <ButtonArray />
                <ButtonLogger />
            </div>

        )
    }
}