const user={
    name:'suman',
    logInCount:8,
    isSignedIn:true,

    getUserDetail:function(){
        //console.log("got user detail from database");
        console.log(`Username:${this.name}`);//here this keyword is for current contaxt without using 
        //this keyword it system through an error because this function is unknown about any outside variable
        // if we print just this keyword it gives whole detail of current context specially in this case
        // all the value of user 
        console.log(this);
    }
}
console.log(user.name);
console.log(user.getUserDetail());