import React from "react";
import ReactDOM from "react-dom";
import FooterContent from"./Components/Footercomponent";
import HeaderContent, {HeaderContents} from "./Components/HeaderComponent";
import Content from "./Components/ContentComponent";
import Interpolation from "./Components/InterpolationComponent";

import PropsData from "./Components/PropsDataComponent";



var dataObject={
    username: "Satvik",
    userage: 20
}

ReactDOM.render(
        <div>
            <HeaderContent></HeaderContent>
            <HeaderContents></HeaderContents>
            <Content></Content>
            <FooterContent></FooterContent>
            <Interpolation></Interpolation>
            {/* <PropsData username="Chahat" userage="22"></PropsData> */}

            <PropsData {...dataObject}></PropsData>


        </div>,document.getElementById("root"));


