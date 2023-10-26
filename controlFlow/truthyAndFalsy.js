//these are the value that we assume that this value must be either true or false without evidence
const email='S@suman.ai'
if(email){//here we didn't compare just assume the value is true
    console.log("Got user email");
}else{
    console.log("Do not have user email");
}
/* truthy value
"0",'false'," " [],{}, function(){},and anyother which is not falsy

falsy value
false,0,-0, BigInt 0n, "", null, undefined, NaN */

const myArr=[]
if(myArr.length===0){//there is no direct way to check array we have to do this way
    console.log("array is empty array");
}

//checking object
const myObj={

}
if(Object.keys(myObj)){
    console.log("object is empty");
}