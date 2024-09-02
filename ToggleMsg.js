import React from 'react';
class Conditional extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn: false
        };
    }
    toggleLogin = () =>{
        this.setState(prevState =>({
            isLoggedIn: !prevState.isLoggedIn
        }));
    }
    render(){
        return(
            <div  style ={{fontSize:"50px",textAlign:"center"}}>
                {this.state.isLoggedIn ?<h1>Welcome Back!</h1> : <h1>Please Log in</h1>}
                <button onClick={this.toggleLogin}>
                    {this.state.isLoggedIn ? 'Log Out' : 'Log In'}
                </button>
            </div>
        )
    }
}
export default Conditional;