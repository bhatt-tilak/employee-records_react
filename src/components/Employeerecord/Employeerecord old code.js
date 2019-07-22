import React, {Component} from 'react'

import './Employeerecord.css'

class Employeerecord extends Component{
    state = {
        netTotalSalary : null
    }
    render(){
        let totalSalary = 0
        const employees = this.props.allrecords.map( employee => {
            totalSalary = Number(totalSalary) + Number(employee.employee_salary)
            return(
               <div>
                   <table>
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.employee_name}</td>
                        <td>{employee.employee_salary}</td>
                    </tr>
                   </table>
               </div>
            )
        })

        return(
            
            <div id = "record">
                {employees} 
                the total salary required is: {totalSalary}
            </div>
        )
    }
}

export default Employeerecord