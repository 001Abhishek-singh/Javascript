// Array methods  --- there are various methods in array
// NOTE: we leave the sort method in array due to less logic and inconvenience.

// (1) forEach 
/* here we want to show the array element by calling throught the function.
let numbers = [12,34,5,6,7];
function myfun(number,index){
    console.log('the index value is ',index ,'and','the number of the array is',number);
}
myfun(numbers[1],1);*/
// the above same we want to do that for the all the index element and for their index number.
let numbers = [12,34,5,6,7];
function myfun(number,index){
    console.log(`the index value is`,index,'and','the number of the array is ',number);
}
/*for(let i=0;i<numbers.length;i++){
        myfun(numbers[i],i);// calling the function inside the loop
}*/

// the same things we can do by the helop of forEach method;
numbers.forEach(myfun);// callback function we will use;

console.log('next example of forEach array method');

// let's take an another example of forEach array method
let strings = ['abhishek','vivek','shivam','ashish',
'kumar','sahil','utkarsh'];
function stringinarray(value,index){
    console.log('the each element of the string at given index' ,index ,'is',value);
}
strings.forEach(stringinarray);

console.log('next example in that case when direct function call by forEach method.')
// direct insertion of the function inside the forEach method in array case.
let strings$ = ['vivek','shivam','ashish',
'kumar','sahil','utkarsh'];
strings$.forEach(function(value,index){
    console.log('the each element of the string at given index' ,index ,'is',value)
})


// (2) Map method  --- it will provide 'new array' and 'try to return the map function'
let numb = [2,43,5,1,3,6];
function mymapfun(num){
    return num*num;
    //console.log(num*num);
}
let storeage = numb.map(mymapfun);// storeage will be a new array which is formed by the map method
console.log(storeage);// callback function always try to return something(here callback function is mymapfun).


// (3) filter method --- this method also provide 'new array' and the callback function of filter method "always" 'return boolean value'(either true or false).
let mynumb = [3,2,4,1,5,4,6,0];
function iseven(even){
    return(even%2 == 0);
}
let output = mynumb.filter(iseven); // iseven is a callback function of filter method.
console.log(output); // here output will is new array contain only those value which is even(it means return boolean true).

//second example of filter method.
let mynumbe = [23,4,11,42];
function isodd(valueout){
    return valueout%2  != 0;
}
outputforodd = mynumbe.filter(isodd);
console.log(outputforodd);


//(4) reduce method 
let meranumber = [2,3,6,4,2,6,4,7,8,9];
function checktosum(accumulator,currentValue){
    return accumulator + currentValue;
}
let merastore = meranumber.reduce(checktosum);
console.log('the total value of array is',merastore);
// accumulator,currentvalue ,return
//  2      ,   3       ,5
//  5      ,6         ,11
// 11        ,4    ,  15
// 15        ,2     , 17
// 17      ,6     ,    23
// 23       ,4      , 27
// 27    ,    7    , 34
// 34    , 8      , 42
// 42    , 9     , 51  //  it is just an example of reduce method to understand it properly

let mystone = [
    {product1: 'mobile',price:23423},
    {product2: 'laptop',price: 45322},
    {product3: 'television',price:4321}
]
function totaloutput(accumulator2,currentvalue2){
    return accumulator2 + currentvalue2.price;// here we return the object but as we destructure the object hence now we are able to solve ahead.
}
let out = mystone.reduce(totaloutput,0);// here we need to provide the initial value to the accumulator2 so that they can proced ahead.
console.log(out);

//(5) Find method
const mystring = ['your','appka','tera','sabkaaa','mastimar'];
function finditem(item){
    //return item === 'appka';
    return item.length === 7;
}               
const ans = mystring.find(finditem);
console.log(ans);

// another example of find method
const mystr = [
    {user1:'abhishek',education:'b.tech'},
    {user2:'vivek',education:'Eco(hons.)'},
    {user3:'raj',education:'mbbs'},
    {user4:'shivam',education:'mba'}
]
function finditem2(item2){
    return item2.user3;
}
const myans = mystr.find(finditem2);
console.log(myans);

//(6) Every method --- it will check the condition is it satisfied for all the elements or not if yes then return true otherwise return false.
const mystring$ = [20,10,41,6,12,2];
function merafunc(item){
    return item%2 == 0;
}
const myanswer = mystring$.every(merafunc);
console.log(myanswer); // it will check for all the elements it they will satisfied then give true 

// another example of every method
const checkprice = [
    {product101:1,productname:'MOBILE',price:12300},
    {product102:2,productname:'TELEVISION',price:14500},
    {product103:3,productname:'LAPTOP',price:15500},
    {product104:4,productname:'COOLER',price:18500}
]
function mycheckprice(items){
    return items.price <=20001;
}
const chekk = checkprice.every(mycheckprice);
console.log(chekk);

//(7) Some method --- it will check that atleast one condition will satisfied if it occur then it will return true otherwise it return false.
const mystring$$ = [201,101,411,63,123,23];
function merafuncti(item_){
    return item_%2 == 0;
}
const myanswer2 = mystring$$.some(merafuncti);
console.log(myanswer2); 

// another example of some method
const checkprice2 = [
    {product101:1,productname:'MOBILE',price:12300},
    {product102:2,productname:'TELEVISION',price:14500},
    {product103:3,productname:'LAPTOP',price:15500},
    {product104:4,productname:'COOLER',price:500}
]
function mycheckprice2(items2){
    return items2.price <=10000;
}
const chekk2 = checkprice2.some(mycheckprice2);
console.log(chekk2);

//(8) Fill method (value,start,end) --- if we want to fill the array by the same number then for that purpose we will use fill method
const myarray = new Array(7).fill(6);
console.log(myarray);

const myarray2 = new Array(11).fill(-1);
console.log(myarray2);

const ann = [1,23,4,5,7,9,7,9,41,54,2,45];
ann.fill(-1,2,7); // -1 is a filling value,2 is starting index,7 is ending index.
console.log(ann);

const annma = [23,12,32,432,4,,212,312,76,98,99,101];
annma.fill(-101,1,8);
console.log(annma);

//(9) Splice method(start,delete,insert)
// deleted condition under splice method
const takearray = [242,21,34,5,667,49];
takearray.splice(2,1);
console.log(takearray);
const deleteditem = takearray.splice(2,1);
console.log('the deleted item is',deleteditem);

// inserted condition under splice method
const takearr = [242,21,34,5,667,49];
takearr.splice(1,101,102,103,104,105);
console.log(takearr);
const inserteditem2 = takearr.splice(1,101,102,103,104,105);
console.log('the inserted item is',inserteditem2);

// both deleted and insertion condition under splice method.
const takearray2 = [242,21,34,5,667,49];
takearray2.splice(2,3,'abhishek','vivek',103,105,2023,878,'thanks');
console.log(takearray2);
const deletedandinserteditem3 = takearray2.splice(2,3,'abhishek','vivek',103,105,2023,878,'thanks');
console.log('the deleted and inserted item is',deletedandinserteditem3);

// variablename.splice(starting index,no.of items want to delete,no.of items want to add);
// splice(1,1,'kunal');

// 07:52:15