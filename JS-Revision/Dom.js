// // (23/09/23) in this session we are going to revise about the dom manipulation
// console.log(window);  // it will give the window object
// console.log(window.document); // it will give the document list
// console.dir(window.document);
// console.dir(document); // either we write window.document or document it will give the document list

// now we want to select an html element by using the getElementbyId method which is present inside the document.
let store = document.getElementById("reg-form"); 
console.log(store); // NOTE:it looks like it gives an html element but in actual it is an object.
console.log(typeof store);
console.dir(store);

// now we want to select an html element by using the querySelector method which is present inside the document.
let newStore = document.querySelector(".contentdiv"); // this is selecting a class from html file but it will only select one class because if we want to select each class of same type then we have to use another query selector method which is shown below.
let newStore2 = document.querySelector("#my-label");  // this is selecting an id from the html file
console.log(newStore);
console.log(newStore2);
console.log(typeof newStore);
console.log(typeof newStore2);
console.dir(newStore);
console.dir(newStore2);

// now we want to select an html element by using the querySelectorAll method for selecting the multiple class of same type or same class name.
let val1 = document.querySelectorAll(".options");
console.log(val1);
console.log(typeof val1); // it will give the NODELIST of class
console.dir(val1);

// if we want to change our text directly by using the javascript then for that we will use some method provided by document object.
// innerText && textContent

const val2 = document.getElementById("reg-form");
console.log(val2.innerText); // innerText cannot display the text which is hidden from the user.


// const val3 = document.getElementById("reg-form");
// console.log(val3.textContent);  // textContent can display the text which is hidden from the user.
// val3.textContent = "Sbka pyaara nobita";
// console.log(val3);
// console.log(val3.textContent);

// and they both can be used to change the text of the html element directly by using the javascript.
// const val4 = document.getElementById("reg-form");
// console.log(val4.innerText); // this will use to change the innerText of the html file directly by using the javascript.
// val2.innerText = "Mera form hai bhar de jaldi se";
// console.log(val4);
// console.log(val4.innerText);

// change the style of elements --- if we want to change the style of the element by using the javascript then we can also do that
// style method
const val5 = document.querySelector("div.contentdiv label");
console.log(val5.style);
val5.style.backgroundColor = "yellow";
val5.style.border = "6px solid grey";

// we can also change the attribute of html element by using the javascript
// get && set attributes
const val6 = document.querySelector("div.contentdiv input"); // select the html element
console.log(val6.getAttribute("type"));  // using the getAttribute and also telling about the attribute which attribute we want to change in that given element.
const val7 = document.querySelector(".checkboxstyle"); // selecting the .checkboxstyle class from html file
console.log(val7.getAttribute("type")); // checking the attribute of the given element by using the javascript method.

val7.setAttribute("type","submit");
val6.setAttribute("type","www.google.com");
console.log(val6.getAttribute("type"));
console.log(val7.getAttribute("type"));

const val8 = document.querySelector("a");
let mystore = val8.getAttribute("href");
val8.setAttribute("href","www.leetcode.com");
console.log(val8.getAttribute("href"));
console.log(mystore);

// we can select the html element by using the tag name like
// getElementsByTagName
const subval = document.getElementsByTagName("a");// it will give the HtmlCollection where we can perform the indexing and length property.
subval[0].style.color = "red";
console.log(subval); // it will give the htmlcollection list.
console.log(subval[0]); // it will give the value of a tag

const subval2 = document.getElementsByTagName("button");
subval2[0].style.color = "orange";
console.log(subval2);
console.log(subval2[0]); // it will give the value of button

// element selection by using the getElementbyClassName && querySelectorAll
const val9 = document.getElementsByClassName("options"); // it will give the HtmlCollection where we can perform the indexing on each items 
console.log(val9); // it is an ArrayLikeObject but not an array. hence we can use indexing and length method in it.
console.log(val9[3]);// NOTE: we cannot use the forEach loop with HtmlCollection hence we can only use either for of loop or simple for loop.
console.log(val9[6]);

const val10 = document.querySelectorAll(".options"); // it will give the ListNode where we can perform the indexing on each items of the list.
console.log(val10); // it is also an ArrayLikeObject but not an array.
console.log(val10[1]); // NOTE: we can perform the forEach loop, for of loop and simple for loop on NodeList method. 

// now we are going to iterate the HtmlCollection by using the simple for loop
// for(let i=0 ; i<val9.length ; i++){
//     let result = val9[i]; // iterating the htmlcollection with the help of javascript.
//     result.style.color = "red";
// }
// now we are going to iterate the HtmlCollections by using the for of loop 
for(let item of val9){
    item.style.color = "blue";
    item.style.fontSize = "20px";
}

// val9.forEach((meraval)=>{
//     meraval.style.backgroundColor = "pink"; // forEach loop cannot applicable on HtmlCollection  
// })

// NOTE: we can change the HtmlCollection into the Array by using the following property.
console.log(Array.isArray(val9)); // currently it is not an array 
console.log(Array.isArray(Array.from(val9))); // this method or property uses to change the HtmlCollection into the Array and now as it is changed into the array we can perform the forEach loop on it.
console.log(typeof Array.from(val9)); 

// simple for loop on NodeList 
for(let i = 0;i<val10.length; i++){
    console.log(val10[i]);     
}
// for of loop on NodeList
for(let value of val10){
    console.log(val10[value]);
}

// forEach loop on NodeList 
val10.forEach((subvalue)=>{
    subvalue.style.backgroundColor = "black";
})

// innerHtml --- it will use to change the inner html element content directlyl by using the javascript
const innerht = document.querySelector(".headingdiv");
console.log(innerht.innerHTML);
innerht.innerHTML = "<h1>Instant Checking of InnerHTML in the Main div section </h1>";
console.log(innerht.innerHTML);

// DOM Traversing  --- in this case we will see how we can traverse after creating the dom tree
const maindom = document.getRootNode();  // this will give the document as a answer
console.log(maindom);
const childnode = maindom.childNodes;  // this will give the child node of the root node in the form of NodeList  
console.log(childnode);
console.log(childnode[1]); // as NodeList is just like an arraylikeobject hence we can perform indexing on the childnode.
const subchildnode = childnode[2];
const undersubchildnode = subchildnode.childNodes; // it will tell the child node of html element through which can perform futher operations.
console.log(undersubchildnode);

let bodychildnode = undersubchildnode[0];
console.log(bodychildnode.childNodes); // it will provide the child node of the body element.
console.log(bodychildnode.nextSibling); // nextSibling will be provide the  sibling of another element.
console.log(bodychildnode.nextSibling.nextSibling);  // it will provide the sibling to next sibling in the element.

let parentnode = bodychildnode.parentNode;  // it will give the parent element from the childnode.
console.log(parentnode);  
console.log(parentnode.parentNode); 

const paragraph = document.querySelector("p"); 
console.log(paragraph.parentNode);  // this will tell us about the parentNode of the given element "p" in html file.
console.log(paragraph.parentNode.parentNode); // it will give the parentNode of the form tag in html file.

paragraph.style.color = "red";   // We can also perform the styling on the given tag by using the javascript internal method.

const withouttext = document.querySelector(".maindiv");
console.log(withouttext.children);  // it will give the HtmlCollections and also here we can get the element by using the "children" property and it will display only the child node element without providing the text node.


// ClassList property: --- it is used to access the class in html file directly by using the javascript properties. it can be used for the addition,removal & also for the checking of no.of classes in it.
const checkClass = document.querySelector(".maindiv"); // 1 hi class hai isme sirf
console.log(checkClass.classList); // it will provide the DOMTokenList and tell us about the class present in that particular html file or element.
// ye classes ko add,remove,check and toggle karne ke kaam me aata hai.iske help se ham directly javascript ke through classes ko define kar sakte hai.

//(1) classList.add() property
checkClass.classList.add("color-de"); // hamne classList property ka use kar ek new class create kiya hai jiska naam "color-de" hai.

const newclass = document.querySelector(".color-de");
console.log(newclass.classList); 

//(2) classList.remove() property
checkClass.classList.remove("color-de"); // ye property class ko remove kar dega

//(3) classList.contains() property
const ans = checkClass.classList.contains("color-de"); // ye property check karega ki class exist karta hai ya nahi. it will return the boolean value.
console.log(ans);

//(4) classList.toggle() property
checkClass.classList.toggle("color-de"); // ye check karega ki class exist karta hai ya nahi agar class exist karta hai tab 'class ko remove kar dega' warna agar class exist nahi karta tab "class ko add kar dega."

// now we will try to add the html element directly by javscript from the usage of innerHTML.
// const subsection = document.querySelector(".myanchor"); // selecting the class from the html file.
// subsection.innerHTML += "<h1>Hello world i am from the gju</h1>";   // this method is used to add the html element directly by using the javascript.
// subsection.innerHTML += "<p>You know this world is fully filled with two things in which the first member is innocent and second one is clever</p>"
// console.log(subsection); 
// NOTE: Always remember that this method is not suitable for the addition of html element because somewhere it will reduce the performance of the system or program.but we can use this method to change the html of the program that will not affect the performance of the system.
const subsection = document.querySelector(".myanchor");
subsection.innerHTML = "<h1>Hello World</h1>"; // this is suitable for the addition of the html element by using the innerHTML

// creatElement --- this property will be used to add the html element or tag in the html file directly by using the javascript.
const newsubsection = document.createElement("a"); // creating an anchor tag directly by using the javascript.
const textvalue = document.createTextNode("go to hell");  // creating a text by using the createTextNode directly by using the javascript.
const newans = newsubsection.appendChild(textvalue); // adding the value of textvalue into the anchor tag(newsubsection).
console.log(newans);

const addtag = document.createElement("h1");  // creating the 'h1' tag.

// const addtagvalue = document.createTextNode("value from javascript");
// const valuestore = addtag.appendChild(addtagvalue); // append does not working in Internet Explorer hence we are using the appendChild.
// const finalans = addtag.append(addtagvalue);
// console.log(finalans);

addtag.textContent = "value from javascript"; // assigning the value into h1 tag

const fromvalue = document.querySelector(".headingdiv"); // taking the value from the html file by querySelector
fromvalue.prepend(addtag); // adding the h1 tag into the headingdiv class
console.log(addtag);  // print in a console.

const removeval = document.querySelector(".headingdiv h1");
removeval.remove(); // it will remove the h1 tag from the headingdiv class.

fromvalue.append(addtag); // adding the value of h1 into the headingdiv class by using the append property.


// Before & After property in the javascript 
const subnewremove = document.querySelector(".headingdiv h1");
subnewremove.before(addtag); // before property

subnewremove.after(addtag); // after property in javascript when we want to add the content in the html file by using the createElement or textContent.

// element.insertAdjacentHTML(where,"html tag")  --- this property also uses to add the html element directly by using the javascript.
// they have certain rules or method like
// beforebegin;
// afterbegin;
// beforeend;
// afterend;

const takevalue = document.querySelector(".headingdiv");
takevalue.insertAdjacentHTML("beforebegin","<li> Teach good to learn good </li>");

// cloneNode --- this property will be used to clone the html element so that we can use multiple method or property at a same time.
const takesubvalue = document.querySelector(".myanchor");  // class select kiya
const newsection = document.createElement("button");    // javascript ke through button create kiya
newsection.textContent = "Click my button";    // textContent property ke through content provide kiya element me
const mybutton = newsection.cloneNode(true);   // cloning karne ke liye cloneNode property ka use kar rahe hai
takesubvalue.append("newsection");    // append property ka use kiya 
takesubvalue.prepend("mybutton");     // prepend property ka use kiya

// NOTE: static list and live list
// static list --- ye list querySelector & querySelectorAll property ko use karne pe milega 
// live list --- ye list getElementBySomething property ko use karne pe milega

// We can also determine the value of dimensions of the given element by using the javascript.
const valuesub = document.querySelector(".myanchor");
const info = valuesub.getBoundingClientRect();  // getBoundingClientRect() method will be use to determine the value of dimensions of the given element. 
console.log(info); 
const newinfor = valuesub.getBoundingClientRect().top;
console.log(newinfor);  // hamm is property ke help se kisi bhi element ka dimensions pta kar sakte hai.
