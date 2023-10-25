const marval=["Ironman","spiderman","Thor"]
const DC =["wonderwomen","wokanda","theRock"]
//push is not vary efficient way to marge array
// marval.push(DC)
// console.log(marval);
// console.log(marval[3]);

//another way is cancat here we are not getting array inside array but merge one
const marval1=marval.concat(DC)
console.log(marval1);

//another easy method
const allHero=[...marval,...DC]//this is spread way--glass example by Hitesh sir--use 3 dot only
console.log(allHero);

//if you have array inside array then use 'flat' function
const MyArray=[1,2,[4,3,5,[6]],9,[0,5]]
const MyArray_usable=MyArray.flat(Infinity);//instead of infinity we can give num value like 1,2
console.log(MyArray_usable);


console.log(Array.isArray("suman"));
console.log(Array.from("suman"));
console.log(Array.from({Name:"suman"}));//interesting -it will return empty array
//because we didn't instruct that either we have to made the array of keyword or value

//to convert multiple varible into array
let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3));
