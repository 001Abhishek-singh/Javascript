// In this session we will learn about the hoisting.
// hoisting --- in this case we will call the function before declaring it and that behaviour is known as hoisting.
mylearn();
function mylearn(){
    console.log('yes it is hoisting');
}
//mylearn();
// hoisting is only possible in 'function declaration type'.it is not possible in arrow and expression type function.

console.log(hero); // here it will give the undefined in output.
var hero = 'abhisek';
//console.log(hero);


const output = subtract(33,2);
console.log(output);

function subtract(num1,num2){
    c = num1 - num2;
    return(c);
}
//let output = subtract(34,13);
//console.log(output);
//subtract(24,3)
//var output = subtract(23,12);
//console.log(output);


// function inside the function --- so we can create a function inside the function.
function fif(){

    function myfun(){
        console.log('this is first function');
    }

    const mysecfun = function(){
        console.log('this is my second function');
    }

    const mythrfun = () => {
        console.log('this is my third function');
    }

    console.log('main function');
    myfun();
    mysecfun();
    mythrfun();
}
fif();

// lexical scope  ---(refer from official documentation)

/*function learnlexical(){
    function sublex(){
        console.log('let learn lexical');
    }
    const myval = 'abhishek';
    const take = ()=>{
        console.log(myval,'this is an example of lexical scope');
    }
    sublex();
    take();
    console.log('this is a main function.')
}
learnlexical();*/

/*function learnlexical(){
        const myval = 'abhishek';
    function sublex(){
        console.log('let learn lexical');
            //const myval = 'abhishek'; // lexical scope does not find the value inside the function if the value declare into another function.
    }
    const take = ()=>{
        console.log(myval,'this is an example of lexical scope');
    }
    sublex();
    take();
    console.log('this is a main function.')
}
learnlexical();*/

const myval = 'abhishek'; // the value can be access outside the function by using the lexical scope
function learnlexical(){
        //const myval = 'abhishek';
    function sublex(){
        console.log('let learn lexical');
            //const myval = 'abhishek'; // lexical scope does not find the value inside the function if the value declare into another function.
    }
    const take = ()=>{
        console.log(myval,'this is an example of lexical scope');
    }
    sublex();
    take();
    console.log('this is a main function.')
}
learnlexical();