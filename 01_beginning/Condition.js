let score= "33"
console.log(typeof(score))

let ValInNum=Number(score)
console.log(typeof(ValInNum))
console.log(ValInNum)
/*for example if we write non numric value in and try to convert it to number it will convert but gives va
value of NaN(not a number) but while try to figure out what type is this it will give output of number*/
let score1= "33a"
console.log(typeof(score1))

let ValInNum1=Number(score1)
console.log(typeof(ValInNum1))
console.log(ValInNum1)
//if our value is null then
let a= null
console.log(typeof a)
//if we convert it into number and return the value it will give 0 
let b=Number(null)
console.log(typeof b)
console.log(b)
//and incase of boolean if we give true and parse into number return 1 and for false return 0
let c=false
console.log(typeof c)
let d=Number(c)
console.log(typeof d)
console.log(d)
//we can also convert number to boolean as well with 0 and 1 
//even you we write empty return false and if you give some other value return true
let isTrue=1
let booleanisTrue= Boolean(isTrue)
console.log(typeof booleanisTrue)
console.log(booleanisTrue)
