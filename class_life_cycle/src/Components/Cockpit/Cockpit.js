import React , { Component }from 'react';
import styled from 'styled-components';
import SelectComponent from '../SelectComponent';
import DisplayComponent from '../DisplaySelect';
import FunctionLifecycle from '../Functional/lifeCycle';
import MyFragment from '../../Containers/MyFragment';


const Div = styled.div`
  border : 2px solid black;
  padding : 10px;
  margin-top : 5px;
  background : lightpink;
`;

class Cockpit extends Component{
    constructor(props){
        super(props);
        this.state = ({
            count : 0,
            fruitName : 'Apple'
        })
    }

    countHandler = () => {
        this.setState({count : this.state.count+1})
    }
    
    changeHandler = (event)=>{
        this.setState({fruitName : event.target.value})
    }
    shouldComponentUpdate(nextProps, nextState){
        // if state or props are changed the rendering will be done to update the components
        if((this.state !== nextState)){
            console.log("***** Rendering Cockpit Component *****");
            console.log(this.state, nextState)
            return true;            
        }else{
            console.log("_____ NO RENDERING _____");
            return false;
        }
    }
    // Runs as soon as Component is renders for the first time
    componentDidMount(){
        console.log("Cockpit Component is Mounted");
    }

    // Runs after the component is removed or hide from the body
    componentWillUnmount(){
        console.log("Cockpit Component is Unmounted")
    }

    render(){
        return(
            <Div>
                <h4>This is Cockpit Component</h4>
                <h6>The value of counter is : {this.state.count}</h6>
                <button onClick = {this.countHandler}>Change Count</button>
                <SelectComponent change={this.changeHandler} count={this.state.count} >This is the Select Component child of Cockpit component</SelectComponent>
                <DisplayComponent selectValue = {this.state.fruitName}>This is Where Select values are Display</DisplayComponent>
                <FunctionLifecycle selectValue = {this.state.fruitName}>This is the Funcional Componente using Hooks</FunctionLifecycle>
                <MyFragment></MyFragment>
            </Div>
        );
    }
}

export default Cockpit;