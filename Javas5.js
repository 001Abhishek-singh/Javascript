// ternary operator ---> sometime it is also known as conditional operator.

// let's see how ternary operator work's 
// variable name = condition ? "true value" : "false value"; ---? firstly it will check the condition if condition will be true then it will give the value after the question mark and if the value will be false then it will give the value after the colon.

let user = 15;
let input = user >= 18 ? "Vote" : "Not eligible";
console.log(input);

let result = 33;
let result$ = result >= 30 ? "pass" : "fail";
console.log(result$)

// and - or operator
// && operator 
let b = "abhishek";
let c = 81;
if (b =="abhishek" && c >= 18){
    console.log("statement is true");
}
else{
    console.log("statement is false");
}
// || operator
let a = "new";
let d = "old";
if (a[0] == "n" || d[0] == "p"){
    console.log("yes it is true");
}
else{
    console.log("no,you are somewhere wrong");
}


// prompt function ---> This function is used to take the value as a input.
let name = prompt("enter your name: ");
let surname = prompt("Enter your surname: ");
let age = +prompt ("Enter your age: ")
console.log(name + " " + surname);
console.log(age);

// nested if-else condition
let system_input = +"33";
let my_input = +prompt("Enter your marks: ");
if (system_input === my_input){
    console.log("you are just on line");
}
else{ // this if-else condition is called as nested if-else because if-else statement is used under the else statement.
    if (my_input<system_input){
        console.log("you are fail");
    }else{
        console.log("you are pass");
    }
}

// if 
// else if
// else
let tempin = +prompt("Enter a input: ");
if (tempin > 42){
    console.log("Its too hot");
}
else if(tempin > 30){
    console.log("let's swim in pool");
}
else if(tempin < 30){
    console.log("rainy wheater")
}
else if (tempin >= 10){
    console.log("coldy weather");
}
else{
    console.log("snow falling")
}

// switch statement
let my_var = +prompt("Enter the week day: ")
switch(my_var){
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thrusday");
        break;
    default:
        console.log("Invalid statement");
}

// switch example(2):
let my_var_1 = prompt("enter your name:");
switch(my_var_1){
    case "abhishek":
        console.log(my_var_1);
        break;
    case "vivek":
        console.log("user");
        break;
    default:
        console.log("Invalid statement");
        break;
}
// 2:15:00
