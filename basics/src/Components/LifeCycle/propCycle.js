import React from 'react';

class PropChangeLifecycle extends React.Component{
    //! Component mounting cycle
    constructor(props){
        super(props);
        this.state = ({title : "prop change lifeCycle"});
        console.log("lifeCycle for prop change")
        console.log("1st method to be called : constructor")
    }
    //! Component mounting cycle
    static getDerivedStateFromProps(props, state){
        console.log("2nd method to be executed : getDerivedStateFromProps")
        return null;
    }
    //? Component update lifecycle method, runs before the render method
    shouldComponentUpdate(nextProps, nextState){
        console.log("3rd method to be executed (compare state and props and return true if the change happens, run furthur lifecycle method): shouldComponentUpdate");
        // console.log(nextProps.change,nextState);
        // console.log(this.props.change);

        //* states are compared, if change is true furthur redering will happen
        if(this.props.change !== nextProps.change){
            console.log("....RENDER AS STATES CHANGES....")
            return true;
        }else{
            console.log("**** NO CHANGE ****")
            return false;
        }
    }
    //? Component update lifeCycle method, runs after the render method if store the snapshot of the previous state
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("5th or second last method to be executed : getSnapshotBeforeUpdate()");
        return ({message : "object passed to ComponentDidUpdate method"})
    }
    //! Component mounting cycle ( IF STATES OR PROPS THIS METHOD WILL RUN AFTER THE RENDER METHOD FOR API CALLS)
    componentDidUpdate(prevProps, prevState, message){
        console.log("Last method : componentDidUpdate");
        console.log(prevProps,prevState,message);
    }

    //! Component mounting cycle
    render(){
        console.log("4th method to be executed : render()")
        return(
            <>  
                <h1>lifecycle for Props change</h1>
                <h5>Value of change state : {this.props.change}</h5>
                <button onClick={this.props.trigger} >shouldComponentUpdate</button>
            </>
        );
    }
}
export default PropChangeLifecycle