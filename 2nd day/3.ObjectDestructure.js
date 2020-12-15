var first={
    name:"Chahat",
    age: 23,
    designation: "Developer",
    salary: 20000,
    isEmployed:true
}

var n=first.name
var a=first.age

//destructuring method

var{name:n,age:a}=first
console.log(n+" "+a)

//rest operator
var{name:Username,age:Userage,...other}=first
console.log(Username+" "+Userage+" "+other)

//same is with array
var arr=[1,2,3,4,5]
var[c,d]=arr
console.log(c+" "+d)

//rest operator-> used to store the rest values left out in arr

var arr1=[1,2,3,4,5,6,7]
var[e,f,...g]=arr
console.log(e+" "+f+" "+g)


