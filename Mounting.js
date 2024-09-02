import React,{Component}from 'react';

class Mounting extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }
    componentDidMount(){
        console.log("Mounted");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('Should it',nextState);
        return true;
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Update from ',prevState,'to',this.state);
    }
    componentWillUnmount(){
        console.log("Unmounted");
    }
    increment = () =>{
        this.setState((prevState)=>({
            count: prevState.count + 1
        }));
    };
    render(){
        return(
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
export default Mounting;
