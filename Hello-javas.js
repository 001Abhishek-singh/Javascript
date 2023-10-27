"use strict"; // this ' "use strict" ' word will be use to strict the programmer to declare the variable without using the 'var' keyword.
//(07/06/23) Today i am going to write my first code in javascript.
console.log('HELLO WORLD');
console.log('Feeling glad to learn new scripting language which is essential for web development.')

// assigning the variables in javascript
var name = 'Vivek singh';// declaring the variable by using the var keyword
console.log(name);
// 1stly declare the 'var' then 'variable name' = assing the value in variable
name = 'Abhishek singh' // we changed the value of variable
console.log(name);

// we can also assign the variable without using the var keyword.

var user = "kunal kushwaha";
console.log(user);
var user = "shalini sharma";
console.log(user);


let firstName = 'kumar';
console.log(firstName);
let Firstname = 'saini';
console.log(Firstname);

// convention for assigning the variable name.
//(1) we cannot start with the number ex: 1,12,....
//(2) we can use only underscore_ or dollar symbol....
//(3) we cannot use spaces
//(4) Note: start with small letter and use camelCase

var valid_1 = 124;
console.log(valid_1);
var new$valid_1 = 123 + 34;
console.log(new$valid_1);
var goodName = 'avinash';
console.log(goodName);

// here we will learn about the "let keyword"
let username = "shivam sharma";
console.log(username);
// let keyword is used to declare the variable and once if we declare the variable name then we cannot repeat the variable name in case of let keyword.
// we cannot repeat the variable name when we use the 'let keyword' for declaring the variable.
let myname = 'peterson';
console.log(myname);
let my_name = "rosy";
console.log(my_name);


// declare constant(we cannot change the value of constant)
const pi = 3.14; // here we will called the pi as constant,we will not pronounce pi as variable.
console.log(pi);

const num = 12344321; // num called/declare as constant not be called as variable.
console.log(num);

// String Indexing : we will solving the problems related to indexing.
let surname = "kohli";
console.log(surname[4]);
console.log(surname[0]); // 0 & 4 is the index number.

console.log(surname.length); //this is used to finding out the length of the variable's value.
console.log(surname[surname.length]);
console.log(surname[surname.length-1]); // this is used to finding out the last value of the variable at last index no.

let pic = "My picture is good and awesome with perfect short.  .";
console.log(pic);
console.log(pic[pic.length-1]);// last index = total length-1
console.log(pic[pic.length-8]);
console.log(pic.length);

