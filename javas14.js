// Proto,prototype,class
// __proto__ 
const exam = {
    key1: 'say hello',
    key2: 'say goodbye',
    key3: 'say welcome'
}
const myexam = {
    me1: 'say goodnight',
    me2: 'say i love you',
    me3: 'say no to drink'
}

console.log(exam.key2);// this condition will satisfied.
console.log(exam.me2);// they will give undefined because exam object haven't power to access the me2 property from myexam object.
// NOTE: there is a way to create an empty object by using the following property
const subexam = Object.create(exam);
console.log(subexam); // gives empty object
subexam.input = 'yes i am live';
console.log(subexam.input); // it will the key pair value of subexam object
console.log(subexam.key1); // now see this will give the key pair value from exam object by making some connection through (Object.create(object name));
console.log(subexam);// it shows [[Prototype]] (called as proto) because our browser is up-to-date hence we can say that __proto__ and [[Prototype]] they both are same.

// Firstly we will create a function and then we will pass the object in the function and key value pair and return the object.

function createfun(firstname,lastname,email,age,address){
    // now we will create an empty object
    const user = {};
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    // now we will create a method
    user.about = function(){
        return `my name is ${this.firstname} ${this.lastname} `
    };
    user.isabout = function(){
        console.log('hello world this side is createfun and user object.')
        return user;
    }
    return user;
}
const user1 = createfun('abhishek','singh','001abhishek287@gmail.com','18','mb-43');
console.log(user1);
const user2 = user1.about();
console.log(user2);
const user3 = user1.isabout();
console.log(user3); 
// now we will try to write the above code in more advance term
const obj = {
    sameabout:'what is your opinion',
    saraabout:'as always saara kuchh mera hai.',
    sing :function(){
        console.log('hello user');
    }
}
function myfun(name,surname,age,education){
    const myuser = {};
    myuser.name = name;
    myuser.surname = surname;
    myuser.age = age;
    myuser.education = education;
    myuser.myabout = obj.sameabout;
    myuser.takeabout = obj.saraabout;
    myuser.sing = obj.sing;
    return myuser;
}
const store = myfun('vivek','singh',19,'b.tech');
const mystore = myfun('shivam','singh',17,'b.tech');
const mystore2 = myfun('avinash','singh',21,'b.tech');
const mystore3 = myfun('ashish','singh',23,'b.tech');
console.log(mystore.sing());
console.log(mystore.myabout);

// now we will try to update the above code by using the [[Prototype]] in new way
const simmethod = {
    sameabout:'what is your opinion',
    saraabout:'as always saara kuchh mera hai.',
    sing :function(){
        console.log('hello user');
    }
}
function myfungo(name,surname,age,education){
    const simmyuser = Object.create(simmethod);// this will create an empty object.
    simmyuser.name = name;
    simmyuser.surname = surname;
    simmyuser.age = age;
    simmyuser.education = education;
    return simmyuser;
}
const chip = myfungo('priya','tanwar',21,'mbbs');
console.log(chip);
console.log(chip.sing());

// as a javascript programmer we also need to prefer this thing for defining the numerous object in function.
