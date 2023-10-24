/*two type of memmory-- it what happens is let see the exmple number 1

stack memmory(premitive) and heap(non-premitive) memmory
*/
let myName="suman"
let surname=myName//first of all we assign myname value to surname
surname="kunwar"/*and again when we modify it, it will not change the original value because 
manupulation happening only in copy value not in original one*/
console.log(myName);
console.log(surname);

//try on the exmple of non-premitive

let user1={
    name:"suman",
    age:22,
    address:"naxal",
    current:"New York City"

}
let user2=user1
console.log(user1);
console.log(user2);
user2.address = "los Angel" /*here what happing is if we assign user1 on user2 both are getting 
reference from same heap so once you change the value on user2 you will change of user1 as well*/
console.log(user1);
console.log(user2);
