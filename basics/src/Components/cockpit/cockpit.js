import React, { useEffect } from 'react';

class Cockpit extends React.Component{
    // useEffect(()=>{
    //     console.log("useEffect is running");
    //     setTimeout(() => {
    //         alert("useEffect in Action")
    //     }, 1000);
    // }, [props.count])

    componentWillUnmount(){
        console.log("____ Called after the componentDidMount ____");
        clearTimeout(this.time);
      }
    render(){
        return(
            <button onClick={this.props.showData}>Show Data</button>
        );
    }
}
export default Cockpit;