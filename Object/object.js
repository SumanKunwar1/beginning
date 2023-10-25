/*there is two ways to declare an object 
1. construct method
2. literal method
difference:
consstruct mathod make object singleton but literal don't-no difference in time and space complexity
*/
//literal
//declaring symbol and taking it as a object keyworkd
const mySym= Symbol("key1")
const JsUser={
    Name:"Suman",
    Age:18,
    [mySym]:"myKey",//don't forgot to use [] otherwise it treated as a string
    Address:"Dubai",
    "current Address":"New York City",
    Gmail:"Suman@google.com",
    isLogin:false,
    DaysLogin: ["Monday","saturady","tuesday"]
}
console.log(JsUser.Address);
//another way
console.log(JsUser["Address"]);/*why this method is important because if we declare any keyword in 
string way it is not possible to get using . function*/
console.log(JsUser["current Address"])
console.log(JsUser[mySym]);

//change value
JsUser.Gmail="suman@microsoft.com"
console.log(JsUser.Gmail);
//we can make Object unchangeble as well
//Object.freeze(JsUser)
JsUser.Gmail="suman@chatgpt.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js User");
}
JsUser.greeting1=function(){
    console.log(`Hello Js User, ${this.Name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting1());