import React from "react";


export default function TimerComp()
{
    return<h1>Timer: {new Date().getMinutes()+ " : " +new Date().getSeconds()}</h1>
}