import React, { Component } from 'react'
import { MyConsumer } from '../../../Context/MyContext'

class Button extends Component {
    render() {
        return (
            <div>
                <MyConsumer>
                {
                    (Context) => {
                        return <h5>The title is {Context.Title} and the Type is {Context.Type} </h5>
                    }
                }
                </MyConsumer>
            </div>
        )
    }
}

export default Button
