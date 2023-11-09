//everything happen after ES6 

class user{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptpassword(){
        return`${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`;
    }

}
const chai=new user("chai","chai@fb.com","123")
console.log(chai.encryptpassword());
console.log(chai.changeUsername());

//behand the scene how is actually working- make sure to close comment upper code to see the 
//execution of behand the scene

function User1(username, email, password){
    this.username=username;
    this.email=email;
    this.password=password
}

User1.prototype.encryptPassword=function(){
    return`${this.password}abc`
}
User1.prototype.changeUsername=function(){
    return`${this.username.toUpperCase()}`
}

const tea =new User1("tea","tea@gmail.com","Tea@123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
    
