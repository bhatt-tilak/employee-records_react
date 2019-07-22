import React, {Component} from 'react'
import './Maincontent.css'
import Employeerecord from '../Employeerecord/Employeerecord';



class Maincontent extends Component{

    render(){
        return(
            
            <div id="mainContent">
                <Employeerecord  />

            </div>
        )
    }
}

export default Maincontent