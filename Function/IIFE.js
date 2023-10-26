//Immediate invoked function expression - IIFE
//IIFE is used to negenect golbal pollution
(function chai(){
    //named IIFE
    console.log("DB connected");
})();//semicolon is next to end the immediate invokation
//first ()-fuction defination
//second ()- function execution

((name) =>{
    //simple IIFE or unamed IIFE
    console.log(`DB connected ${name} now you can user`);
})("suman");