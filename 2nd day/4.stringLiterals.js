var st="dkljvfkjvjworjoijbj jeiufhgiueoiejwoigioqhgh neuiguiruiehggeiwhiowghiohiheiowheohgwhv"+
"jdkbgiuure   hiehgihehewihiheiguhughiwhih"+
"dnklgaeelkrnglkrnln"

// better option is back tick

var str1=`dcklevlernvenrnlkn
nvkksdnznsireiihoirhiore
dsvnnkannkdnkggjnj`

//another use

var first={
    name:"Chahat",
    age: 23,
    designation: "Developer",
    salary: 20000,
    isEmployed:true
}

var string="hello"+ first.name+"Welcome"
//using backticks
var string1=`hello ${first.name} your age is ${first.age}`
console.log(string1)

//we can pass functions also
function returnname(){
    return "Satvik"
}
var string2=`hello ${returnname()} your age is ${first.age}`
console.log(string2)


