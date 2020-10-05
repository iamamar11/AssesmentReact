import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddComponent from '../Containers/Add/AddComponent'

class Body extends Component{

    style = {
        background : 'pink',
        height : '100vh',
        width : '100vw',
        textAlign : 'Center'
    }

    render(){
        return(
            <div className='main' style={this.style}>
                <AddComponent />
            </div>
        )
    }
}
export default Body