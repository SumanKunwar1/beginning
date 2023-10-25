const myArr=[0,3,4,5,3,2,7]
const myHeros=["Ironman","Spiderman","batman"]

//next way to declare array
const myArr1=new Array(1,2,4,5,6,3,8)
console.log(myArr1[1]);
//to add value at the end 
myArr.push(6)
console.log(myArr);
//to remove end value use 'pop'
myArr.pop()
console.log(myArr);
//unshift is not very important due to of time complexity but it used to add element at start
myArr.unshift(9)
console.log(myArr);
//to remove first element
myArr.shift()
console.log(myArr.indexOf(2));

//to convert string into array
const newArr=myArr.join()
console.log(newArr);
console.log(typeof(newArr));