// Code DelayedButton Component Here
import React, { Component } from 'react'
//onDelayedClick
//delay

export default class DelayedButton extends Component {
    click = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.click}>Where I will be</button>
            </div>
        )
    }
}