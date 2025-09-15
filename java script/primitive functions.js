// non primitive datatype :-
// array , object , function , maps 

// array :- Huge memory block who stores the diff type of elements

// homogenous :- same type of element [2,3,4,5,6] , ['hy','by']
// heterogenous :- diff types of element [2,3,4'hy',true]

// array create 2
// array 

//============================================================

//function :- function is a block of code who perform the specific task [reusable]
//function declaration
//function expression
// arrow function -> function inside function
// IIFE -> immediate call -> one time use
// CALL BACK FUNCTION

// FUNCTION DECLARATION
// FUNCTION DEMO(){





// arrow function
let demo2 = () => {console.log("hy debugshala");}
demo2()

//iife -> ()()
// (function demo(){
// consol.log(5555555555555555);
//})()

//nested
function parent(){
    console.log("hy harsh")
    function child(){
        console.log("hy harsh");
    }
    child()
}
parent()