import React,{Component} from 'react';
import "./color.css";
class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            String : "",
            message: ''
        }
    }
    increment=()=>{
        this.setState(prevState => {
            console.log('Hello, count has been incremented by 1');
            alert('Count has been incremented by one');
            return { count: prevState.count + 1, 
            String : 'Hello I am vedesh',
            message: `The count has been incremented by 1`
            };
        });
    }
    render(){
        return(
            <div>
                <div className='cole'>
                <h1 className="message-style">{this.state.count}</h1>
                <button className="message-col button-center" onClick = {this.increment}>Increment</button>
                <p className="message-style">{this.state.message}</p>
                <p className="message-style">{this.state.String}</p>
                </div>
            </div>
        )
    }
}
export default Counter;