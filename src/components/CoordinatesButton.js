// Code CoordinatesButton Component Here
import React, { Component } from 'react'
//onReceiveCoordinates
export default class CoordinatesButton extends Component {
    handleClick = (event) => {
        let spotMarker = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(spotMarker)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Where I'm at</button>
            </div>
        )
    }
}