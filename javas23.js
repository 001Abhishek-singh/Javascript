// Introduction to EVENTS 
// in this session we will learn about the events so the first event is to click on button and they perform something.they have 3 methods for that work

/*(1) Directly by applying the "onclick event" in html file. but this is not use so much

ex: <input type="button" value="click me" onclick = "console.log('Hello user)">*/

/*(2) by taking the onclick event with function in javscript.but this is also not use so much because we can't assign multiple functions at a same time in onclick event. 
ex: const variablename = document.querySelector(".classname");
variablename.onclick = function(); define kar de
*/

const clickkar = document.querySelector(".forbutton");
clickkar.onclick = function(){
    console.log("you clicked me ")
}

/*(3) use 'addEventListener method' to perform the click event.this is most accepted and reliable method for click event.
ex: const variablename = document.querySelector(".classname");
create a function()
variablename.addEventListener("click jo ki event name hai",call the function/naam likh de function ka);
*/

const newclick = document.querySelector(".newbutton");
function clickme(){
    console.log("mera pyaar biology");
}
newclick.addEventListener("click",clickme);

// when we use 'this' or where what value they will give
/* when we use this in normal function then that time 'this' will give the 'listelement' as a value during the use of this keyword.
and if we use this in arrow function then that this will give the window as a value */

// 1st example
const subclick = document.querySelector(".newbutton");// here we call the class of a html element by querySelector.
function submit(){
    console.log(this);// here the value of this is button itself.
}
subclick.addEventListener("click",submit);// this will give the button as a value when we use this keyword in normal function.

// 2nd example:
const sub2click = document.querySelector(".forbutton");// firstly we select the class of a element
sub2click.addEventListener("click",()=>{
    // arrow function form
    console.log(this);// here window will be the value for 'this keyword'
});

// 3rd example
/*const forallbutton = document.querySelectorAll(".allbutton");
function subclickkar(){
    console.log("chal answer chekk kare");
}// Creating a function
for(let button of forallbutton){
    button.addEventListener("click",subclickkar);
}// Using a for-of loop so that specific function can iterate for given number of time.
*/

const newvalue = document.querySelectorAll(".allbutton");

function fornewvalue(){
    const name = {
        surname: "abhisehk",
        age: 21,
        subject: "engineering"
    }
    console.log(name);
}
for(let sub of newvalue){
    sub.addEventListener("click",fornewvalue); // passing the function.
}

// Note: we can use all types of for loop  