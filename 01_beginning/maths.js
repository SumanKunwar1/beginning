console.log(Math);
console.log(Math.abs(4));
//for round up any value
console.log(Math.round(4.5));
//for upper round up
console.log(Math.ceil(4.2));
//for floor round up
console.log(Math.floor(4.9));
console.log(Math.max(5,4,1,9,0));
console.log(Math.min(5,4,1,9,0));

//this property is very important to get the ramdom value specially while we are designing game like ludo
//it give the value between 0 to 1
console.log(Math.random());
//to get the value between 1 to 10
console.log((Math.random()*10) + 1);//value can be zero so to avoid that we do '+1'

console.log(Math.floor(Math.random()*10) + 1);

//for eg. if we need value among any ranges than we can apply following formula
const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1) + min));
