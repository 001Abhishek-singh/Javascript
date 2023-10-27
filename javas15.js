// Prototype --- is just a free space which we get when we declare any type of function and they provide key value pair in the empty object also known as function.
// in javascript function can be treated as object (function === function + object).
// we can add our own properties in the function.
// function provide more free space-(actual me free space jesa kuchh nahi hota empty object{}--'that object is known as"prototype" in javascript' ko free space kaha ja raha hai.)
function name(){
    console.log('my name is abhisek');
}
name.myownproperty = 'mera man mera tan';// here i created my own property for the name function.
name(); 
console.log(name.myownproperty);
console.log(name.prototype);
// only function will create a prototype(it's just an empty object which has only one key(property) called constructor).
name.prototype.abc = 'kunal';
name.prototype.xyz = 'abhishek';
name.prototype.sing = function(){
    return "ek baar to pyaar karna banta hai."
}
console.log(name.prototype);
console.log(name.prototype.sing());

// example of prototype:
function surname(){
    const take = Object.create(surname.prototype);
    take.work = 'software developer';
    take.field = 'CSE';
    take.salary = 'Kharcha nikal jaye';
    take.pyaar = 'swati';
    return take;
}
surname.prototype.gaana = function(){
    return 'dil meri sunanta nahi';
}
surname.prototype.jeet = function(){
    return 'dar ke aage jeet hai';
}
surname.prototype.khel = function(){
    return 'cricket mera favourite khel hai';
}
const print = surname();
console.log(print);
console.log(print.jeet);