// parameter destructuring
const val = {
    firstname:"shivam",
    surname:"kumar",
    age:23
}
// function myobj(obj){ // this is a way to destructure the parameter but we will see some more efficient way.
//     console.log(obj.firstname);
//     console.log(obj.surname);
//     console.log(obj.age);
// }
// myobj(val);
function myobj({firstname,surname,age}){
    console.log(firstname);
    console.log(surname);
    console.log(age);
}
myobj(val);  // correct way to destructure the object when given as parameter.

// callback function --- function calling function(we will give the function as a input to another function as a argument when we call the first function).
function myfun(survival){
    console.log("hello world i am myfun function....");
    console.log(survival);
}
function myfun2(callback){
    console.log(callback);
    callback("hero");
    console.log("i am myfun2");
}
myfun2(myfun) // here function is giving as input to the myfun2() and the parameter name is mostly use as callback.

// function returning function
function val1(){
    function val2(){
        console.log("super hero");
    }
    return val2; // here we are returning the 2nd function into the 1st function.
}
const result = val1(); // result act as function because the first function val1() assign in it.
console.log(result());

const subvalue = () =>{
    name = "abhishek";
    surname = "singh";
    function subvalue2(){
        console.log(name,"is good boy & his surname is",surname);
    }
    return subvalue2;  // returning the subvalue2 as a function.
}
const subresult = subvalue(); // subresult act as function because they will give the function as a value.
console.log(subresult());

// methods in array (1) forEach method
const myaray = [
    {subject:"english"},
    {subject:"physics"},
    {subject:"chemistry"},
    {subject:"geology"}
]
function forcallingary(){
    console.log(myaray);
}
myaray.forEach(forcallingary);// here forcallingary gives as callback function inside the forEach method.

myaray.forEach(function(value,index){
    console.log(value.subject," & index is ",index);
    
})
myaray.forEach(value=>{
    console.log(value.subject);
})

// map method  --- NOTE: this map method has two unique feature like (1) it will always give return statement (2) it will give new array (3) if we use console.log method then it will give array of undefined value.
const newary = [
    {firstname:"Abhishek",surname:"singh"},
    {firstname:"Vivek",surname:"singh"},
    {firstname:"Avinash",surname:"kumar"},
    {firstname:"Ashish",surname:"ranjan"}  // creating an array of object
]
function value(subvalue){
    return subvalue;    // creating a value which return the statement.
}
let store = newary.map(value);    // the map method give the newarray hence we store in a variable called store
console.log(store);

let newstore = newary.map(function(aaa,index){
    console.log(aaa.firstname , aaa.surname ,"& index is ",index);  // using the map method by anonymous function method
})

let newsubstore = newary.map((sub,newindex)=>{
    console.log(sub);
    console.log(newindex);
})

// filter method --- it will always return the boolean statement and also it gives the new array everytime.
let myarray = [1,2,3,4,5,6,7,8];
function subarray(input){
    return input % 2 ==0 ;
}
let resultis = myarray.filter(subarray);
console.log(resultis);

let mysresult = myarray.filter(index=>{
    console.log(index);  // we created a arrow function.
})

// reduce method --- it will give the reduce value of the array and it also return the value.
let myaub = [1,2,3,4,5,6];

let finalresult = myaub.reduce((accumulator,result) =>{   // accumulator + result = return (accumulator always start with initial value and then increament one by one acc. to situation) 
    return accumulator + result;
},121)

console.log(finalresult);

// sort method --- it will change the value of array and also it will give the final result acc. to the ascii value of the number,character or symbol.
const newnumber = [5,3,65,42,533];
const sunnew = ["kumar","aaa"," singh ","abha ","Harshit","Girl"]
const takeselfout = sunnew.sort((love) =>{return love;})
console.log(takeselfout);

const takeitout = newnumber.sort((a,b)=>{
    return a-b;  // this will arrange the array in terms of ascii value.
})
console.log(takeitout);  

// if a-b > 0 (positive value) then we put (a as b & b as a) this will arrange in ascending order
// if b-a < 0 (negative value) then this will arrange in descending order

// find method in array  --- use to find the element is present or not.
let arrayval = ["abhishek","shivam","vivek","cow","ship"]; // creating an array
function check(selfval){   // creating an function
    return selfval.length === 4;   // returning the value of the function
}
let selffinal = arrayval.find(check);  // using the find method 
console.log(selffinal);

const subanswer = arrayval.find((myval)=>{return myval.length === 5;})
console.log(subanswer);

// every method --- it will see the condition get satisfied by every element or not if yes then it gives true otherwise give false.
const subnewarray = [
    {productId:1,productprice: 23000},
    {productId:2,productprice: 23700},  // creating an array
    {productId:3,productprice: 13000},
    {productId:4,productprice: 33000},
    {productId:5,productprice: 20000}
]
function accept(myinput){   // creating a function where parameter is given
    return myinput.productprice >10000;   // check the condition if all condition become true then only it will gives true otherwise it gives false
}
const ans = subnewarray.every(accept); // using the every method.
console.log(ans);

const answer = subnewarray.every(socheck=>{socheck.productprice > 30000;}) // using arrow function to check the value.
console.log(answer);

// some method --- it will check the condition is true or not atleast for some values if they are true then it gives True otherwise it gives False.
const sunewarray = [
    {productId:1,productprice: 23000},
    {productId:2,productprice: 23700},  
    {productId:3,productprice: 13000},
    {productId:4,productprice: 33000},
    {productId:5,productprice: 20000}
]
function subaccept(mynewinput){   
    return mynewinput.productprice <15000;   
}
let submit = sunewarray.some(subaccept);
console.log(submit)

let newsubmit = sunewarray.some(valuefor=>{return valuefor.productprice < 20000;})
console.log(newsubmit);

// fill method --- it is used to fill the array from starting position to ending position.
let acceptval = new Array(7);  // creating the constructor of Array having size 7.
acceptval.fill(-1);   // by using the fill method we have fill the value by -1 to the array of size 7.
console.log(acceptval);

const acceptnew = [1,2,3,4,5,6,7,8,9,10]
console.log(acceptnew);
console.log(acceptnew.fill(8,0,6));

// splice method --- this method is used to delete or insert the item from a particular index in a Array.
// Arrayvariablename.splice(starting index,deleted item ,inserted item);
const takesome = [1,2,3,4,5,6,7];  // original array
console.log(takesome);  // print of original array
const secure = takesome.splice(2,3);  // array of deleted item
console.log(secure);  // print of deleted item
console.log(takesome);  // the array after the deletion

takesome.splice(1,0,"item1","item2","item3","apple"); // inserting the items in the list after from 1st index place.
console.log(takesome);

// iterables --- iterables wo hote hai jinpe ham for of loop ska lage for ex: string,array,etc.  NOTE: object iterable nahi hai.
// array like object --- jinke pass length property hoti hai aur jinko ham index se access kar sakte hai wo sabhi array like objects hoti hai for ex: string
const meravalue = "abhishek";
console.log(meravalue.length);
console.log(meravalue[3]);

for(let char of meravalue){
    console.log(char);
}
