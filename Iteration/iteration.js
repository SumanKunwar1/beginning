//for loop
// for(i=1; i<=10; i++){
//     console.log(i);
// }
//for getting value of array
const myArr=[12,43,23,65,45, 34,25,90,67]
for(let i=0; i <myArr.length; i++){
    if(myArr[i]==45){
       // console.log("It is the centermost number ");
    }
   // console.log(myArr[i]);
}

for (let i = 1; i < 5; i++) {
    // console.log(`The outer Loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        
            // console.log(`The inner Loop value: ${j} and Outer value ${i}`);
            // console.log(`${i} * ${j} = ${i*j}`);
    }

    
}
//keywords--break & continue
for (let i = 1; i <=20; i++) {
    if(i==5){
        //console.log(`detected 5`);
        break //directly go outside the scope
    }
   // console.log(`value of i is ${i}`);
    
}
for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log(`detected 5`);
        continue //skip once but not going out side the scope 
    }
    console.log(`value of i is ${i}`);
    
}