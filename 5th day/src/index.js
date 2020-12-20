import React from "react";
import ReactDOM from "react-dom";

import AddEvent from "./Components/AddingEvent.js";

import Timer from "./Components/Timer"
import Classes from "./Components/workingWithclass";
import Simple from "./Components/SimpleFunctionalCom";

import Timerc from "./Components/TimerWithClasses";
import Counter from "./Components/CounterWithClasses";
import UserDetails from "./Components/UserDetailsComponents";
import PropsNon from "./Components/PropsAreNonUpdatable";

import ShouldCom from "./Components/ShouldCompUpdateFeature";

import PresentWithClass from "./Components/PresentationalCompWithClasses"

import LifeCycle from "./Components/LifeCycleComponenet";

ReactDOM.render((
    <div>
        <PropsNon></PropsNon>
        
         <ShouldCom></ShouldCom>
         <PresentWithClass></PresentWithClass>
         <LifeCycle></LifeCycle>

    </div>
),document.getElementById("root"));
