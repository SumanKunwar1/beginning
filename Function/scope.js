/* we avoid to use var because of its problem regarding scope for eg if we declre a var element on a
block it can be accesible form outside the black as well which is somehow problemmatic thats why we 
avoid to use 'var' instead of that we use 'let' and 'const' */

function one(){
    username="suman"
    function two(){
        website="Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

function addOne(num){
    return num+1

}
//console.log(addOne(5));

const addTwo= function (num){//this is called experession -variable is very powerful in javascript
    return num+2

}
console.log(addTwo(5));

