async function getAllUser(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')// but there the data is in string format
        const data= await response.json();//it also take time to convert from string to json so we need to use await functin here too
        //await is basically used where time require to 
        console.log(data);
    } catch (error) {
        console.log("E:",error);
    }

}
//getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})