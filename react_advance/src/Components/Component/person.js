import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import enhancedComponent from '../HOC/HigherOrderComponent';


export class Person extends Component {
    render() {
        return (
            <Fragment >
                <h4>{this.props.title}</h4>
                <button onClick = {this.props.Clickhandler}>{this.props.name} {this.props.value}</button>
                <h5>User Counter : {this.props.countState}</h5>
            </Fragment>
        )
    }
}

Person.propTypes = { 
    name : PropTypes.string
}

export default enhancedComponent(Person)
