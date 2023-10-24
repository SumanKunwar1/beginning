//Premitive - 7 types - also known as call by value
/*
1.Number
2.String
3.boolean
4.null
5.undefined
6. symbol
7. bigInt - scintific or very big value not handled by number */
const id=Symbol('123')
const nextid=Symbol('123')
console.log(id==nextid)//to make unique even we pass same value

// bigInt
const bigNumber=13452526565680248529485490585475294752945274957249524759457945n
console.log(typeof bigNumber)

//javascript is dynamically type language it can assign value by itself- we don't need to werite sting or number etc.,


//2. Reference type OR non-premitive value
/*
1. Array
2. Object
3. Function */


//array

let heros=["Ironman","batman","wonderwomen","wokanda"]

//object
let myDetail={
    name:suman,
    Age:21,
    address:kathmandu
    //in object we can store different differnt type of data
}

//basic function
const myFuction=function(){
    console.log("Hello World ")
}