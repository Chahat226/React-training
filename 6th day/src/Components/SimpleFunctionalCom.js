import React from "react"

export default function Simple()
{
    var name="Chahat";

    setTimeout(function(){
        name="Satvik";
    },3000)
    return<h1>User name is: {name}</h1>
}
//this wont work with functions as ui cannot be rendered or changed
//once its rendered but it will work with classes