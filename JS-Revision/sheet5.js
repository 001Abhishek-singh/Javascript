// Set --- it possess unique element as well as they are not accessable from index no. and these are also iterable 
const myset = new Set(["abhis","vivek","kanpur"]);
console.log(typeof myset);
console.log(myset);
const subset = new Set();
subset.add(23);
subset.add(12);
subset.add([12,1,3,4,5]);
subset.add({firstname:"kunal",surname:"singh"});
console.log(subset);
if(subset.has(2)){
    console.log("yes it is present in it");
}else{
    console.log("no this number does not exist");
}
subset.delete(23);
console.log(subset);

// Object cloning --- in this session we will see how to clone the object with more effectively.
const obj1 = {firstname:"abhishek",surname:"singh"};  // first object
obj1.gender = "male"; // assigning new value to the obj1
const obj2 = obj1;  // assigning obj1 to obj2 but this is not so much effective hence we will use cloning method in below the line
const newobj2 = Object.assign({},obj1);
console.log(newobj2);
console.log(obj1);
console.log(obj2); 

const sell = {item1:"book1",item2:"pen",item3:"stove"};
sell.item4 = "geometry_box";
console.log(sell);
const sell2 = Object.assign({},sell);
console.log(sell2); 
// NOTE: in the internet explorer object cloning doesn't work or Object.assign property also does not work.

// Optional chaining --- (?.) here we will see that given element existing or not if not then it will give undefined otherwise give its value.
const myvalue = {
    firstname: "shivam",
    surname: "singh",
    mynewobj : {post: "IAS"}
}
console.log(myvalue?.firstname);
console.log(myvalue?.mynewobj?.post);

// methods in javascript
function myvalueis(){
    console.log(`you should read the books like ${this.book1} and ${this.book2}`);
}// NOTE: this keyword always give current object as a value.
const myobj1 = {
    book1: "rich dad poor dad",
    book2: "chinese book",
    about: myvalueis,
}
const myobj2 = {
    book1: "the lost kingdom",
    book2: "the man in a white",
    about: myvalueis,
}
const myobj3 = {
    book1: "the wings of fire",
    book2: "motherland",
    about: myvalueis,
}
const myobj4 = {
    book1: "the leopard in snow",
    book2: "the school in night",
    about: myvalueis
}
myobj1.about();
myobj2.about();
myobj3.about();
myobj4.about();

// console.log(this) ---> this will give the window object in javascript
console.log(this);
console.log(window);
console.log(this === window);

// call() method , apply() method , bind() method
function aboutis(color,hobby){
    console.log(this.firstname,this.lastname,this.age,color,hobby);
}
const subvalue = {
    firstname: "sushil",
    lastname: "adhikari",
    age: 23,
    homework: "java learning"
}
const subvalue2 = {
    firstname: "ayush",
    lastname: "singh",
    age: 21,
    myabout: function learn(){
        console.log("hello i am from subvalue",this.homework);
    }
}
subvalue2.myabout.call(subvalue);
aboutis.call(subvalue,"orange","cycling");  // call() method is used to show the value of object by using the this keyword.
aboutis.call(subvalue2,"red","playing");
aboutis.apply(subvalue,["khali","aalo-chat"]); // apply() method is similar as call() method,they have just a basic difference where apply method take the argument value in array
let resutl = aboutis.bind(subvalue2,"go to hell","learn from books"); // bind() method will give the function hence we have to store in a variable then we can print it out.
resutl();

// arrow function --- this is a special function which is used to create the value for different section
const learray = {
    firstname: "rahul",
    lastname : "sihag",
    about(){
        console.log("hello world");  // directly we can apply the methods in a object and also we can use arrow function in effective way.
    }
}
learray.about();

// oops in javascript
// suppose if we have multiple users and they want to enter their data at a single period of time then it will more effective if we create an object in function
// creating a function which create an object and return the object effectively for every user.
function arrowfun(firstname,lastname,age,gender){
    const teravalue = {};
        teravalue.firstname = firstname,
        teravalue.lastname = lastname,
        teravalue.age = age,
        teravalue.gender = gender
    
    teravalue.subaout = function(){
        console.log("learning javascript and dsa in java");
    }
    teravalue.subabout2 = function(){
        console.log("learning full stack web development and other essential stuff's");
    }
    return teravalue;
}
const great = arrowfun('shalini','sharma','23','female');
console.log(great);
const subgreat = great.subabout2();
console.log(subgreat);

const myarrow = (naam,caste,height,married)=>{
    const myobject = {};
    myobject.naam = naam;
    myobject.caste = caste;
    myobject.height = height;
    myobject.married = married;

    myobject.subval = function(webseries){
        return webseries;
    }
    return myobject;
}
const subresult = myarrow("arjun","kshatriye","6'4","yes");
console.log(subresult); // gives an object.
const leresult = subresult.subval("scam 1992");
console.log(leresult);

const subresult2 = myarrow("karan","sutt","6'6","yes");
console.log(subresult2);

// going to create an object of function where object is create inside the function and we will call them perfectly.
const selfun = {
    fun2 : function(){  // fun2 act as a key of object
        console.log("jio re lala");
    },
    fun3 : function(){  // fun3 act as a key of object
        console.log("maro le lala");
    }
}
function fun1(pichhename){
    const mybojspecail = {};
    mybojspecail.pichhename = pichhename;
    mybojspecail.merafun1 = selfun.fun2;  // reference value i have put it here of an object
    mybojspecail.merafun2 = selfun.fun3;  // reference value i have put it here of an object
    return mybojspecail;
}

const answer2 = fun1("ahuja");
console.log(answer2);
const answernew = answer2.merafun1();
const newasnwer = answer2.merafun2();
console.log(newasnwer);
console.log(answernew);

// Creating a relation between two or more than two object by using the (Object.create(object_name)) we will try to develop the understanding about the __proto__ , [[prototype]] thing in the system.
const value1is = {
    key1 : "abhishek",
    key2 : "vivek",
    key3 : "singh"
}
const valueis2 = Object.create(value1is);  // Object.create() create two things no.1 gives an empty object , no.2 provide the proto chain.
valueis2.key4 = "kanpur";
valueis2.key5 = "bihar";
valueis2.key6 = "patna";
console.log(valueis2.key3);
console.log(valueis2);
console.log(valueis2.__proto__);

// prototype --- it is an empty object which is providing only & only by function and it has only one property called as constructor. 
function myhello(){
    console.log("this is my hello world and you are really a gem like star...");
}
myhello();
myhello.prototype.sabkavalue = {   // assigning the value of object to the empty object (prototype)
    firstname : "rajeev",
    lastname : "singh"
}
myhello.prototype.meravalue = ["pyaar1","pyaar2","pyaar3","pyaar4"]; // assigning the value of array to the empty object (prototype)
console.log(myhello.prototype);
console.log(myhello.prototype.sabkavalue);  // providing the sabkavalue property to the empty object (prototype)
console.log(myhello.prototype.meravalue);   // providing the sabkavalue property to the empty array (prototype)

// Prototype --- it is an empty object which creates during the time of function 
function funnn1(character,actor,actress,movie,song){
    // const mybojspecail1 = {}; this method create an empty object but we can also use Object.create() to create an empty object.
    const mybojspecail1 = Object.create(funnn1.prototype)
    mybojspecail1.character = character;
    mybojspecail1.actor = actor;
    mybojspecail1.actress = actress;
    mybojspecail1.movie = movie;
    mybojspecail1.song = song;
    
    // reference value i have put it here of an object
    return mybojspecail1;
}
funnn1.prototype.learing = function(){
    console.log("go to hell or anywhere ");
}
funnn1.prototype.learing2 = function(){
    console.log("where you go i will come ");
}
funnn1.prototype.learing3 = function(){
    console.log("everytime i will try to learn some new things ");
}
const answermy = funnn1("iron man","amitab bachan","pooja hegde","avenger endgame","tera fitoor");
console.log(answermy);
console.log(answermy.learing());
console.log(answermy.learing2());
console.log(answermy.learing3());

// new keyword in javascript
function CreateVal(meranaam,meraumar){
    this.meranaam = meranaam;
    this.meraumar = meraumar;
}
const user1 = new CreateVal("harshit",6);
console.log(user1);
// NOTE: new keyword perform three things. 
// (1) here new keyword create an empty object whose value is equal to 'this'  (this = {})
// (2) return empty object (this)
// (3) new keyword automatically set the value of prototype to the [[prototype]]/__proto__ in the function by using the this keyword.(the value of __proto__ === prototype)

// The function which create an object that function is known as constructor function whenever we want to create a constructor function at that time we have to follow some Convention such as We always start the function name with the captial letters.
// for ex: function CombinationRule(naammera){console.log("abhishek naam hai tera")}; --- constructor function and their convention.

function CheckEach(kaam,taam,jaam){
    this.kaam = kaam;
    this.taam = taam;
    this.jaam = jaam;
    return this;
}
CheckEach.prototype.extraval1 = function(){
    console.log("sab kuchh extra hai");
}
CheckEach.prototype.extraval2 = function(){
    console.log("tera kya jaata hai");
}
CheckEach.prototype.mysubarray = ["food","cood","swim","learn",13,24,true];
CheckEach.prototype.mysubobject = {firstkey : "abhishek",secondkey : "vivek",thirdkey : "sunil" , fourthkey : "daksh"};
let deans = new CheckEach("padhai","gold","traffic");
console.log(deans);
// Now we want to check that which key is present in the Constructor function so for that we will use for in method 
for(let i in deans){
    console.log(i); // this will give the keys of the function where it is present inside or outside the prototype 
    // but if we want only those keys which exist outside the prototype so for that we will use hasOwnProperty()
    console.log(deans.hasOwnProperty(i));// this property will give the boolean statement if key is outside the prototype then it will give the true value else give false
}

// Now we will create a class in javascript where we will try to invoke the constructor by using the new keyword too
class merapyaar{
    constructor(pyaar1 , pyaar2 , pyaar3 , pyaar4){
        console.log("ha mai constructor chal raha hun...");
        this.pyaar1 = pyaar1;
        this.pyaar2 = pyaar2;
        this.pyaar3 = pyaar3;
        this.pyaar4 = pyaar4;
    }
    is18(){
        console.log("yes i am 18 years old");
    }
    sing(){
        console.log("you can sing but  once in a week");
    }
    football(){
        console.log("my favourite game is football");
    }
}
const consru = new merapyaar("biology","physics","maths","java");
console.log(consru);
console.log(consru.sing());

// 2nd example on class in javascript
class animal{
    constructor(aniamname,animalage){
        this.aniamname = aniamname;
        this.animalage = animalage;
    }
    iseat(){
        return (`ye ${this.aniamname} bhalu khata hai aur iski umar ${this.animalage} saal hai`);
    }
    isgoing(){
        console.log("yes they are correct and happy...");
    }
}
const subatake = new animal("lion",4);
console.log(subatake);
console.log(subatake.iseat());

// extends keyword in javascript 
class secondanimal extends animal{

};
const subresultis = new secondanimal("dog",2);
console.log(subresultis.iseat());
// NOTE: Object & Instance is same things

// Super() keyword is related to parent class or we can say that 'super() means parent class'
class thirdani extends animal{
    constructor(aniamname,animalage,height){
        super(aniamname,animalage);   // super is related to parent class (animal);
        this.height = height;
    }
}
const answ = new thirdani("tiger",21,"6'4");
console.log(answ.iseat());

// same method in base class --- child class me bhi same method create karna jo parent class me hai.

// Getter & Setter --- actually we want to use method or function as a property so for that purpose we will use getter and setter.
class person{
    constructor(caste1,jaati1){
        this.caste1 = caste1;
        this.jaati1 = jaati1;
    }
    // by using the 'get method' we can call the function as a 'object property'. 
    get school(){
        return (`your ${this.caste1} caste and ${this.jaati1} jaati doesn't matter for the aquisition of the knowledge...`);
    }
    // by using the 'set method' we can set the value of a function or we can also change the value acc. to requirement.
    set school1(caste1){
        this.caste1 = caste1;
    }
}
const ans = new person("SC","chamar");
console.log(ans);
//NOTE: {once when we use the get method we cannot call the property as a function it will give error} console.log(ans.school());// here actually we are calling a function but we want to use school function a property so for that we will use get method
console.log(ans.school);// calling the function as a object property.
ans.school = "rajput"; // by using the set property we can change the value of a function but still we cannot say this as a function because it will behave like a object property.
console.log(ans);

// static method --- it is directly related to class and hence we cannot call this method by using the object of the class (we can call the method by using the class name)
class person1{
    constructor(election,vote){
        this.election = election;
        this.vote = vote;
    }
    static user(){  // static function in a class
        return (`if come then if your age is then only you can vote.`);
    }
    static desc = "great work abhishek very well done keep going and keep learning....."; // static property in a class
    user2(){  // non-static function in a class.
        return (`yes you can vote but only if your age is greater than ${this.vote} years and also in ${this.election} election`)
    }
}
const subans = new person1("lok sabha" , 18);
console.log(person1.user()); // static function in a person1 class and this cannot be called or invoke by class object 
console.log(person1.desc); // static property in a person1 class and this can be called or invoke by only class name.
console.log(subans.user2()); // non-static function in a person1 class and this can be called or invoke by class object
// console.log(subans.user()); // this will give an error because this is not a function 
// (02/sep/2023)