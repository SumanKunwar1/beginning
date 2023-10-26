const user={
    username:"suman",
    age:18,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to e-sense.com`);//'this' is talk only for current contex
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     username:"suman",
//     console.log(this.username);-'this' work on object but not on function 
// }
// chai()

const chai= () =>{//using '=>' instead of 'function' to make it arrowfunction
    username:"suman",
    console.log(this);
}
// chai()
//() =>{}-basic arrowfunction
const addition= (num1,num2) => {
    return num1+num2
}
console.log(addition(3,4));
//this is implicit return
//if we user {} we must write 'return' and but() donenot return
const addition1 =(num1,num2) => (num1+num2)

console.log(addition1(5,7));

const object =() => ({username:"suman"})//to return object we must have to wrap into ()
console.log(Object.username);//it not correct right now but we will do it later