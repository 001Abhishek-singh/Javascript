// Maps --- it is an iterable and store date in ordered fashion they store key value pair where duplicate keys are not allowed like objects.
// difference between map and objects
// map => they can use anything(number,string,array,object) as key and they do not repeat the key value pair.
// objects => they can use only string or symbol as a key and they accept the duplication of key value pair.

const mymap = new Map();
mymap.set('name','abhishek');
mymap.set('surname','singh');
mymap.set('age',91);
console.log(mymap);// this is a way to create a map.

const my = new Map();
my.set(1,'one');
my.set(2,'second');
my.set(3,'three');
my.set(['myarray'],'yes array can be a key');
console.log(my);
console.log(my.get(1));
console.log(my.get(3));// this is a method to access the key and value of the map.

console.log(my.keys());// through this method we can access all the keys of the map.

for(let [key,value] of my){
    console.log(key,value);
}// in map we can directly use for of method to print all the elements of the map.

let takemap = new Map([['name','vivek'],['age','19'],['education','MBBS']]);
console.log(takemap);// this is also a technique to create a New Map.
console.log(takemap.set(['hobby'],'teaching'));
console.log(takemap.get('education'));
console.log(takemap.keys());
for(let [keys,values] of takemap){
    console.log(keys,values);
}


// most important concept.
let myobj = {'name':'avinash','surname':'bola'};
let newmap = new Map();
newmap.set(myobj,{education:'B.A',gender:'male'});
console.log(myobj);
console.log(newmap);

// clone using Object.assign  --- we will study later.

// optional chaining --- it is a method use to check the following term exist in the object or not if not present then it will give undefined and else give that value.
const user = {
    firstname:"Harshit",
    surname:"singh",
    //secobj:{name:'abhishek',age:18}
}
console.log(user?.firstname);
console.log(user.surname);
//console.log(user.secobj.name);// here error will give if we follow that step
console.log(user?.secobj?.name); // that '?.' stuff uses for the optional cloning to declare undefined when the object is not present.

