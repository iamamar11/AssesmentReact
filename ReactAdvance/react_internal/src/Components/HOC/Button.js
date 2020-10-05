import React from 'react';

const higherOrderButton = (WrapppedComponent) => {
    return(       
        class Button extends Component {
            
            Style = {
                backgroundColor : 'pink',
                width : '50%',
                margin : "0px auto",
                height : "300px",
                padding : '20px 50px'
            }

            render() {
                return (
                    <div style={this.Style}>
                        <WrapppedComponent />
                    </div>
                )
            }
        }  
    );
}
export default higherOrderButton;