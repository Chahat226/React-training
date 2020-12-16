import React from "react";

var userName = "Chahat";

function getAge()
{
    return 22
}

export default function Inter(){
    return(
        <div>
            <h1>hello {userName}</h1>
            <h2>User Age :{getAge()}</h2>
            <h3> Addition of 1+1 is: {1+1}</h3>
            <h2>Max value of array: {Math.max(1,2,3,4,5,77)}</h2>
            Timer {new Date().getHours() + " : "+ new Date().getMinutes()+ " : "+ new Date().getSeconds()}
        </div>
    )
}

