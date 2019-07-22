import React , {Component} from 'react'
import './Employeerecord.css'
import ReactTable from 'react-table'
import "react-table/react-table.css"


class Employeerecord extends Component {

    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
    }

    componentDidMount () {
        const url = "http://dummy.restapiexample.com/api/v1/employees"
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(employees => {
            //console.log("employees", employees)
            this.setState({employees: employees})
        })

    }

    deleteRow(id) {
        const index = this.state.employees.findIndex(employee=> {
            return (employee.id === id)
        })
        //console.log(id)
        //console.log(index)
        let copyRecords = [...this.state.employees]
        copyRecords.splice(index,1)
        this.setState({employees:copyRecords})
    }

    addRow() {

        let copyRecords = [...this.state.employees]
        copyRecords.push(
            {id: '000', employee_name: 'test', employee_salary:'000'}
        )
        this.setState({employees:copyRecords})

    }



    render(){
    
        let totalSalary = 0
        this.state.employees.map( employee => {
            totalSalary = Number(totalSalary) + Number(employee.employee_salary)  

        })
        
        const columns = [
            {
                Header: "ID",
                accessor: "id",
                filterable: false,
                style: {
                    textAlign: "left"

                },
                Footer: false
            },
            {
                Header: "Employee Name",
                accessor: "employee_name",
                filterable: false,
                style: {
                    textAlign: "left"

                },
                Footer: (
                    <span>
                     TOTAL SALARY REQUIRED:   
                    </span>
                  )
            },
            {
                Header: "Employee Salary",
                accessor: "employee_salary",
                filterable: false,
                style: {
                    textAlign: "left"

                },
                Footer: (
                    <span>
                        {totalSalary}
                    </span>
                  )
            },
            {
                Header: "Actions",
                Cell: props => {
                    return(
                        <button 
                            style={{
                                backgroundColor: "#ad3b15",
                                color: "#fefefe",
                                padding:"5px"
                            }}
                            onClick = {() => {
                                this.deleteRow(props.original.id)
                            }}
                        >Delete</button>
                    )
                },
                filterable: false,
                sortable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100
            }


        ]
        return(
            <div>
            <ReactTable
              columns= {columns}  
              data= {this.state.employees}
              noDataText = {"No Employee Record Found"}
              filterable
              defaultPageSize = {40}
            >

            </ReactTable>

            <button 
                style={
                    {
                        backgroundColor: "#5c9aff", 
                        color: "#fefefe",
                        padding:"5px",
                        marginTop: "10px",
                        float:"right"}
                }
                onClick = {() => {
                    this.addRow()
                }}
                >Add New Record </button>
            </div>
            


        )
    }
}

export default Employeerecord