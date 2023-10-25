//it calculated form junuary 1970
const Mydate=new Date()
console.log(Mydate); 
//to make date more readable select the appropriate one
console.log(Mydate.toString());
console.log(Mydate.toDateString());
console.log(Mydate.toISOString());
console.log(Mydate.toJSON());
console.log(Mydate.toLocaleDateString());
console.log(Mydate.toLocaleString());
console.log(Mydate.toLocaleTimeString());

console.log(typeof Mydate)
//we can create date as well
const myCreatedDate=new Date(2023,0,12)//date started from 0 in javascript
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toString());
//for specific yy-mm-dd value
const date1=new Date("2023-02-03")
console.log(date1.toString());

//this timestamp is used for like KBC fastest finger first to check how give the answer first 
let myTimeStamp=Date.now()//we can do using new keyword as well
console.log(myTimeStamp);//value is one milisecond
console.log(Math.floor(Date.now()/1000));
//to astract specific value from date like year, month, hour etc
let newDate= new Date()
console.log(newDate.getMonth()+1);//here we did +1 because it start from '0'

//another important feature of 'tolocalestring'

console.log(Mydate.toLocaleString('default',{
    weekday:"long"
}));