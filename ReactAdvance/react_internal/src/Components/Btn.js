import React, { Component } from 'react'

export class Btn extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.delete(this.props.Index)}>Delete</button>
            </div>
        )
    }
}

export default Btn
