import React , {Component} from 'react'
import axios from 'axios'

import './Mainpage.css'

import Navbar from '../../components/Navbar/Navbar.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import Maincontent from '../../components/Maincontent/Maincontent.js'

class Mainpage extends Component {

    state = {
        employees: [],
        noOfEmployees: null,

    }

    componentDidMount(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => {           
                this.setState({employees: response.data})  
                const length = response.data.length;
                this.setState({noOfEmployees: length})
                //console.log(length)
            })
            
    }

    render(){
        return(
        <div id= "mainWrapper">
            <div id = "Navbar">
                <Navbar noOfEmployees = {this.state.noOfEmployees}/>
            </div>
            <div id = "bodyWrapper">
                 <Sidebar/>
                 <Maincontent allrecords = {this.state.employees} noOfRecords = {this.state.noOfEmployees}/>
            </div>
        </div>   
        )
    }
}


export default Mainpage