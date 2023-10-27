// Event object --- refer from the book or documentation

/* const allbutton = document.querySelectorAll(".allbutton");
for(let button of allbutton){
    button.addEventListener("click",(myevent)=>{
        console.log(myevent.target);// here we are calling the 'target' event property
    })
}
*/

const newbutton = document.querySelectorAll(".allbutton");
for(let i of newbutton){
    i.addEventListener("click",(e)=>{
        console.log(e.currentTarget);// using the 'currentTarget' event property
    })
}

// Keypress event & Mouseover event
//(1) Keypress event
const subevent = document.body;
subevent.addEventListener("keypress",(abc)=>{
    console.log(abc);
}) // we are using the keypress event if we click any of the key on keyword then that 'key value event' will be display on the console.
const newevent = document.body;
newevent.addEventListener("keypress",(xyz)=>{
    console.log(xyz.key);// using the keypress event we can get the key on console by using the "key keyword" with function argument.
})

//(2) Mouse event
const forbutton = document.querySelector(".merabutton");
forbutton.addEventListener("mouseover",()=>{
    console.log("chal mouse hover ho raha hai");
})// button pe mouse icon le ke jayenge tab us button pe likha hua console pe display hoga.

const terabutton = document.querySelector(".merabutton");
terabutton.addEventListener("mouseleave",()=>{
    console.log("chal bahar aajaa");
})// button se mouse icon ko hatane ke baadh phir se kuchh likha hua console pe display hoga.


// Event Bubbling ,Event Propogation ,Event Capturing ,Event Delegation. ---- refer from the official documentation.
