//forin
const myObj={
    Js:"javascript",
    Py:"Python",
    CPP:"C++",
    Rb:"Ruby"
}
for (const key in myObj) {
    //console.log(`${key} is shortcut for ${myObj[key]}`);
}

const Programming=["python","java","C","C++"]

for (const key in Programming) {
    //console.log(`${key} index is for ${Programming[key]}`);
}

//for map -here map is not iterable it can be done through for of loop 
// const map=new Map()
// map.set('NP', "Nepal")
// map.set('NP', "Nepal")//if we duplicate the value then again map will print once only 
// map.set('Fr',"France")
// map.set('JP', "japan")
// map.set('MY', "Myanmar")

// for (const key in map) {
//     console.log(key);
// }