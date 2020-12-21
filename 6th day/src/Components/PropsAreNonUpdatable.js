import React, {Component} from "react";

export default class PropsNon extends Component {
    constructor(){
        super();
        this.state = {
            name:"Chahat",
            user:
            {
                userage : 22,
                userDesignation: "Fresher"
            }
        }
    }


    getValue = () => {
        alert(`User age is ${this .state.user.userage}`);
        this.setState({
            user: {
                ...this.state.user,
                userage: 2000
            }
        })
    }
    render()
    {
        return(
            <div>
                <h1>User name is: {this.state.name}</h1>
                <h2>User age is : {this.state.user.userage}</h2>
                <input type="button" value="Click " onClick={this.getValue}/>
                <PresentComp name={this.state.name} user={this.state.user}></PresentComp>
            </div>
        )
    }
}
function PresentComp(props)
{
    //props.user.userage = 1000;
    return( 
        <div>
        <h2>User name from present {props.name}</h2>
        <h1>User age is {props.user.userage}</h1>
        <h2>User des is {props.user.userDesignation}</h2>
        </div>
    )


}