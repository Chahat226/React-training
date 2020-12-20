import React from "react";

export default function PropsData(props)
{
    return(
        <div>
            <h1>hello {props.username}</h1>
            <h1>Your age is {props.userage}</h1>
        </div>
    )

}

