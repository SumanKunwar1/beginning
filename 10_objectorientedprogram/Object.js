function multiplyBy5(num){
    return num*5
}
multiplyBy5.power=2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
/*remember everything in javascript is an object - that's why we are able to use . function like .power
or .prototype 
function is function also and object as well
string,array everything is a also object */

function createUser(username,score){
    this.username=username;
    this.score=score;
}
createUser.prototype.increment=function(){
    this.score++
}
 
createUser.prototype.Printme= function(){
    console.log(`The price is ${this.score}`);
}

const chai=new createUser("chai",25)
const tea=new createUser("Tea",250)

chai.Printme()