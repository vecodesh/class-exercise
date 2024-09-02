import React,{Component}from 'react';
import "./TwoWays.css"
class TwoWays extends Component{
    constructor(){
        super()
        this.state={
            inputValue: "I am batman"
        }
    }
    handleInput=(event)=>{
        this.setState({
            inputValue: event.target.value
        })
    }
    render(){
        return(

            <div>
                <div className='box'>
                <div className='center'>
                <input className="col" type='text' value={this.state.inputValue} onChange={this.handleInput}/>
                <h1 className='style'>{this.state.inputValue}</h1>
                </div>
                </div>
            </div>
        )  
    }
}
export default TwoWays;