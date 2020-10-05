import React, { Component } from 'react';

const enhancedComponent = (WrappedComponent) => {
    return(       
        class HigherOrderComponent extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    counter : 0
                }
            }
            
            Style = {
                backgroundColor : 'pink',
                width : '50%',
                margin : "0px auto",
                height : "300px",
                padding : '20px 50px'
            }
            
            handler = () => {
                this.setState(prev => {
                    return{
                        counter : prev.counter + 1,
                    }
                })
                
            }

            render() {
                console.log(this.props)
                const {title, name} = this.props;
                return (
                    <div style = {this.Style}>
                        <WrappedComponent Clickhandler = {this.handler} value = {this.state.counter} {...this.props} />
                    </div>
                )
            }
        }        
    );
}

export default enhancedComponent