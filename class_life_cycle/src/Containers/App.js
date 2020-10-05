import React from 'react';
import './App.css';
import Cockpit from '../Components/Cockpit/Cockpit';
import styled from 'styled-components';


const Button = styled.button`
  padding : 8px 15px;
  background : red;
  border: none;
`;
const Div = styled.div`
  padding : 2px;
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      show : true,
      count : 0,
    })
  }
  RemoveCockpit = () =>{
    this.setState({show : !this.state.show})
  }
  render(){
    return(
      <Div>
        <Button onClick={this.RemoveCockpit}>Toggle Cockpit</Button>
        {this.state.show ? <Cockpit show ={this.state.show} parentCount = {this.state.count} />: null}      
      </Div>
    );
  }
}

export default App;
