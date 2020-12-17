import React, {Component} from "react";

export default class CounterWithClasses extends Component{
    constructor()
    {
        super();
        this.state = {
            counter: 0
        }


        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
            
        }, 1000)
    }


    render(){
        return(
            <div>
            <h1>Counter from parent: {this.state.counter}</h1>
            <Child counter={this.state.counter}></Child>
            </div>
        )
    }
}

function Child (props){
    return <h2>Couter from child :{props.counter}</h2>
}