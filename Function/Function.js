function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");
}
// sayMyName()
//arithmetic function
function AddNum(Num1, Num2){
    console.log(Num1+Num2);
}
AddNum(4,5)//if we try to store this into any value then the type of the value of that varible is undefined
function AddNum1(Num1, Num2){
    // let result =(Num1+Num2);
    // return result--another easy way 
    return Num1+Num2
}
const result=AddNum1(4,5)
console.log(result);
console.log(typeof result);

//next example
function userlogin(UserName="sam"){//we can directly give default username as well and we can modify it
    if(!UserName){
        console.log(`Please enter a valid username `)
        return
    }
    return (`${UserName} just loged in`)
}
console.log(userlogin());
