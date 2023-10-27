// javascript revision
// in this session we will revise the concept related to javascript like cloning
let myarray = [1,3,23,4,5];
let myarray2 = myarray.slice(0); // first method to clone the array by slice method

let myarray3 = [].concat(myarray); // second method to clone the array by concat method

let myarray4 = [...myarray] // third way to clone the array by using the 'Spread operator'

console.log(myarray);
console.log(myarray2);
console.log(myarray3);
console.log(myarray4);

myarray.unshift('tera naam');
console.log(myarray);

// Mostly we will use either 'for' or 'for of' loop with arrays.
let subarray = ["shivam","shakti","shiv"]
for(let value of subarray){  // for of gives the value of the subarray.
    console.log(value);
}
for(let value in subarray){ // for in gives the index number of the subarray.
    console.log(value);
}

// array destructuring 
const takearray = ["janam","sanam","radha","shyam"];
let[val1,,val2,...newtakearray] = takearray;  // here the value of ...newtakearray behave like a array.slice() method.
// val1 = 1;
// console.log(takearray.slice(2)); this can be solve by another way too
console.log("the value of val1 & val2 is",val1,val2);
console.log(newtakearray);
// objects
let value = {
    name:"abhishek",   // these name,age,gender are called as key or properties of the object.
    age:23,
    gender:"male"
}
console.log(value);
console.log(value.name,value.age,value.gender); // obtaining the value by dot notation
console.log(value["name"],value["age"],value["gender"]); // obtaining the value by bracket notation
value.education = "mbbs";  // assigning the value by dot notation
value["occupation"] = "doctor"; // assigning the value by bracket notation
console.log(value);   // taking the value as object output
// difference between dot and bracket notation
let name = "name";  // first difference between dot & bracket notation.we can assign the key to object directly by using bracket notation 
let myobj = {
    surname: "singh",
    age:23,
    book:"learn to do great"
}
myobj[name]  = "kunal";
console.log(myobj);

let myobj2 = {
    name : "shivam",
    surname : " skati",
    "book mela" : "haridwar"
}
console.log(myobj2["book mela"]);
console.log(myobj2);
// iterating the object(for this we will use two things (i) Object.keys (ii) for in loop)
let crarray = {
    song: "sun baliya",
    dance: "hip hop",
    voice: "melodious",
    performance: "national level"
}
console.log(crarray); 
// for in method for iterating the object
for(let keys in crarray){
    console.log(keys); // it will give the key as a value from the object
    console.log(crarray[keys]); // it will give the value of keys from the object.
}
// Object.keys method for iterating the object
console.log(Object.keys(crarray)); // this will give the array of keys object
for(let keyu in crarray){
    // console.log(Object.keys(crarray[keyu])); NOTE: this is giving something strange
    console.log(keyu); // providing the index value of keys array
    console.log(`${keyu} : ${crarray[keyu]}`); // give the proper key : value from the object
}
for(let mykeys of Object.keys(crarray)){
    console.log(crarray[mykeys]); // this will give the value of the key
    console.log(mykeys); // this will give the key as a value from the object
}
// computed properties --- this properties is used to provide the key & value to the object directly by using the variable.
const key1 = "name";
const key2 = "surname";
let value1 = "abhishek";
let value2 = "singh";

const obj = {
    [key1] : value1,
    [key2] : value2  // through this we can compute the property of object.
}
console.log(obj);
// we can also compute the property of the object by this way 
const newobj = {};
const newkey1 = "age";  // creating the key for the object
const newkey2 = "gender";
newobj[newkey1] = "23";  // assigning the value into the key of object.s
newobj[newkey2] = "male";
console.log(newobj);
// Spread operator - in case of string.
const myval = [..."abhishek"]; // this will spread the string value or iterate it into individual character.
console.log(myval);
// Spread operator in object.
const takeobj = {name: "vivke",surname: "singh"};
const takeobj2 = {age: 23,gender: "female"};
const result = {...takeobj,...takeobj2,key3:"chula"};
console.log(result);
const newobj2 = {...["bhagat","azaad"]};
const takeobjbsj = {..."abcdefghijk"};  // it will give the index no. as a key and iterable answer as a value.
console.log(takeobjbsj);
console.log(newobj2);

// object destructuring
const silver = {fullname: "vivek",surname: "singh",sex:"male",theme:"orange-blue"};
// let suhn = silver.name;
// console.log(suhn);         // this multiple line of code can be written in one line by object destructuring.
// let suhn2 = silver.surname;
// console.log(suhn2);
// let {fullname , surname} = silver;
// console.log(fullname,surname);  // object destructuring
// let {fullname:mykey1 , surname:mykey2} = silver;
// console.log(mykey1,mykey2);
let {fullname, surname ,...restproperties} = silver;
console.log(restproperties);
console.log(fullname,surname);