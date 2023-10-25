const myArr=[0,1,2,3,4,5,6]

console.log(["A",myArr])

const newArr1=myArr.slice(1,3)//it does not inclue last element and don't manupulate in original array
console.log(newArr1);
console.log(["B",myArr])
const newArr2=myArr.splice(1,3)//it change the original value by completely detaching those elemnt 
//including last index given 
console.log(newArr2);
console.log(["c",myArr])
