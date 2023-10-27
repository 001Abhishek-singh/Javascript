// Block scope and Function scope
// let and const are block scope 
// var are function scope   (Q what is a scope ?)

// firstly we will see the concept regarding the block scope.Block is defined as { declare your content }
{
    let myname = 'abhishek';
    console.log(myname);
}
/*{
    let surname = 'singh';
}
console.log(surname);*/ // here we cannot access the surname outside the block when we declare the value by either using the let or const;
{
    const surname = 'singh';
    console.log(surname);
}
// now we will see the concept regarding the function scope.
{
    var age = 23;
    console.log(age);
}

{
    var education = 'b.tech';
}
console.log(education);// here we can access the education which indicate that we can access the variable outside the block when we use var keyword hence this is called as function block.
// we can create a multiple block by assigning the same variable name.
{
    let favchar = 'karan';
    console.log(favchar);
}
{
    const favchar = 'shree krishan';
    console.log(favchar);
}
{
    const favchar = {1:'arjun',2:'radha',3:'balram'};
    console.log(favchar);
}
// whatever we write inside the curly brackets {} that is known as block.
let check2 = 'vivek'; // lexical and block scope
var check3 = 'shivam'; // lexical and function scope
function block(){

    let check = 'abhishek';
    console.log(check); // lexical block testing

    function blockscope(){
        let powerful = 'Bhisma';
        console.log(powerful);
        console.log('Hello world i am ',check); // example of lexical block;
    }

    const functionscope = () =>{
        var weaker = 'dhuryodhan';
        console.log(weaker);
        //console.log(powerful);
        console.log('I want to check the block system',check); // example of lexical block
    } 
    console.log(check2);
    blockscope();
    console.log(check3);  
    functionscope();
    //console.log(powerful);// example of block scope -- it will not work outside the block because let and const cannot accessed outside the block.
    //console.log(weaker);// example of function scope -- it will work outside the block because var can be access from any point or place.
    //console.log(weaker);
}
//console.log('Thank you ',check); // here it is not accessable hence they wil show an error.

block();


// Default parameter -- in this parameter we defined the value of parameter in the function at the initial time.
function mydefault(a,b){
    return a+b;
}  // the function without passing the default value in the parameter.
const myans = mydefault(4,5);
console.log(myans);

function mydefault2(a,b=0){
    return a+b;
}// the function having default value in the parameter.
const ans = mydefault2(34);
console.log(ans);

// Rest parameter
function rest(a,b,c){
    console.log(`${a},${b},${c}`);
}
rest(4,6,7); // this is not an example of rest parameter
// suppose we want to store multiple arrgument in a single parameter then for that we will use rest parameter condition.
function restvlue(a,b,...c){
    console.log(`${a},${b},${c}`);
    console.log('the value of a is',a);
    console.log('the value of b is',b);
    console.log('the value of c is',c);
    console.log(Array.isArray(c));
}// this is an example of rest parameter.
restvlue(12,4,5,6,67,8,9,3);
