// New keyword  --- this will generally perform three works.
//(1) create an empty object having this as a value {}(this = {})
//(2) return this(empty object) method
//(3) create automatically Object.create(prototype) for object.

function createuser(firstname,age){
    this.firstname = firstname;
    this.age = age;
}
createuser.prototype.about = function(){
    console.log(this.firstname,this.age);
}
const user1 = new createuser("harshit" ,6);
user1.about();

// example on New keyword
function Myapp(name,sex,group){
    this.name = name;
    this.sex = sex;
    this.group = group;
}
myapp.prototype.myabout = function(){
    return "go to hell";
}
myapp.prototype.newabout = function(){
    return "my way or your way";
}
const take = new Myapp('shalini','female','B+');
console.log(take);
console.log(take.myabout());
//NOTE: Revise from the book
// what is a constructor function.
