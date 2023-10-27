// here we are using the for loop to get the each element fromt the HtmlCollection & NodeList.
//(1)usage of getElementsByTagName()
const val = document.getElementsByTagName("li");
for(let i= 0;i<val.length;i++){
    const sup = val[i];
    sup.style.backgroundColor = "RED";
    sup.style.color = "black";
}

const newval = document.getElementsByTagName("ul");
for(let j = 0;j<newval.length;j++){
    const myval = newval[j];
    myval.style.borderColor = "black";
    myval.style.backgroundColor = "silver";
}

// now we will try to change the HtmlCollection into array
let navitems = document.getElementsByClassName("mygallery");
console.log(navitems);
navitems = Array.from(navitems); // this is a conversion of htmlcollection into array.
console.log(navitems);// we can also convert the NodeList into array.

// InnerHtml 
const value = document.querySelector(".fordiv");
console.log(value); // this will state about the innerhtml
let newvalue = value.innerHTML
console.log(newvalue); // this will print the InnerHtml on the console.
value.innerHTML = "<p>you know everything happen for a reason because the leaf cannot swing without the permission of god so that's why try to learn new things everytime and everywhere.</p>";
console.log(value.innerHTML);// here we are changing the InnerHtml directly by using the InnerHtml syntax or method.

// ---------------------- DOM Keypoints ----------------

/* Document Object which is formed by browser is called as Root Node.(document is a javascript object)
For the better understanding of the dom usually we like to draw a DOM tree for the better representation of the html element tag. */

// DOM Traversing 
const rootNode = document.getRootNode();
console.log(rootNode); // here we get the root element as a document object.
console.log(rootNode.childNodes); // this will provide the ChildNode of the RootNode element(document).
console.log(rootNode.childNodes[1]);// through this we can find the value from a particular index of a array like object called NodeList.

const htmlnode = rootNode.childNodes[1];
console.log(htmlnode); // give childnode element under document object

const mychildnode = htmlnode.childNodes[1];
console.log(mychildnode); //child node under html tag for 1st index position

const headchild = htmlnode.childNodes[2];
console.log(headchild);

console.log(headchild.parentNode);
console.log(htmlnode.parentNode);

console.log(htmlnode.nextSibling); // this will give the nextsibling of the NodeChil d element.

// Note: nextElementSibling are used to remvoe the text element from the html file during the selection of childnode from document object.

const container = document.querySelector(".fordiv");
console.log(container.children);