var name = "Satvik";

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        if(name === "Chahat") {
            resolve({
                name: "Chahat",
                age: 20
            })
        } else {
            reject({
                error: "This is Not Expected Name"
            })
        }
        
    }, 10000);
})

myPromise.then((data) => {
    alert(data.name)
}).catch((data) => {
    debugger
})

console.log(name)