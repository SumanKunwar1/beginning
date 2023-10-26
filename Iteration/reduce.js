const myArr=[1,2,3,4]

const Total=myArr.reduce(function (accumulator, currentvalue) {
    //console.log(`accumulator: ${accumulator} & currentvalue ${currentvalue}`);
    return accumulator+currentvalue
},0)//instead of 0 we can right any thing or we can initialize globally and give reference as well
//console.log(Total);

//now using arrowfunction

const myTotal=myArr.reduce((accu, curr) => accu+curr,0)

console.log(myTotal);

//next example
const shopppingCart=[
    {Name:"JS course ",
    Price:2999},

    {Name:"Python",
    Price:3999},

    {Name:"Java",
    Price:5999},

    {Name:"Full Stack",
    Price:9999},

    {Name:"Backend",
    Price:6999}
]

const priceToPay=shopppingCart.reduce((acc, item) => acc+item.Price,0 )
console.log(priceToPay);