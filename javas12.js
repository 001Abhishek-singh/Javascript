// Sets() --- it is iterable and store only unique data,they have its own methods and no index-based access,here order is not guaranted.
// set is formed by datatype variable name = new Set(item);
// we cannot use the 'length property' in the Set to find the length of the set element.

const number = new Set('abhishek');
number.add('vivek');// add method in set which is used to add the item in the set.
console.log(number);
console.log(number.has(2));

let number1 = new Set([12,3,5,3,'shiv']);
console.log(number1);

let number2 = new Set();
number2.add(23);
number2.add(14);
number2.add('sati');
number2.add(['shalini','swati',]);
number2.add(['keshav','astha']);
console.log(number2);

let number3 = new Set([23,1,4,3,5]);
console.log(number3.has(56)); // 'has method' use to check the item is present inside the set or not.if item is present then it will return true and else return false.

let num = new Set([12,4,245,79,91,108]);
for(let i of num){
    console.log(i);
}

// in this session we will learn about the iterables in javascript
// iterables are those item in javascript on which we can apply the for of loop, like on string and array

const mystring = 'shalini';
for(let char of mystring){
    console.log(char);
}// this is an example of iterable because we can use for of on the string effectively.

const myarray = ['item1','item2','item3','item4'];
for(let item of myarray){
    console.log(item);
}// this is another example of iterable where we can use for of on the array effectively.
console.log(myarray[2]);

// array like object --- jinke paas 'length property' hoti hai aur jinko hum index se access kar sakte hai example: string and array

const firstname = 'shivam';
console.log(firstname.length);