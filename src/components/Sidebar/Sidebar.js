import React, {Component} from 'react'
import './Sidebar.css'

class Sidebar extends Component{

    render(){
        return(
            <div id = "sideBar">
                <ul className="sideMenu">
                    <li>Home</li>
                    <li>About </li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>Search</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar