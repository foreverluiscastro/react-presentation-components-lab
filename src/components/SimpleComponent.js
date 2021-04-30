// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mood: ""
        };
    }
    

    handleClick = e => {
        this.setState({
            mood: "sad"
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.mood}
            </div>
        )
    }
}

SimpleComponent.defaultProps = {
    mood: "happy"
}