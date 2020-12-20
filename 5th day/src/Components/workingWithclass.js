import React, {Component} from "react";

export default class workingWithClasses extends Component {


    constructor(){
        super();

        this.state= {
            emplist:[{
                name: "Chahat",
                age: 22,
                address:{
                  street: "Delhi",
                  country: "India"
                }
            },
            {
                name: "Satvik",
                age: 20,
                address:{
                  street: "london",
                  country: "europe"
                }
            },
            {
                name: "Jiya",
                age: 22,
                address:{
                  street: "New york",
                  country: "USA"
                }
            }]

        }
        
    }
    changeData = () => {
        this.setState
        ({
            name: "Ria",
            age: 40,
            address:{
                street: "nowhere",
                country: "idk"
            }
        })
    }

    render()
    {
        return(
            <div>
                <h1>This is class component...</h1>
                <h2>Username is : {this.state.emplist[0].name}</h2>
                <h2>Userage is : {this.state.emplist[1].age}</h2>
                <input type="button" onClick={this.changeData} value="update"/>
            </div>
        )
    }
 }