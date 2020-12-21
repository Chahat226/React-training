import React from "react";

export default class StateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Chahat"
        }
    }
   

    render() {
        return (
            <div>
                <h1>User Name is: {this.state.username}</h1>
                <PresentationalComponent userage="23" username={this.state.username}></PresentationalComponent>
            </div>
        )
    }

    
}

class PresentationalComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            myData: "Satvik"
        }
    }

    updateStateData = () => {
        this.setState({
            myData: "Other Data"
        })

        this.forceUpdate();
    }


    render() {
        return (
            <div>
                <h2>Data in Child Component is {this.props.username}</h2>
                <h2>Age Child Component is {this.props.userage}</h2>
                <h2>Random Data is {this.state.myData}</h2>
                <input type="button" onClick={this.updateStateData} value="Update State" />
            </div>
        )
    }
}