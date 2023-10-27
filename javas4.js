// if-else condition
let vote = 46;
if(vote>=18){
    console.log("yes,he can vote");
}
else{
    console.log("no,you are not eligible");
}

// 2nd example:
let num_123 = 13;
if(num_123<33){
    console.log('you are fail');
}
else{
    console.log('you are pass');
}


// Boolean and comparison operator

// Boolean 
// boolean datatype will give either true or false value.
let num = 23;
let num$ = 34;
console.log(num>num$); // here we are using the comparison operator like >,<'=,etc.
console.log(num<num$);
console.log(num>=num$);
console.log(num<=num$);

// == and ===
let a = 23;
let b = "23";
console.log(a == b); // this == operator will check the value of two variable,is it equal or not irrespective of the datatype(it will not checked the datatype of the variables)

console.log(a === b);// this === operator will check both value and datatype of the two variable.


// != and !==
let user = 23;
let user3 = '23';
console.log(user != user3); // this != will check the value of two variable irrespective of the datatype if both the value will be same then it will give the false boolean value.

console.log(user !== user3); // this !== operator will check the value of two variable where they will see both the  value and datatype. 



// truthy and falsy value
// Note: this is used to check the condition is true or false under the if-else statement.



// falsy value ---> some falsy values
// false
// ""
// null
// undefined
// 0

// example 1
let input = "";
if (input){
    console.log("they are good")
}
else {
    console.log("falsy statement is empty")
}
// example 2
let input$ = false;
if (input$){
    console.log("they are empty")
}
else {
    console.log("falsy statement is false")
}
// example 3
let input_1 = null;
if (input_1){
    console.log("they are empty")
}
else {
    console.log("falsy statement is null")
}
// example 4
let input_2 = undefined;
if (input_2){
    console.log("they are empty")
}
else {
    console.log("falsy statement is undefined")
}
// example 5
let input_3 = 0;
if (input_3){
    console.log("they are empty")
}
else {
    console.log("falsy statement is zero")
}



// truthy value
// 'abc' ---> any string
// 1 , -1

// example 1
let my_case = "harshit";
if (my_case){
    console.log(my_case);
}
else{
    console.log('tell me your name');
}
// example 2
let my_case_2 = 1;
if (my_case_2){
    console.log(my_case_2,`this is true ${my_case}`);
}
else{
    console.log("yes this is truthy value")
}
// 1:46:30