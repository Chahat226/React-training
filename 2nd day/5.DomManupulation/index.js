

var header = document.getElementById("first");
header.style.border="4px solid red";
header.style.alignContent="center";
header.style.color="purple "

var colorArr=["red","blue","green"]
var count=0;

setInterval(function(){
    document.getElementById("first").style.color= colorArr[count];
    count=(count+1)%3
},200)


setTimeout(function()
 {
     header.style.color="blue"
 },4000)
 setTimeout(function()
 {
     header.style.color="yellow"
 },8000)
 setTimeout(function()
 {
     header.style.color="grey"
 },12000)


setInterval(function(){
    document.getElementById("first").textContent= `Current Timer: ${new Date().getHours()} : ${new Date().getMinutes()} : 
    ${new Date().getSeconds()}`
},1000)