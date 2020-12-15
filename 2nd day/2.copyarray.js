var arr=[1,2,3,4,5]
var copy=[]
for(var i=0;i<arr.length;i++)
{
    copy.push(arr[i])
}
//its a very lengthy process so instead we use spread operator

var copyArr=[...arr]

//Same is with objects

var first={
    name:"Chahat",
    age: 23,
    designation: "Developer"
}

var copyfirst={...first}