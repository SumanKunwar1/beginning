/*the constant of math like math.pi or math.e - we cannot change because
the value is set as a writeble: false, enumerable false, and configurable false in very stickly
so we can nont alter the value of those parameter 
and also we can make any of of function also constantl by using it */
const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
//note one this that we are getting property of a parameter of object not on object directly
console.log(descriptor);

// let try on our own property
const chai={
    Name:"Ginger Chai",
    Price: 250,
    isAvailable:true,
    ordercai: function(){
        console.log("chia baneko xain");
    }
}

// in this way we can set the property of our values as wel
Object.defineProperty(chai,"Name",{
    // writable: false,     -- just doing comment for doing iteration
    // enumerable: false,
    // configurable: false
})

// To get the value of any of the property of the class
console.log(Object.getOwnPropertyDescriptor(chai,"Name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
        console.log(`${key} : ${value}`);

        // if i did false in enumerable :false than it will not be enumerable
    }
    
}