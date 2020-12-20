import React from "react";

export default function Addevent()
{

    function mouseoverfunction(event)
    {
        event.target.style.color="blue";
        alert( `Event type is ${event.type}, Target name is ${event.target.id}`)
    }

    return(
        <div id="maindiv">
            <h1 id="mainHeading">Hello alll!!!!!!!!!!</h1><br></br>
            <input id="inputText" type="text" onChange={mouseoverfunction} /><br></br><br></br>
            <input id="inputButton" type="button" onClick={mouseoverfunction} value="Click for alert..."/>
        </div>
    )
}