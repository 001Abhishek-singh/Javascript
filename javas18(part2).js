/*(07/07/23) Hello world now in this session we will learn some more concept in javascript */

/* we can add the javascript file by 4 way 
(1) <script src = "myfile.js"></script>  --- added in the head tag(this is generally not usable)
(2) <script src = "myfile.js"></script> --- added below the body tag
(3) <script src = "myfile.js" async></script> --- added in the head tag
(4) <script src = "myfile.js" defer></script> --- this is the ' best way ' to add the js file and this file also added in the head tag.
*/


// DOM --- DOCUMENT OBJECT MODE

// Browser will see the html file and they make a object that is known as document and after that the browser will add the object document inside the window object which is present inside the javascript.
console.log(this);
console.log(window.document);// Object in the form of browser.
console.dir(window.document);// in the javascript object format
console.dir(document)// we can also write in this format. 