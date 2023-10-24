console.log(2>=1)

//javascript allow the comprison between differnt data type
console.log("2">=1) // here simply it convert string into number and compare
//but while comparaing we have to make sure that we are comparing among same datatype--for good practise
console.log(null>0)
console.log(null==0)
console.log(null<0)
//thease two value only return true and rest of other return false
console.log(null>=0)
console.log(null<=0)

//but if we try 'undefined' with anything anyhow it will give you false only

//"=== - strict check " it will check the datatype as well
console.log("2"==2) // it will give true
console.log("2"===2) // it will give false because it will check the datatype as well
