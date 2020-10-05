import React from 'react';
import styled from 'styled-components';

const DerivedState = (props) => {

    const Div = styled.div`
    background : lightgreen;
    border : 2px solid black;
    margin-top : 5px;
    padding: 5px
    `;

    const Button = styled.button`
        padding : 5px 12px;
    `;
    return(
        <Div>
            <h3>Value of state is : {props.value}</h3>
            <p>Here lifing up state is performed where the click is happening side a component and the value is being update inside the conatiner (App.js)</p>
            <Button onClick={props.clicked}>click</Button>
        </Div>
    );
}
export default DerivedState;