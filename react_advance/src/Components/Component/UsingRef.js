import React, { Component, createRef } from 'react'

class UsingRef extends Component {
    constructor(props) {
        super(props)
        // Here we are creating a reference to an object || To use assign it to ref attribute inside return node
        this.elementRef = createRef();

        // Other way of creating a reference is by callback function
        this.otherWayRef = null;    // This is the ref object to which DOM methods can be applied
        this.createOtherWayRef = (element) => {
            console.log(element);
            this.otherWayRef = element;
        } 

    }

    componentDidMount(){
        // this.elementRef.current.focus();
        this.otherWayRef.focus();
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.elementRef} /><br/>
                <input type='text' ref={this.createOtherWayRef} />
                <button onClick = {()=> {
                    alert(this.elementRef.current.value)
                }} >Get inputValue</button>
            </div>
        )
    }
}

export default UsingRef
