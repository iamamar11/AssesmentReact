import React, { Component } from 'react'

export class Click extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.Increment}>click {this.props.count} Times</button>
            </div>
        )
    }
}

export default Click
