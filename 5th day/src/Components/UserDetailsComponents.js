import React, {Component} from "react";

export default class UserDetails extends Component{
    constructor()
    {
        super();
        this.state = {
            username: "Chahat",
            userage: 22,
            userDesignation :"Developer",
            usersalary: 3000000
        }
    }

    update = ()=>{
        this.setState({
            usersalary: this.state.usersalary+1000,
            username: "Satvik"
        })
    }

    render()
    {
        return(
            <div>
                <h1>User Name: {this.state.username}</h1>
                <h1>User Age: {this.state.userage}</h1>
                <h1>User Designation: {this.state.userDesignation}</h1>
                <h1>User Salary: {this.state.usersalary}</h1>

                <input type="button" onClick={this.update} value="update"/>

            </div>
        )
    }
}