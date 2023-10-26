const myArr=[1,2,3,4,5,6,7,8,9,10]

//const newNum = myArr.map((num) => num+10)---//it return automatically
//but again if we use {} then we must use 'return' as well likewise filter
//console.log(newNum);

//chaining -- using multiple methods like map & map or map & filter in this way
//to perform multiple option 

const newNum = myArr
                    .map((num) => num*10)//generally map return value
                    .map((num) => num+1)
                    .filter((num)=> num >= 40)//and filter have almost condition like true/false
console.log(newNum);
