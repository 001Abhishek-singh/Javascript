// in this session we will learn about the functions 
// There are three methods throug which we can declare the functions in javascript
//(1) function declaration
//(2) function expression
//(3) function arrow


//(1) function declaration:
// 1st method to create the function.
// function functionname(){content};
// ex:(1)
function printvalue(){
    console.log("this is your stock market value......");
}
printvalue();

// ex:(2)
function toaddnumber(){
    const a = 23;
    const b = 43;
    const c = a + b;
    console.log(c);
}
toaddnumber();

// ex:(3)
function tocheckreturn(){
    return 34*3; // it will return the value but directly it will not display on the console.
}
//tocheckreturn(); // directly it will not print any value 
let myreturnvalue = tocheckreturn();
console.log(myreturnvalue); // either we store the return value into the variable and then display on the console
console.log(tocheckreturn()); // or it will directly call or invoke or run by using the console.log method.

// ex:(4)
function sum(a,b){// here a & b are the parameter of a function
    return a*b;
}
const value1 = sum(23,53); // here 23 & 53 are the argument of the function.
console.log(value1);
// function sum(parameter){content}
// during run-time or calling-time sum(passing argument);

// ex:(5)
/*function inputsum(num1,num2){
    num1 = +prompt('enter your first number: ');
    num2 = +prompt('enter your second number: ');
    let add = num1 + num2;
    return add;
}
let outvalue = inputsum();
console.log(outvalue);*/

// ex:(6)
/*function iseven(mynum){
    mynum = +prompt('Enter your number: ');
    if(mynum%2 === 0){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
iseven();*/

// ex:(7)
/*function numbertrack(array,target){
    num1 = +prompt('enter 1st number: ');
    num2 = +prompt('enter 2nd number: ');
    num3 = +prompt('enter 3rd number: ');
    array = [num1,num2,num3];
    for(let i = 0; i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
    
}
let and = numbertrack(0,6);
console.log(and);*/


/*function mytracker(myarray,tracker){
    let a = +prompt('enter your 1st number: ');
    let b = +prompt('enter your 2nd number: ');
    let c = +prompt('enter your 3rd number: ');
    let d = +prompt('enter your 4th number: ');
    let e = +prompt('enter your 5th number: ');
    myarray = [a,b,c,d,e];
    for(let i = 0; i<myarray.length;i++){
        if(myarray[i] === tracker){
            return i;
        }
    }
    return -1;
}
let output = mytracker(0,45);
console.log(output);*/


//(2) function expression 
// in this case we will create a function by assigning the function into the variable.
const learn = function(){
    console.log("i will learn aws training from t&p cell....");
}
learn();

// let function name(as variable) = function(){content};
// call the function by function name();

/*let create = function(){
    let a = prompt("Enter your name: ");
    if(a === "abhishek"){
        return ("its me");
    }
    else{
        return ('Oops try again....');
    }
}
let myvalue = create();
console.log(myvalue)*/; // this is an example of function expression.


//(3) arrow functions
const myarrow = () => { 
    console.log(`let's understanding about the arrow function...`);
}
myarrow();// this is an example of arrow function 
// declare 'let/const/var then function name = () => {content}
// call the function;

// ex(2): of arrow function
/*const myval = ()=>{
    let b = prompt('enter your name: ');
    if (b === 'vivek'){
        return('yes you are correct');
    }
    else{
        return ('Oops wrong');
    }
}
const storeval = myval();
console.log(storeval);*/

/*const iseven$ = () =>{
    let input = +prompt("choose your number: ");
    if(input %2 ===0){
        return(input,"is even");
    }
    else{
        return(input,"is odd");
    }
}
let stor = iseven$();
console.log(stor);*/

/*const iseven$ = (num1,num2) =>{
    for(let i = 0; i<num2;i++){
        console.log(i);
    }

    //let input = +prompt("choose your number: ");
    if(num1 %2 ===0){
        return(num1,"is even");
    }
    else{
        return(num1,"is odd");
    }
}
let stor = iseven$(12,7);
console.log(stor);*/

// now let's take an example to understand the all types of functions

/*function allinone(){
    console.log('yes i am function declaration');
}
allinone();*/ 

/*const allinone = function(){
    console.log('yes i am function expression');
}
allinone();*/

/*const allinone = () =>{
    console.log('yes i am function arrow');
}
allinone();*/

// as we can see the difference between the types of the functions
