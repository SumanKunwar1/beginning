const num=23
const num1=new Number(100)

console.log(num);
console.log(num1);

console.log(num1.toString().length);
console.log(num1.toFixed(2));

//next important property we have 'toprecision' look what it does
num2=123.982
console.log(num2.toPrecision(3));//use very carefully 

// to bring commas on any number for better readability we are doing 
num3=10000000
console.log(num3.toLocaleString());//but in us standard by default and we can it as well
console.log(num3.toLocaleString('en-IN'));//for indian standard