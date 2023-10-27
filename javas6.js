// while loop -- we are using the while for the iteration of the number
let my = 0;
while(my <=5){
    console.log(my);
    my++;
}

let name = "vivek";
i = 0;
while(name[i]){
    console.log(name[i]);
    i++;
}

/*let age = prompt("Enter your age below 7: ");
if(age<= 7){
    i = "JAI SHREE RAM....";
    j = 0;
    while(i[j]){
        console.log(i[j]);
        j++;
    }
}else{
    console.log("Invalild item");
}*/

// for loop -- in this loop we will define the condition inside the parenthesis.
for(let num =1;num<=7;num++){
    console.log(num);
// this declaration of num does not exist outside this for loop when we declare the variable by using the let keyword.
// but if we declare the variable by var keyword then the variable will exist outside the for loop.
}
//console.log(num);// num does not exist outside the for loop

for(var num2 = 0;num2<5;num2++){
    console.log(num2);
}
num2 = "abhisek"
console.log(num2);
// 2nd example
var total = 0;
for(let i=5;total= total+i;i--){
    console.log(total);
}
// 3rd example 
let mytotal = 0;
let num = 10;
for(let i = 0;i<=num;i++){
    total = total+i;
}
console.log(total);


// break and continue keyword
// break keyword
// example of 'break' statement
let day = 1;
switch(day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("other day")
}

// continue keyword
let user = 12;
i=1;
while(i<=user){
    console.log("jai shree ram...");
    if(i===4){
        continue;
    }
    i++;
}
// do-while loop
let i = 10;
do{
    console.log(i);
    i++;
}
while(i<=9)