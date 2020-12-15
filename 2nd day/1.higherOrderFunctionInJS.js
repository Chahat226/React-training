var emplist=[{
        name: "Chahat",
        age: 22,
        roll: 47

    },{
        name: "Satvik",
        age:20,
        roll:44
    },{
        name: "Suraksha",
        age:22,
        roll:100
    }]

    emplist.forEach(function(empl)
    {
        console.log(empl.name)
        console.log(empl.age)
        console.log("---------------------------------")
    })


    var listm=emplist.map(function(emplo)
    {
        return{
            name: emplo.name,
            
            age: emplo.age + 10,
            roll: emplo.age
        };

       // console.log(listm.age)
    })
    console.log(listm)

    var li=emplist.filter(function(em)
    {
        if(em.name[0]=='S'){
            return true
        }
        else {
            return false;
        }
    })
    console.log(li)
  
