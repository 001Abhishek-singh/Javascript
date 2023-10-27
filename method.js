// Methods 
// it is defined as the function inside the object.

// 1st example
const myobj = {
    firstname:"Abhishek",
    singh:"Singh",
    age:19,
    /*intro(){
        console.log('this is my name');
    }*/ // here this is known as 'method' and they both(this and below one they are same.)
    intro:function(){
        console.log(`my name is ${this.firstname} ${this.singh} and i am ${this.age} year old.`);
    }// intro is a function name and we call them by objectname.method
}
console.log(myobj);
myobj.intro();

// 2nd example
const myobjsec = {
    car:'Range Rover',
    color:'blue',
    fav:function(){
        console.log(this);
        return `My favourite car is ${this.car} and ${this.color} in color it looks awesome`
    }
}//Note: 'this keyword' is a --- 'current' running object.
let store = myobjsec?.fav();
console.log(store);

// 3rd example
function myfun(){
    console.log(`The bond ${this.firstname} ${this.surname} let's check this keyword in method`)
}
myunobj = {
    firstname:'arav',
    surname:'sharma',
    info:myfun // here info declare as function
}
myunobj.info();

console.log(this);
console.log(window);
console.log(this === window);

// Call method

const takeobj = {
    myfirstname:'bharat',
    father:'kuru samrath',
    about:function(){
        console.log(`${this.myfirstname} and ${this.father} belongs to mahabharat vanshawali....`);
    }
}

const takeobj2 = {
    myfirstname:'shantanu',
    father:'arayvarth samrath',
    
}
takeobj.about();
takeobj.about.call(takeobj2);
// now we will try to pass some argument in the function
const input = {
    accept:'car',
    notaccept:'motorcycle',
    vehicle:function(fourwheel,twowheel){
        console.log(this.accept ,"is accepting by my brother not ",this.notaccept,"just take back it","i want a ",fourwheel,"not",twowheel)
    }
}

const myinput = {
    accept:'car',
    notaccept:'motorcycle'
}
input.vehicle();
input.vehicle.call(myinput,"Mercedes","Splender");
// We can also do the above problem in this way
function placevalue(threewheel,onewheel){
    console.log(this.favvalue ,"is accepting by my brother not ",this.mostvalue,"just take back it","i want a ",threewheel,"not",onewheel)
}

const sansham = {
    favvalue:1242343,
    mostvalue:421
}
const sansham2 = {
    favvalue: 78475487,
    mostvalue:241
}
placevalue.call(sansham2,"###101","201###");

// apply --- it is same as call and here we provide the argument in a array rather than passing alone. 
function myplacevalue(threewheel,onewheel){
    console.log(this.myfavvalue ,"is accepting by my brother not ",this.mymostvalue,"just take back it","i want a ",threewheel,"not",onewheel)
}

const yoursansham = {
    myfavvalue:1242343,
    mymostvalue:421
}
const yoursansham2 = {
    myfavvalue: 78475487,
    mymostvalue:241
}
myplacevalue.apply(yoursansham2,['abhishek','vivek']);

// bind --- it will return the function and it is not similar to call and apply
function myplevalue(threewheel,onewheel){
    console.log(this.myfavlue ,"is accepting by my brother not ",this.mymoslue,"just take back it","i want a ",threewheel,"not",onewheel)
}

const younsham = {
    myfavlue:1242343,
    mymoslue:421
}
const yoursham2 = {
    myfavlue: 78475487,
    mymoslue:241
}
let storeval = myplevalue.bind(younsham,['abhishek','vivek'],'shivam');// bind return function hence we need to store the function in a given variable.
storeval();