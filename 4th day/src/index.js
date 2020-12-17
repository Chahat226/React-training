import React from "react";
import ReactDOM from "react-dom";

import AddEvent from "./Components/AddingEvent.js";

import Timer from "./Components/Timer"
import Classes from "./Components/workingWithclass";
import Simple from "./Components/SimpleFunctionalCom";

import Timerc from "./Components/TimerWithClasses";
import Counter from "./Components/CounterWithClasses";
import UserDetails from "./Components/UserDetailsComponents";


ReactDOM.render((
    <div>
        <AddEvent></AddEvent>
        <Timer></Timer>
          <Classes></Classes> 
        <Simple></Simple>
        <Timerc></Timerc>
        <Counter></Counter>
        <UserDetails></UserDetails>

    </div>
),document.getElementById("root"));
