import React, { Component, createRef } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.localRef = createRef();
    }
    user = () => {
        console.log("USER")
    }
    inputFocus = () => {
        //? I want to focus on the input feild
        
        //! 1. traditional JS Way
        // document.querySelector('input').focus()
        
        //! 2. The React Way ( using refs)
        this.localRef.current.focus();
    }
    render() {
        return (
            <>  
                <h4>{this.props.title}</h4>
                <input type='text' ref={this.localRef} />
                <h5>Theme color is : {this.props.theme}</h5>   
            </>
        )
    }
}
export default Input;

// import React, {useRef, useEffect} from 'react';

// const Input = React.forwardRef((props, ref) => {
//     const ref = useRef(null)

//     // const inputFocus = ()=> {
//     //     console.log("Focus method called from input funcitonal component");
//     //     console.log(myref.current.focus())
//     // }
//     // useEffect(() => {
//     //     myref.current.focus();
//     //     return () => {
//     //         console.log("component is unmounted");
//     //     };
//     // }, [])

//     return (
//         <>
//             <input type='text' ref={ref} />
//         </>
//     );
// })


