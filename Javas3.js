// in this section we will learn about datatype and type conversion.
// string;
let a = "abhisek";
console.log(a);
console.log(typeof a);
// number;
let b = 34;
console.log(b);
console.log(typeof b);
// boolean
let c = true;
console.log(c);
console.log(typeof c);

// if we want to change the type of string into number then it will become
let d = "string";
e = +d; // by adding the + sign before the string it will convert the string into numuber
console.log(typeof d);
console.log(typeof e);


let num = 2232;
num = String(num);
console.log(num);
console.log(typeof num);

// if we want to convert the number into the string then it become
let f = 22;
g = f + ''; // by adding the double/single inverted comma after the number then it will convert the number into string.
console.log(typeof f);
console.log(typeof g);


let my_data = "shiva the hero";
my_data_1 = Number(my_data);
console.log(my_data);
console.log(typeof my_data_1);

// string concatenation
let str_1 = "abhishek";
let str_2 = "singh";
let str_3 = str_1 + " " + str_2;
console.log(str_3);

// string template;
let user = "vivek";
let new$user = "economist";
console.log(`Hello everyone i am ${user} and i'm a ${new$user} currently work as chief secretary in Ministry of finance.`);
console.log(`i am a ${new$user} and my name is ${user}`);

// undefined
let myuser;
console.log(typeof myuser); // here we left the variable without defining anything
var my$user;
console.log(typeof my$user);
// const my_user; we cannot left the const variable without initializing the value
//console.log(typeof my_user);

// null
let newuser = null;
console.log(newuser);
console.log(typeof newuser); // if we check the type of null then it will show the 'object' and here object is act as reference datatype. note: 'in javascript null is just a bug.'


// BigInt 
let num$ = 1234;
let num$1 = BigInt(123);
let num$3 = 23n;
console.log(typeof num$);
console.log(typeof num$1);
console.log(typeof num$3);
// we can perform any operation of bigint it's just a primitive datatype so 
let total = num$1 + num$3;
let total$ = num$1 - num$3;
let total_$ = num$1 * num$3;
let total_1 = num$1 / num$3;
console.log(total,total$,total_1,total_$);

