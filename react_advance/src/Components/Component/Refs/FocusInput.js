import React, { Component, createRef } from 'react'
import Input from './Input';
import ThemeContext from '../../../Context/MyContext'; 

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.newRef = createRef();
        this.state = ({
            show : true
        })
    }
    static contextType = ThemeContext;  

    clickHandler = () => {
        
        // ! With refs we can have access to complete Component in React. With the code below 
        // ! we can access each and every property of the Input Component
        console.log(this.newRef);
        this.newRef.current.focus()

        // this.newRef.current.user();
        // this.newRef.current.inputFocus();

        // on Click the input component will unmount;
        // this.setState(( prevState ) => {
        //     return {
        //         show : !prevState.show
        //     }
        // })
    }
    
    render() {
        
        return (
            <div>
            {this.state.show ? <Input ref={this.newRef} title={"Using Refs"}  /> : null}
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
