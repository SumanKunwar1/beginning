function myUser(username){
    this.username=username;
}

function createUser(username,score, isLogedIn){
    myUser.call(this,username)//here without using call this will not call upper function one, and 
    //this means the upper this.username one this is the reference of our this 'this' 
    this.score=score;
    this.isLogedIn=isLogedIn;
}

const user=new createUser("suman",99,true)
console.log(user);