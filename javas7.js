// in this session we will learn about 'computed properties'
const key1 = "name";
const key2 = 'age';

const value1 = "abhishek";
const value2 = '19';

// const myobj = { key1 : value1, key2: value2};
//console.log(myobj);  // why the key1 not display as name and when we use bracket notation then why they show undefined.
// answer of the above question is given as:

const myobj = { [key1] : value1 ,[key2] : value2};
console.log(myobj);  // this method is known as computed properties where we direct insert the key&keyvalue into the object by creating the external variables.

// 2nd example
let mykey1 = 'name';
let mykey2 = 'age';
let mykey3 = 'height';
let mykey4 = 'color';
let mykey5 = 'education';

let myvalue1 = 'vivek';
let myvalue2 = '17';
let myvalue3 = `5'9`;
let myvalue4 = 'fair';
let myvalue5 = 'mbbs';

let myobj2 = {[mykey1]:myvalue1,[mykey2]:myvalue2,[mykey3]:myvalue3,[mykey4]:myvalue4,[mykey5]:myvalue5};
console.log(myobj2);

// spread operator in objects
// in objects 'key' should be 'unique'
const myobj1 = {key1:'abhishek',key2:'vivek',key3:'19'};
const myobj3 = {key4:'suresh',key5:'sourav',key6:'ravi'};
const mynewobj = {...myobj1,...myobj3,...mykey1,...'2345khafl'};
console.log(mynewobj);

// object destructuring(impo. and this will only learn when real life problem and situation come in front of us).
const user = {band:'vyx band',newband:'more band',takeband:'less band'};
let{band,newband} = user; // object destructuring
console.log(band);

// Object inside the array(very useful in real life application)
const userarray = [
    {user1:'kunal',age:'17',sex:'male',education:'b.tech'},
    {user2:'sarita',age:'19',sex:'female',education:'bca'},
    {user3:'ashish',age:'19',sex:'male',education:'b.com'},
    {user4:'anamika',age:'20',sex:'female',education:'mbbs'}
]  // this is an example of object inside the array.
console.log(userarray);
// now we will use the 'for of loop under the condition of object inside the array.'
for(let item of userarray){
    //console.log(item);
    //console.log(item.education);
    console.log(item);
}

const myarray = [
    {user:'abhsihek'},
    {user:'kunal'}   // example of object inside the array
]
console.log(myarray);
// now we will try to iterate the object which is present inside the array
for (let i of myarray){
    console.log(i);  // for of will give the value from that particular index but for in will give the index no. of that given array.
}
for(let j in myarray){
    console.log(j);
}

// object in array destructuring
const newuser = [
    {user1:'mayank',game:'football'},
    {user2:'ashta',game:'chess'}
]
console.log(newuser);
// destructuring:
//const desuser = [input1,input2] = newuser;
//console.log(input1);
//console.log(input2); // example of destructuring 
// if we want to get value from that object then we use
//console.log(input2.game,input1.user1);
// if we want to change the keyname then we can also do that 
//const [{user1:jai}] = newuser; 
//console.log(jai);

const mynewuser = [{per1:'shalini',hobby:'acting'},{per2:'swati',hobby:'dancing'}];
console.log(mynewuser);

const [myvar1,myvar2] = mynewuser;
console.log(myvar1);// 1st object store in myvar1 variable
console.log(myvar2); // 2nd object store in myvar2 variable
// here we store the object into the variable by using the object destructuring.

// const[{per1,hobby},{per2,hobby}] = mynewuser;

const[{per1: fav1},{hobby:fav2}] = mynewuser;//here we changed the object's key and we assign the new name to that object's key.

//console.log(per1);
console.log(fav1);
console.log(fav2);
// 4:51:08