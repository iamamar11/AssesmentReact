import React, { Component } from 'react'


class MyRender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }
    Increment = () => {
        this.setState({count : this.state.count+1})
    }
    
    render() {
        return (
            <>
              <h1>{this.props.topic}</h1>
              {this.props.render(this.state.count, this.Increment)}
            </>
        )
    }
}

export default MyRender
