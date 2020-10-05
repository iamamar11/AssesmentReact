import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import DisplayComponent from '../../Components/DisplayComponent'

class AddComponent extends Component {
    
    constructor(props) {
        super(props)
        this.inputRef = createRef();
        this.state = ({
            value : []
        })
    }
    

    ClickHandler = () => {
        // creating a copy of state value to prevent an bug
        let stateValue = this.state.value;
        // Pushing data to array 
        stateValue.push(this.inputRef.current.value);
        // Assigning the array to state value
        this.setState({value : stateValue });
        // Making the input empty using refs
        this.inputRef.current.value = '';
    }
    
    DeleteHandler = (index) => {
        console.log("Del"+index);
        let stateValue = this.state.value;
        stateValue.splice(index,1);
        console.log(stateValue);
        this.setState({ value: stateValue });
    }

    render() {
        return (
            <div>
                <input type='text' ref = {this.inputRef} />
                <input type='submit' onClick={this.ClickHandler}/>
                <hr/>
                <DisplayComponent value = {this.state.value} delete = {this.DeleteHandler}/> 
            </div>
        )
    }
}
export default AddComponent
