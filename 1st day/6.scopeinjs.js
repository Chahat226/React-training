var aa = 2000

function abc()
{
    var ab = 10
    console.log("Inner: "+ aa)
    if(ab==2000)
    {
        var ax=10;
    }
    console.log(ax)
}
var al=3000
abc();

//there is a window keyword,jiska koi ni uska window hota h
//in case i declared a variable but not inside any function
//then it is saved at window, for ex- al is outside the function
//thus it exist in window type "window.al"
//where as ab is not inside the window