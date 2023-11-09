class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME IS: ${this.username}`);
    }
    static createID(){
        /*but suddenly when we are using static keyword its prevent allow this function use by the same 
        class or its child class or any other class*/
        return (`123`)//suppose this can be anything like 
    }
}
class Teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email;

    }
}
const suman=new user("suman")
suman.logMe();

const hitesh= new Teacher("hitesh","hitesh@gmail.com")
hitesh.logMe();

//here non of them can actually use createID because of this static keyword 