import React,{Component}from 'react';
class Sample extends Component{
    constructor(){
        super();
        this.state={
            name:"aaaa"
        };
    }
    changeName = ()=>{
        this.setState({
            name:"bbbb"
        })
    }
    render (){
        return (
            <div><h1>My name is {this.state.name}</h1>
                 <button onClick={this.changeName}>click</button>
            </div>
        )
    }
}
export default Sample;
