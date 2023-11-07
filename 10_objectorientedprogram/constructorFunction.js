//constructor function like 'new' give new instance every time

function User(username, isSignedIn, logInCount){
    this.username=username;//here left hand one username with this keyword is varable and right one is argument one
    this.isSignedIn=isSignedIn;
    this.logInCount=logInCount;

    return this;

}
const userOne=new User("suman", true,120)
const userTwo = new User("Hitesh",false,100)
/* if you are not using newkeyword if gives you so many glitch
result as well as it eveytime while you are printing userTwo value will override userOne value
so which is very bad while multiple developer woking on same project so use 'new' keyword 
which will creat new instance for particular varibale which is unchange */
console.log(userOne);
console.log(userTwo.constructor);


