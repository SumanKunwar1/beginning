class user{
    constructor(email, password){
        this.email=email;
        this.password=password;
    }

    //user of getter and setter 
    //for example we don't wanted anyone to use get our password- then we can use getter & setter
    get password(){
        return`${this._password.toUpperCase()}SUMAN`
    }
    set password(value){
        this._password=value
        /*if we are using password what exatly same define in constructor it gives us error of maximum
        stack limit exceed because both constructor and setter value try to define password so the 
        best practise it to use _password and any similar other name ofter _anyname*/
    }
    //similary we can set the property of email also
    get email(){
        return (this._email.toUpperCase())
    }
    set email(value){
        this._email=value;
    }
}
const suman=new user('s@suman.ai','abc');
console.log(suman.password);
console.log(suman.email);
