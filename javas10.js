// parameter destructuring -- it is mostly used in the object and react purpose work.
const myobj = {
    firstname: 'abhishek',
    surname: 'singh',
    caste: 'brahman',
}
console.log(myobj);

// this is an example of parameter destructuring:
function paradestructure(myobject){
        console.log(myobject.firstname);
        console.log(myobject.surname);
        console.log(myobject.caste);
}
paradestructure(myobj);

// we can also solve the parameter destructuring by this way
function parades({firstname,surname,caste}){
    console.log(firstname);
    console.log(surname);
    console.log(caste);
}
parades(myobj);// solve my problem to understand the concept clearly.

// Callback function --- (refer from official documentation)

/*function fun2(){
    console.log('this is a sub function')
}

function fun1(callback){
    console.log('this is my main function')
    //console.log(a);
    callback(); // calling the fun2
}
fun1(fun2);*/

function fun2(a){
    console.log('this is a sub function')
    console.log('hello this side is ',`${a}`);
}

function fun1(callback){
    console.log('this is my main function')
    //console.log(any parameter);
    callback(); // calling the fun2
    callback('abhishek');
}
fun1(fun2);

// Funtion return function.
function myfun(){
    console.log('this is Function');
    const take = ()=>{
        console.log('this is return function');
    }
    return take;
}
//myfun(); // this will give the console value but do not return anything so
myfun();
const fortake = myfun(); // here we return the take function by myfun function.here fortake convert into the function hence it return the function.
console.log(fortake);
fortake(); // as i told earlier this is converted into the function.

// example of function return function.
function taketwo(a,b=9){
        return a+b;
}
function takeone(){
    return taketwo;
}
let store = takeone(); // this takeone will return the taketwo function.
console.log(store); // and here store will converted into the another function which we can call now.

let storeintostore = store(3); // here we passes the 3 as argument to a parameter and storeintostore is a variable which store the returned value of function taketwo.
console.log(storeintostore);

let store2 = taketwo(3);
console.log(store2);

// example of function callback
function funct2(){
    console.log('this side is abhishek');
}
function funct1(callback){
    console.log('this side is vivek');
    callback();
}
funct1(funct2);

