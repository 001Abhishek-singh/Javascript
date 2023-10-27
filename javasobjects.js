// objects --- it is a reference datatype which stores key value pairs and they don't have index.

let myobj = {name:"abhishek",age:21};
console.log(myobj); 
console.log(typeof myobj);// object is also known as object literals
// how we can access the value or data from the objects
console.log(myobj.name);
console.log(myobj.age);
// we can also assign the array inside the objects.
let myvar = {file:'chatgpt',image:'sunflower',color:'red',movie:['ek tha tiger','kgf','rrr','adipurush','don']};
console.log(myvar);  // object representation
console.log(myvar.movie); // accessing the array from the object
console.log(myvar.movie[3]); // accessing the value inside the array from the object.
// Note: object key is also known as property of the object and for accessing the property of the object we will use either dot notation or bracket notation.

// how to add key value pair to objects.
myobj.gender = 'male';
myobj.caste = 'brahman';
myobj.religion = 'hindu';
console.log(myobj);

myvar.video = 'clip';
console.log(myvar);

// accessing and adding the data by bracket notation.
const newobj = {first:'sagar',second:'suresh',third:'mehak'};
console.log(newobj['first']);
console.log(newobj["third"]);  // accessing the data

newobj['fourth'] = "shivam";
newobj['fifth'] = 'shalini';
console.log(newobj);

// difference between dot and bracket notation
const new$ = 'cricket';  // here cricket key store in new$ variable and that variable store inside the bracket notation in object literals.
newobj[new$] = "sachin tendulkar";
console.log(newobj);
/* it is a 1st difference between dot and bracket notation */

// how to iterate object(we will either use for in loop or object.keys)

// by for in loop iteration
const myview = {val1:'kunal',val2:'sahil',val3:'preeti',val4:'kartik'};
for(let key in myview){
    console.log(key);  // here it will give the key of the object.
}

for(let key2 in myview){
    console.log(myview[key2]); // this will provide the value of the key's object.
}

for(let key3 in myview){
    console.log(`${key3} : ${myview[key3]}`);
}

for(let i in myview){
    console.log(myview[i]);
}
for(let i in myview){
    console.log(`${i} : ${myview[i]}`);
}

// Object.keys method for iteration
console.log(Object.keys(myview));

// by for of loop iteration method
for(let key of Object.keys(myview)){
    console.log(myview[key]);
}