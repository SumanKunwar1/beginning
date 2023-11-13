
//this type of code used very rere in industary now days
const user={
    _email:'suman@TCS.com',
    _password:"123dfg",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}
const tea=Object.create(user);
console.log(tea.email);//we define variable as _email but we can access email as well due to its defined in get/set
