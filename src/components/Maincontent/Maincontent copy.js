import React, {Component} from 'react'
import './Maincontent.css'
import Employeerecord from '../Employeerecord/Employeerecord';
import axios from 'axios'


class Maincontent extends Component{
    
    state = {
        allrecords : [],
        deleteLastRecordButton: false,
        addNewRecordButton: false
    }
    
    deleteLastRecord = () => {
        console.log("buttonpress")

    }
    addNewRecord() {
 
        console.log("add new record clicked")
    }
    render(){
        return(
            
            <div id="mainContent">
                <Employeerecord allrecords = {this.props.allrecords} noOfRecords = {this.props.noOfRecords} />
     
                <div className= "deleteButton">
                    <button className="button_Bottom" onClick={this.deleteLastRecord}>Delete Last Record</button>
                </div>

                <div className="addButton">
                    <button className="button_Bottom" onClick={this.addNewRecord}>Add New Record</button> 
                </div>
            </div>
        )
    }
}

export default Maincontent