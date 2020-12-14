function addData(a,b){
    console.log("Add "+(a+b))
    console.log(arguments[2])
    return a+b

//we can return objects and arrays 
// in same way
//object ->
//return {
   // first:a,
   // second:b
//}

    
}

var returned=addData(22,22)
addData(4,5)
addData(55,44)
addData(1,2,3)