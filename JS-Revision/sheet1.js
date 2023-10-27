"use strict"
// (21/Aug/2023)
// In this sesesion we will try to revise the concept of javascript in a detail way.
console.log("Hello world i am revising the concept");
alert("Abhishek")

// we should always try to use "use strict" keyword through which we can avoid the error occur during the declaration of the variable
var info1 = "shivam";
console.log(info1);
var newinfo2 = "kunal";  // var is keyword use to declare the variable in javascript
console.log(newinfo2);

// we have to follow some of the convention through which we can create the variable name.
// convention --- start with small letter or Camelcase
var firstName = "mera naam abhishek hai"
var second_name = "surname singh hai"
var third$name = "ye bhi convention hai"
var fourthname1 = "number starting me nahi ho sakta"
console.log(firstName);
console.log(second_name);
console.log(third$name);
console.log(fourthname1);
// usage of let keyword with the help of let keyword we can declare the variable but that declared variable cannot repeat its value or something else.
let name = "shanti lal";
name = "hari prasad";
console.log(name);// mostly we will use the let keyword to make the code secure and effective we cannot create the another variable once when we use the let keyword with the particular variable but we can chage the value too.

// declaring the constant
const newvalue = 3.15;  // we cannot change the value when we declare the value by using the constant
const secvalue = newvalue * 5;
console.log(secvalue);
// string indexing
let school = "baby land public school";
console.log(school.length);     // length of the string
console.log(school[5]);       // indexing of the string 
console.log(school[school.length-5]);  // last indexing of the string 
// useful methods in javascript like trim(),toUpperCase(),toLowerCase(),slice().
let avag = "         strong  ";
let result = avag.trim();
console.log(result);
let result2 = avag.toUpperCase();
console.log(result2);
let result3 = result2.toLowerCase();
console.log(result3);
let result4 = result3.slice(0,11);
console.log(result4);
// datatypes in javascript --- typeof is the method use to check the datatype 
let song = "mera pyaara bharat";
console.log(typeof song);
let addition = 32+34;
console.log(typeof addition);
// we can also change the type of datatype from one type to another
let song2 = "okk";
let numberis = +song2;
let subj = 23;
console.log(typeof (subj + ""));  // by using double inverted comma "" after or before the number we can convert the number into string.
console.log(typeof numberis); // by using +operator before the string we can convert the string into number
// string concatenation
let string1 = "hello";
let string2 = "abhishek";
console.log(typeof (string1 + " " + string2));
// template string  using  `${}`   this ` symbol is known as backtics
let caste1 = "Brahmin";
let details = "in majority";
let finaldetails = `In INDIA there are many castes but ${caste1} is most intelligent and also they are ${details}`;
console.log(finaldetails);
// here we will see some of the primitive datatype
let goods;
console.log(goods);
console.log(typeof goods);
let newgoods = null;
console.log(newgoods);
console.log(typeof newgoods);// Note: typeof null is equivalent to object because it is bug in javascript hence when we see the type of null it gives object.
let somegoods = BigInt(2344); // BigInt is a primitive datatype which is used to store large number in the variable
let somenewgoods = 2322223n;
console.log(typeof somegoods,somenewgoods);
// ternary operator
// let name = condition ? true_statement : false_statement
let age = 8;
let vote = age>=18 ? "yes he can vote" : "no you can't "
console.log(vote);
// prompt function --- it is used to take the input from the user.
let value = prompt("Enter your name: ");  // Note: it will always take the value as string.
console.log(typeof value,value,typeof +value);
// switch statement
let day = 0;
switch(day){
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    default:
        console.log("invalid day");
        break;
}
// do-while loop
let i = 3;
do{
    console.log("name kunal");  // this will run atleast once whether the condition is wrong or right.
    console.log(i);
    i++;
}while(i>=6);
// Arrays 
let arrayday = ["abhishek","kunal","vivek","shivam","shalini"];
console.log(arrayday)
console.log(arrayday[0]);
arrayday[2] = "apple";
console.log(arrayday);

arrayday.push("kartik");
console.log(arrayday);
console.log(arrayday.pop());
console.log(arrayday);

arrayday.unshift("avinash");
console.log(arrayday);
let valuearray = arrayday.shift();
console.log(arrayday);
console.log("the removed element is",   valuearray);