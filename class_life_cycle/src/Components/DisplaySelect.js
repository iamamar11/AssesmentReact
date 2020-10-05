import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border : 2px solid black;
  padding : 10px;
  margin-top : 5px;
  background : lightblue;
`;

const arrayFruits = ["Apple", "Orange", "Pineapple", "kiwi", "Grapes"]

export default class DisplayComponent extends React.Component{

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.selectValue !== this.props.selectValue){
            console.log("*** RENDERING DISPLAY ***")
            return true
        }else{
            console.log("--- NOT RENDERING DISPLAY ---");
            return false
        }   
    }

    render(){
        return(
            <Div>
                <h4>{this.props.children} : {this.props.selectValue}</h4>
                
            </Div>
        );
    }
}