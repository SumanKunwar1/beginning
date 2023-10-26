const Programming=["python","java","C","C++","Ruby","Javascript","CSS"]
Programming.forEach( function (item){ // here no name of fuction because its callback fuction
    //console.log(item);
})
//arrowfuction
Programming.forEach((value) =>{
    //console.log(value);
})

//another alternative way
function printme(item){
    console.log(item);
}

//Programming.forEach(printme)//here we are just give refrence of the fuction not executing it

//another intereting way

Programming.forEach((item,index,arr) =>{
   // console.log(item,index,arr);
})

//when we have object inside array or likewise
//its little complicated thing so be read it carefully-very imp for database
const myCoding=[
    {name:"java",
    prefix:"j"},

    {name:"javascrit",
    prefix:"js"},

    {name:"Python",
    prefix:"Py"},

    {name:"Ruby",
    prefix:"rb"},
]
myCoding.forEach((item) =>{
    console.log(item.name);
})