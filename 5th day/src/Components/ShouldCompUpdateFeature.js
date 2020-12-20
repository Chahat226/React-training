import React, {Component} from "react";

export default class ShouldComp extends Component
{
    constructor(){
        super();
        this.state = {
            username: "Chahat",
            userage: 22
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.username===this.state.username){
            return false;
        }else{
            return true;
        }
    }

    changeStateData = ()=>{
        this.setState({
            userage: this.state.userage+1
        })

        setTimeout(() => {
            alert(this.state.userage)

        },3000 )

    }

    render(){

        return(
            <div>
                The username : {this.state.username}
                <input type="button" value="update" onClick={this.changeStateData}/>
            </div>
        )
    }
}