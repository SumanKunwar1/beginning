
const myNum=[1,2,3,4,5,6,7,8,9,10]

const newNum= myNum.filter((num) => num>4)
console.log(newNum); //it will return the value as well but we need to give the condition 
//but forEach does not return anything

//but if we right codition inside {} then it will return empty array to minimize that retun is must
/* const newNum= myNum.filter((num) => {
    return num>4}) */

//next example
const books=[ 
    {title:"Book-1",genre:"fiction",Publish:1981, Edition:2000},
    {title:"Book-2",genre:"non-fiction",Publish:1901, Edition:2006},
    {title:"Book-3",genre:"history",Publish:1988, Edition:2011},
    {title:"Book-4",genre:"scince",Publish:1950, Edition:2005},
    {title:"Book-5",genre:"Language",Publish:1900, Edition:2006},
    {title:"Book-6",genre:"fiction",Publish:2002, Edition:2004},
    {title:"Book-7",genre:"History",Publish:1980, Edition:2009},
    {title:"Book-8",genre:"non-fiction",Publish:1987, Edition:2000},
    {title:"Book-8",genre:"fiction",Publish:1988, Edition:2009},
    {title:"Book-9",genre:"scince",Publish:1991, Edition:2000},
    {title:"Book-10",genre:"fiction",Publish:2001, Edition:2020}
];

const userBooks= books.filter((book) => book.genre==="fiction")
const userBooks1=books.filter((book) => {
    return(book.Publish>=1990 && book.genre==="fiction")})
//console.log(userBooks);
console.log(userBooks1);
   