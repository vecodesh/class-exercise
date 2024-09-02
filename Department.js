import React,{Component} from "react";
import College from "./College";
import "./color.css"
class Department extends Component{
    render(){
        return(
            <div>
                <p className="message-style">Welcome to CSE Department<College/></p>
            </div>
        )
    }
}
export default Department;