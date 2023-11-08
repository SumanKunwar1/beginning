let myHero=["thor","Spiderman"]

let heroPower={
    thor:"Hammer",
    Spiderman:"web",

    getSpidermanPower:function(){
        console.log(`The Spidey Power is ${this.Spiderman}`);
    }

}

Object.prototype.suman=function(){//the this function is present on both object and array because it applied on object
    console.log("suman is present in all object");
}

Array.prototype.heysuman=function(){
    console.log("This is present only in array because it applied on array 'array.prototype' ");
}

myHero.suman()
heroPower.suman()
myHero.heysuman()
//heroPower.heysuman()-it throw error because heysuman is only only for array and heropower is and object 

//Inheritance --older version 

const user={
    name:"suman",
    email:"suman@google.com"
}
const teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    MakeAssignment:"JS Assignment",
    fullTime:true,
    __proto__: TeachingSupport // this double _proto double_ help to inherite all the property of the teacheingsupport

}
//we can also use the __proto__outside the bracket as well

teacher.__proto__=user;

//Now this is an modern syntax 
Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername="sumanKunwar"

String.prototype.truelength=function () {
    console.log(this);
    console.log(`the true length of the string is ${this.trim().length}`);
}
anotherUsername.truelength();
"SumanMaheshwori".truelength();
"LBEFCollage".truelength();
