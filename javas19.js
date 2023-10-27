// now we will study about the various properties by using the DOM.
//(1) select element by using 'getelement by id' through dom,it is only used for id selector
console.log(document.getElementById("forhome"));
console.dir(typeof document.getElementById("forhome")); // this will create the 'li object' for the home id.

//(2) select element by using query selector through dom,it will used for all types of selector.ye kewal ek hi class ko select karega wo bhi jo sabse pehle html file me likha hoga uus class ko select karne ke baadh baki sabhi class ko ignore kar dega.
console.log(document.querySelector(".mygallery"));
console.log(document.querySelector("#forhome"));
console.dir(document.querySelector("#forhome"));
const fordivclass = document.querySelector(".fordiv");
console.log(fordivclass);

// agar ham sabhi class ko select karwana chahte hai to iske liye --------- 'queryselectorall' ka use karna padega.
//(3) select element by using query selectorall through dom. it will give 'NodeList'  --- it is array like object.
console.log(document.querySelectorAll(".mygallery"));

//(4) textContent --- use to display or change the text by using the javascript into the html file.
const changevalue = document.getElementById("forhome");
console.log(changevalue.textContent);
changevalue.textContent = "let's change the value"
console.log(changevalue);

const newvalue = document.querySelector(".mygallery");
console.log(newvalue.textContent);
newvalue.textContent = "Second value changed"
console.log(newvalue);

//(5) Innertext --- use to display the text which is visible on the screen.
const subvalue = document.getElementById("forhome");
console.log(subvalue.innerText);
subvalue.innerText = "Text change by javascript";
console.log(subvalue);

//(6) Change the style of the element.
const newstyle = document.getElementById("forhome");
newstyle.style.color = "black";
newstyle.style.backgroundColor = "orange";
newstyle.style.fontSize = "44px";
console.log(newstyle);

const takenewstyle = document.querySelector(".mygallery");
takenewstyle.style.backgroundColor = 'white';
takenewstyle.style.fontSize = "32px";
takenewstyle.style.border = "2px solid red";
console.log(takenewstyle);

// Get & Set attributes
const foranchor = document.querySelector("a");
foranchor.style.fontSize = "44px";
console.log(foranchor);
console.log(foranchor.getAttribute("href"));// we get the attribute
console.log(foranchor.setAttribute("href","https://www.google.com"));
console.log(foranchor.getAttribute("href"));// we set the new attribute

//(7) get multiple elements using getElements by class name
const navItems = document.getElementsByClassName("mygallery");
console.log(navItems);// it will give the HtmlCollection and it is array like object on which we can perform indexing on the HtmlCollection.
console.log(navItems[0]);

// NOTE: In array like object we can only use indexing and length property on that given array.

const secu = document.getElementsByClassName("mygallery");
for(let i = 0;i<secu.length;i++){
    console.log(secu[i]);
}