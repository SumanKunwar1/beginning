class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,subject){
        super(username);
        this.email=email;
        this.subject=subject
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}
const Suman= new Teacher("Suman Kunwar","SumanKunwar@Microsoft.com","Microsoft@123")
const ineash= new  user("ineash","ineash@gmail.com","ineash123")
Suman.addCourse()
ineash.logMe()
Suman.logMe()
console.log(Suman===ineash);
//even if you are doing Suman=== Teacher then again it gives false it because now whole class inherit 
//by Suman. it just come up by the instance of the call class teacher
console.log(Suman instanceof Teacher);
//since teacher is instance of user so suman is again the instance of user as well
console.log(Suman instanceof user);