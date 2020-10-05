import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    padding : 10px;
    background : salmon;
    margin-top : 5px;
    border : 2px solid black;
`;

const FunctionLifecycle = (props) =>{
    
    // Other code lifecycle methods
    const [initialCount, setCount] = useState(0);
    console.log("RUN");
    
    useEffect(() => {
        console.log("Lifecycle Component Mounted ( useEffect Hook )");
            return () => {
            console.log("LifeCycle Component is unMounted ( useEffect Hook )");
        }
    }, [])  
    
    return(
        <Div>
            <h4>{props.children}</h4>
            <h5>Select Fruit in Selected Component is : {props.selectValue}</h5>
            <h6>Initial Count is : {initialCount}</h6>
            <button onClick= {()=> setCount((initialCount+1))}>Count</button>
            <button onClick= {()=> console.log("Click Check")}>Click Check</button>
        </Div>
    );
}
export default React.memo(FunctionLifecycle);