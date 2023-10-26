function calculatePrice(...num1){//'...' is call rest & spread operator here but here we called rest 
    //it enable us to take multiple argument value of single parameter and return in array
    //if we write as (function calc(val1, val2,...num1))-then here first 2 value occupaided by val1&2 and rest of value on array
    return num1;
}
console.log(calculatePrice(200,400,500));

//handle object

const user={
    username:'Suman',
    price:1000
}

function handleUser(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleUser(user)

//for array
const myArr=[23,54,65,76,85,26,6]

function returnArray(getArray){
    return getArray[1];
}
console.log(returnArray(myArr));