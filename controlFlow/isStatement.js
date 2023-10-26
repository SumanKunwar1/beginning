//'===' is very important it check datatype as well

// const isUserLogedIn=true
// const temp=150

// if(isUserLogedIn==true){
//     console.log("Hello world")
// }
// if(temp<20){
//     console.log("temprature is less than 20");
// }else{
//     console.log("temeprature is more than 20")
// }

// const score =200;
// if(score>100){
//     const power="fly"
//     console.log(`Power of user: ${power}`);
// }else{
//     const power="Run"
//     console.log(`Power of user: ${power}`);
// }

const balance =1000
//if(balance>500) console.log(); //implecite score of of code -(shorthand)
/*we can write multiple things by comma seperating but its not good practice which make code so 
unreadable*/

//else if condition

if(balance<500){
    console.log("less than 500");
}else if(balance<1000){
    console.log("less than 1000");
}else{
    console.log("More than 1000");
}

//checking multiple conditions
const isUserLogedIn=true
const validDebitcard=true
const logedInfromGoogle=false
const loggedInfromEmail=true
//and statment
if(isUserLogedIn && validDebitcard && 2==3){
    console.log("User is able to buy courses");
}
//or statement
if(logedInfromGoogle || loggedInfromEmail){
    console.log("You are eligible to enter");
}
//nullish coalescing operator(??):null, undefined

let val1;
//val1=5 ?? 10
//some time while working on database we didn't get the value directly we get two value most of time
//we use first one but if the fist value is null or undefined then using next one for fault tolerance
// val1=null ?? 10
val1=undefined ?? 15
const val2 = null ?? 20 ?? 30 // first value will print 

console.log(val1);
console.log(val2);

//ternery operator ?
const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") :console.log("Greater than 80"); 
//to execute statement in the same line without using if else we use this'?' ternery operator





