
var keyname="name";

var names = {
    one:"name",
    two:"age"
}

var keyarray = ["name","age"]
var salary = [10,20,40,50,"Mayank",false,null,{name:"Chahat",age: 22},[1,2,3,4]]

console.log(salary[7].name)
console.log(salary[8][2])
console.log(salary[7][keyname])
console.log(salary[7][names.two])
console.log(salary[7][keyarray[0]])