l// (25/09/23) in this session we will learn about the events in javascript.

// AddEventListener() property or method

// (1) first way to provide the onclick function on button. 
// const val1 = document.querySelector(".clickbutton");
// val1.onclick =  function myclick(){
//     console.log("Yes i have clicked on it....");
// }  // NOTE: but we will not use this method because this cannot be used except once.

// (2) second way to create an onclick function on button. by using the addEventListener property
// const val2 = document.querySelector(".myclickbutton"); 
// val2.addEventListener("click",function(){
//     console.log("Your answer is this");
// });  // isme hamne addEventListener naam ki property lagai hai jo ki 'click' function ko access karte hue us button ke work ko define karega

// const val3 = document.querySelector(".classname");
// val3.addEventListener("click" , function(){
//     console.log("");
// });

// NOTE: agar ham 'this' property ko use karte hai kisi bhi function ke saath except arrow function then this ki value wo button khud hoga.
// NOTE: agar ham 'this' property ko use karte hai arrow function ke saath then this ki value window hoga yaha pe

// const val2 = document.querySelector(".myclickbutton");
// val2.addEventListener("click",function(){
//     console.log("Your answer is this ")
//     console.log(this);    // yaha pe ye 'this' button ko give kar rha hai.
// })

// const val3 = document.querySelector(".myclickbutton");
// val3.addEventListener("click",()=>{
//     console.log("Your answer is this ");
//     console.log(this); // yaha pe ye 'this' window de raha hai output me
// })

// const val2 = document.querySelector(".myclickbutton");
// val2.addEventListener("click",function(){
//     console.log("Your answer is this");
// });


// adding the addEventListener property for all the button at a same time.
// const val4 = document.querySelectorAll(".all-button button"); // all-button naam ke class me sabhi button ko select kar ke uspe addEventListener property laga do.
// for(let button of val4){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     }) 
// }   // ham kisi bhi tarah ke for loop ka use kar sakte hai whether it is for of loop ,simple for loop and forEach loop.


// Event Object --- refer from the official documentation of the javascript.

// Some practice on event property
// const val5 = document.querySelectorAll(".all-button button");
// for(let button of val5){
//     button.addEventListener("click",(event)=>{
//         // console.log(event.currentTarget);
//         console.log(event.target); // we can use any of the property either 'target' or 'currentTarget'
//     })
// };

const val5 = document.querySelectorAll(".all-button button");
for(let button of val5){
    button.addEventListener("click",(event)=>{
        // console.log(event.currentTarget);
        event.target.style.backgroundColor = "green";
        event.target.style.color = "blue";  // this will add the event on the button after applying the click function 
    })
};

// there are various types of events in the javascript which we will use according to our requirements. like 'mouseover' , 'keypress' , 'click' etc.
const val6 = document.body;
val6.addEventListener("keypress",(event)=>{
    console.log(event);
}) 

const val7 = document.querySelector(".selectbtn");
val7.addEventListener("mouseover", ()=>{
    console.log("Yes successful....");
}) // like this we can perform multiple events on javascript just we need to add or use according to the requirements.

// Event Bubbling or Event Propagation   ----  refer from official documentation.
// Event Capturing   ---   refer from official documentation.
// Event Delegation  ---   refer from official documentation.
 
//(26/09/23)