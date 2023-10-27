// in this session we will learn about the array and there other essential concept.

// array --- it is a collection of ordered data
let user = ['abhishek','vivek','shivam','avinash','ashish'];
console.log(user);
console.log(typeof user);// array is an 'reference datatype or object'.
console.log(Array.isArray(user));// this method is used to check the object is array or not.

user[2] = 'anurag';// here we changed the value of array at particular index position.
console.log(user);

let all = [1,2,4,'mango','apple','grapes','true',null,12.14,1/3];
console.log(all);

// array push and pop
// array push --- this method is used to add the element in the array list.
//Note: this method can change the original array list,which is not possible in the primitive datatype like string.
let myuser = ['mango','papaya','banana'];
myuser.push('grapes');
console.log(myuser);

// array pop --- this method is used to remove the last element of the array and remember that this will not only remove the last element but also return that element so we can use that element according to our need.
let my$user = ['abhishek','kunal','vikas','hardik','shivam'];
console.log(my$user);
my$user.pop();
console.log(my$user);
let a = my$user.pop();
console.log(a);

// unshift method --- this method is used to add the element at the starting index position of the array.
my$user.unshift('avinash','shalini');
console.log(my$user);

// shift method --- this method is used to remove the starting element of the given array.
my$user.shift();
console.log(my$user);
let b = my$user.shift();
console.log(my$user);
console.log(b);

//Note: push & pop method are faster than unshift & shift method,when we want to add or remove the element or value from the given array.
// Reference and Primitive datatype


// how to clone array and also how to concatinate the array
// by slice method
let array1 = ['kumar','shivam','jai','radha'];
let array2 = array1.slice(0); // 1st cloning technique by slice method

array1.push('riya','muskan');
console.log(array1 === array2);
console.log(array1);
console.log(array2);
// by concatination method
let array1$ = ['kumar','shivam','jai','radha'];
let array2$ = [].concat(array1$); // by concat method

array1$.unshift('kunal','anushka');
console.log(array1$ === array2$);
console.log(array1$);
console.log(array2$);

// by spread operator 
let array1_ = ['kumar','shivam','jai','radha'];
let array2_ = [... array1_];   // by spread operator method

array1_.push('shiv','ninja');
console.log(array1_ === array2_);
console.log(array1_);
console.log(array2_);

// slice method faster than other two cloning method.


// for loop in array
let myarray = ['riya','raj','vikas','muskan','vansh','ravi'];
console.log(myarray.length);  // length method in array
console.log(myarray[myarray.length-1]);
console.log(myarray);

myarray$ = [];
for(let i=0; i<=myarray.length-1;i++){
    console.log(myarray[i].toUpperCase());
}
for(let i=0; i<=myarray.length-1;i++){
    myarray$.push(myarray[i].toUpperCase());
}

console.log(myarray$);

// use const for creating the array
const $fruits = ['apple','grapes','orange','papaya'];
console.log($fruits);
$fruits.push('pineapple','apple');
console.log($fruits);
//$fruits = ['watermelon','melon','banana'];// this method cannot be use for assigning the value into the array
//console.log($fruits);

// Note: we will mostly use 'const keyword' for reference datatype and here we perform push or pop ,unshift or shift method.

// while loop in array
const _fruits = ['apple','grapes','orange','papaya'];
i = 0;
my_fruits = [];
while(i<= _fruits.length-1){
    console.log(_fruits[i]);
    my_fruits.push(_fruits[i].toUpperCase());
    i++;
}
console.log(my_fruits);

// for of loop in array --- for of will provide the value present on the given index no. of the array
const frus = ['apple','grapes','orange','papaya'];
for(let fru of frus){
    console.log(fru);
}

// for in loop in array  --- for in will provide index no.of the array
const places = ['agra','delhi','shimla','himachal','chandigarh']
for(let place in places){
    console.log(place);
}


// array destructuring  --- the value of array will be stored into the multiple variables
let mynewarray = ['agra','delhi','shimla','himachal','chandigarh'];

let [var_1,var_2, ,var_3] = mynewarray;    //[1st index value,2nd index value,index skipping,4th index value]

console.log("the destructure value at 0th index is",var_1);
console.log("the destructure value at 1st index is",var_2);
console.log("the destructure value at 2nd index is",var_3);

let mytakearray = mynewarray.slice(2); 
console.log(mytakearray);

// some concept regarding spread operator
const myary = [13,2,4];
const myary2 = [1,6,5,9];
//const mynew = [...myary,...myary2,..."2345"]; // number like 2348 do not iterable hence it will show an error.but number in inverted comma like "23435" these are iterable
//console.log(mynew);
//const mynew = [...12333]// not iterable
//const mynew = [...myary,...myary2,...'abjks'];// iterable
const mynew = [...myary,...myary2,...'12342'];// iterable
console.log(mynew); 