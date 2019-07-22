import React, {Component} from 'react'
import './Navbar.css'

class Navbar extends Component{

    render(){
        return(
            <div className = "navBar" >
               <div id= "topMenu">
                   <ul>
                       <li>Home</li>
                       <li>About</li>
                       <li>Contact</li>
                       <li>Login</li>
                       <li>Notice</li>
                   </ul>
               </div>
                <div className = "recordInfoContainer" >
                    <span className= "recordInfo">{this.props.noOfEmployees} Records Found </span>
                </div>
            </div>
        )
    }
}

export default Navbar