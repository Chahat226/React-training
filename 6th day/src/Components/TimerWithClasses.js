import React, {Component} from "react";

export default class TimerWithClasses extends Component{
    constructor()
    {
        super();
        this.state={
            currentTime: new Date()
        }



        setInterval(() => {
        
            this.setState({
                currentTime: new Date()
            })
        }, 1000);
    }

    

    render(){
        return <h1>Timer: {this.state.currentTime.getUTCHours()+":"+this.state.currentTime.getSeconds()}</h1>
    }
}