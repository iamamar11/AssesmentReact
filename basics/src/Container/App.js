import React from 'react';
import './App.scss';
import Fancyborder from '../Components/Fancy/Fancyborder';
import DerivedState from '../Components/DerivedState/DerivedState';
import PropChangeLifecycle from '../Components/LifeCycle/propCycle';
import Cockpit from '../Components/cockpit/cockpit';

class App extends React.Component {
  //! Component Creation lifecycle methods
  constructor(props){
    super(props);
    this.state =({
      count : 0,
      change : 0,
      hide : true,
      show : true
    });
    console.log("1st method : constructor")
  }

  static getDerivedStateFromProps(props,state){
    // console.log(props, state);
    console.log("2st method to be called : getDerivedStateFromProps")
    return null;
  }

  countHandler=()=>{
    this.setState({count : (this.state.count+1)})
  }

  clickHandler = () =>{
    console.log("Button Clicked");
    // ! to tigger shouldUpdate we should make some change is state.
    this.setState({change : this.state.change+1})
  }
  
  showData =()=>{
    this.setState({hide : !this.state.hide})
  }
  
  componentDidMount(){
    this.time = setTimeout(() => {
      console.log("component did mount")
    }, 1000);
    console.log("Last method called after the render method is executed : ComponentDidMount()")
  }

  // componentWillUnmount(){
  //   console.log("____ Called after the componentDidMount ____");
  //   clearTimeout(this.time);
  // }

  render(){
    console.log("3rd method to be called in component creation : Render()")
    let data = null;
    if(this.state.hide === true){
      data = null;
    }
    else if(this.state.hide === false){
      data = (
        <>
        <Fancyborder>
          <h2>{this.props.title} Check console for the lifecycle flow</h2>
          <h3>Children props</h3>
          <p>This text is displayed as a child node of the Fancyborder Component passed between Component</p>
        </Fancyborder>
        <DerivedState clicked={this.countHandler} value = {this.state.count}/>
        <PropChangeLifecycle change={this.state.change} trigger = {this.clickHandler}/>
      </>
      );
    }
    return (
      <>
      {/* Cockpit is where the main button is which triggers */}
      <button onClick={()=>{ this.setState({show : false}) }}>remove Cockpit</button>
      {this.state.show === true ? <Cockpit showData={this.showData} count = {this.state.count} />
        :null
      }
        
      </>
      );
    }
  }

export default App;
