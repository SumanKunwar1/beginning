//combine object
const obj1={a:1,b:2}
const obj2={c:3,d:4}

//const obj3={obj1,obj2}-it encounter same problem as array like object inside another object
const obj3=Object.assign({},obj1,obj2)//empty braclet are optional but its good practise
//{} is to make this as a target and then treated other as source 
console.log(obj3);


//most used is 'spread' method
const obj4={...obj1,...obj2}
console.log(obj4);


const darazUser={
    name:"suman",
    email:"suman@gmail.com",
    contat:9034934934,
    Address:"London",
    CurrentAddress:"New York City"
}
console.log(Object.keys(darazUser));
console.log(Object.values(darazUser));
console.log(Object.entries(darazUser));
console.log(darazUser.hasOwnProperty('IsLogged'));