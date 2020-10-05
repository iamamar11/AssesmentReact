import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border : 2px solid black;
  padding : 10px;
  margin-top : 5px;
  background : lightgreen;
`;

const arrayFruits = ["Apple", "Orange", "Pineapple", "kiwi", "Grapes"];

export default class SelectComponent extends React.Component{

    // !preventing this component to render if no change happens
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.count !== this.props.count){
            console.log("--- Rendering Select Component ---");
            return true;
        }else{
            console.log("_____ NO RENDERING _____");
            return false;
        }
    }

    Select = () =>{
        const options = arrayFruits.map((option,index) => {
           return <option key={index}>{option}</option>
        })
        return options;
    }
    render(){
        return(
            <Div>
                <h4>Cockpit Counter value is : {this.props.count}</h4>
                <h3>{this.props.children}</h3>
                <select onChange={this.props.change}><this.Select/></select>
            </Div>
        );
    }
}