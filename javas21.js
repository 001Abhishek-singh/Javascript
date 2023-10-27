// In this session we will learn about the ClassList.
const classlisttake = document.querySelector(".fordiv");
console.log(classlisttake.classList);//ClassList is a property used to check the classes in the html page.

// Now we will create the 'new class' to the html file directly by using the javascript.
/* step 1: create a class name in the style sheet(css file)
step 2: select the html tag where we want to put or add our class by using the javascript.
step 3: select the ClassList property in the javascript file.
step 4: create the class in the following manner:
const placetoaddclass = document.querySelector(".old-classname");
placetoaddclass.classList.add('new-class'); */

classlisttake.classList.add('new-class');
classlisttake.classList.add('phir-class');

// we can also remove the class from html file directly by using the javascript.
classlisttake.classList.remove("phir-class");

// To check whether the class is existing or not.(it will give true or false statement).
const checkclass = classlisttake.classList.contains("phir-class");
console.log(checkclass);

const checknewclass = classlisttake.classList.contains("fordiv");
console.log(checknewclass);

// Toggle property -- ye dekhega ki class exist karta hai ya nahi agar exist karta hoga tab us class ko remove kar dega warna new class create karega.
classlisttake.classList.toggle("sub-class");
classlisttake.classList.toggle("fordiv");

// Try to avoid the use of innerHtml whenever we want to add the HTML element directly by using the javascript into the html file because it will affect the performance of the website.
// but we can use this to change the existing content of the html element or tag.

// NOW we will see that how we can add the html element by using the javascript file.
const addelement = document.createElement("p");
const addelementsec = document.createElement("img");
const addinfo = document.createTextNode("hello world i am learning javascript");
const addinfosec = document.createTextNode("abhishek.png");
addelement.append(addinfo);
addelementsec.appendChild(addinfosec);

console.log(addelement);
console.log(addelementsec);


// We use 'createElement','append' & 'appendChild' to add the element on the html page by using the javascript.
const addvalue = document.createElement("h1");// we are creating a html tag
const addvaluesec = document.createTextNode("Famous Javascript"); // providing the information to the given tag.
const myfavdiv = document.querySelector(".mygallery"); // selecting the class where we want to add the new html tag
addvalue.append(addvaluesec); // appending the new html tag and their value
myfavdiv.append(addvalue); // appending the new html tag to the given class where we want to add it. 
console.log(addvalue); // print the value
// 2nd example
const addpara = document.createElement("p");
const addparasec = document.createTextNode("this is a paragraph tag where we put the value in para and this is essential to take the value");
const mynewdiv = document.querySelector(".mygallery");
addpara.prepend(addparasec); // prepand will use to append the html tag in startin of the class.
mynewdiv.prepend(addpara);
console.log(addpara);
// 3rd example
const addparaval = document.createElement("p");
const addparasecval = document.createTextNode("ham hai hero sabse achhe.");
const mynewdivval = document.querySelector(".mygallery");
addparaval.append(addparasecval); // prepand will use to append the html tag in startin of the class.
mynewdivval.append(addparaval);
console.log(addparaval);

// remove property
//mynewdivval.remove();//here we are removing the appended html tag.
//console.log(addparaval);

// Properties to add the html element in html file directly by using the javascript.
//(1) createElement()
//(2) createTextNode()
//(3) append()
//(4) prepand()
//(5) remove()
//(6) before()
//(7) after()
//(8) .textContent


//... There are another 5 property which is used to add the html element by using using by javascript....
//(i) element.insertAdjacentHTML(where,html)
//(ii) beforebegin;
//(iii) afterbegin
//(iv) beforeend
//(v) afterend