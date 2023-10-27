// clone nodes
const ul = document.querySelector(".mygallery");
const li = document.createElement("h3");
li.textContent = "clone node";
const li2 = li.cloneNode(true);// this property is use to clone the value and 'mentioning the "true" is must' for the cloning of a value.
ul.append(li);
ul.prepend(li2);
/* there are some alternate property which is used only for internet explorer like
(1) appendChild
(2) insertBefore
(3) replaceChild 
(4) removeChild
*/


// Static list vs Live list
//Note:  querySelectorAll hame 'static list' deti hai aur ye 'NodeCollection/list' provide karta hai.

//Note:  getElementBySomething hame 'live list' deti hai aur ye "HtmlCollection" provide karta hai. 

// how to get the dimension of the element.
// getBoundingClientRect() --- this will give the dimension of the element.
const mydimension = document.querySelector(".fordiv");
const info = mydimension.getBoundingClientRect();
console.log(info);
// we can also find out the specific dimension of any element such as only width,height,x-axis,etc.
const info2 = mydimension.getBoundingClientRect().width;
const info3 = mydimension.getBoundingClientRect().height;
console.log(info2);
console.log(info3);