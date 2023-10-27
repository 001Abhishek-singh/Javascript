//  In this session we will learn about various topics of javascript
// object inside the array
const myary = [
    {name: "abhishek",surname:"singh",age:23},
    {name:"vivke",surname:"singh",age:19},
    {name:"shivam",surname:"kumar",age:24}
]
for(let user of myary){
    console.log(user);
}
// we will also learn nested destructuring in objects under array.

// to create a function in javascript
function learngo(){
    console.log("hello world......");   // this is an example of function declaration.
} 
learngo();  // NOTE: NaN means Not a Number

const value = function(){    // this is an exmaple of function expression.
    console.log("mylearing is javascript which is a scripting language.....");
}
value();  

// now we will learn about the arrow function
const newfun = () => {
    console.log("hello world....");    // method to create arrow function in javascript
}
newfun();                    

const twoSum = (number1,number2) => {
    return number1 + number2;
}
const result = twoSum(23,53);
console.log(result);

const val = () => {
    console.log("ja ja pyaar kar pyaar kar re.....");
}
val();

const subvalu = () => {
    console.log([{name:"abhishek"},{surname:"singh",age:"23"},{gender:"male",class:"btech"}]);
}
subvalu();

const sumtwoal = number =>{  // if only one parameter is present inside the function then we do not need to use small bracket for assigning the parameter into the brackets.
    return number;
}
const finalraesult = sumtwoal(24);
console.log(finalraesult);
  
const subtract = take => take-2;  // this is a single line arrow function 
// const variable_name = parameter =>(arrow symbol) condition;
console.log(subtract(13));

const sub2 = (take1,take2,take3) => take1*take2*take3;  // single line arrow function with multiple parameter in a function.
console.log(sub2(12,8,4));

// hoisting is a behaviour of the declare function in which we can call the function before the declaration or initialization.
hello();
function hello(){  // this behaviour is known as hoisting and it is only possible in declare funtion 
    console.log("good evening to everyone....");
}
// NOTE: we cannot hoist or call the function before the initialization when we form the function by expression or arrow.it will give the error or referencetype error.
console.log(valuesub);
var valuesub = "hello world"; // if we use the var keyword to declare the variable then if we call the variable before the dclaration then it will give undefined as a output but in case of let & const it will give the error.

// Now we will see the function inside the function
const Fun1 = () => {
    const Fun2 = () =>{
        console.log("I am 2nd function which is present inside the Fun1");
    }

    const Fun3 = (num1 ,num2) => {
        return num1* num2;
    }

    const Fun4 =function(){
        console.log("this is 4th function....");
    }

    Fun2();
    let result = Fun3(12,43);
    console.log(result);
    Fun4();
    console.log("this is final call from Fun1");
}
Fun1();

// lexical environment  (lexical means nearby surrounding)
const myval = "abhishek";
const neew = ()=>{
    function role(){
        let newroole = function(){
            let marks = 234;
            console.log(myval);
        }
        // console.log(marks); we cannot access the marks outside the block scope or outside the function because scope statement is present.
        console.log("go to hell or go to jell");
        newroole();
    }
    role();
}
neew();

// block vs function scope where 'let' & 'const' are block scope  and 'var' are function scope.
{
    let name = "abhishek";
    const surname = "singh";
// we can only access the let and const inside the block scope 
    console.log(name,surname);
}
// console.log(name,surname); we cannot access the let & const outside the block scope.
{
    var age = 23;  // function scope can be accessed from outside the block but only if they are var keyword declaration.
}
// this  var can be access outside the block scope hence it is known as function scope. 'var' is a function scope.
console.log(age);
// default parameter inside the function
function addition(num1,num2 = 0){ // here we are providing the default value to the num2 which is equal to zero and hence now it will not give the error when by mistake if we forget to provide the 2nd argument.
    return num1+num2;
}
const answer = addition(12);
console.log(answer); // we can also do like this
function newaddition (num1,num2){
    if(typeof num2 === "undefined"){
        num2 = 0;
    }
    return num1 * num2;
}
const newanswer = newaddition(5); // here 5 is the argument of num1 parameter.
console.log(newanswer);
// rest parameter inside the function
function create(num1,...num2){
    console.log(num1);
    console.log(num2); // it will provide the array of rest parameter in the output.
    return num1 + num2; // this will concatinate the value of num1 & initial value of num2.ex: 122 => 12 + 2 -- 122
}
const ans = create(12,2,23,4,3,5,7);
console.log(ans); // rest parameter can be written by '...parameter' it will store the remaining value in the form of array. 
