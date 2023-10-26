//for of loop
/*for (const iterator of object) {-this is not only for object and don't confused with object, here
object means anything like object, array, string
    
}*/

const myArr=[1,2,3,4,5,6] 
for (const i of myArr) {
    //console.log(i);
}

const greet="Hello world"

for (const letter of greet) {
   // console.log(letter);
}

//maps- known for unique value and order are not mismatchaed 
const map=new Map()
map.set('NP', "Nepal")
map.set('NP', "Nepal")//if we duplicate the value then again map will print once only 
map.set('Fr',"France")
map.set('JP', "japan")
map.set('MY', "Myanmar")


//console.log(map);
for (const anyname of map) {//this is for key and value
    console.log(anyname);
}

//for key or value only
for (const [key,value] of map) {
    console.log(key, ':-',value);//here you can input key or value only for only key and value
}

//for of loop at object- for of loop do not work for object- it treat it as not iterable
// const mygame={
//     game1:"mario",
//     game2:"spiderman",
//     game3:"football"
// }