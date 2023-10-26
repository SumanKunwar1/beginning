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




