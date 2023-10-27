// Some important Methods for String case.
//Note: Strings are immutable so we cannot change the string directly but the copied version of the same string we can change.
// trim() method
let mystring = "    Ratnam     ";
console.log(mystring);
console.log(mystring.length);
// now we want to change our string so for that we will use "trim() method"
console.log(mystring.trim());// see strings are immutable
user_input = mystring.trim();// assigning the value into another variable.
console.log(user_input);
console.log(user_input.length);

mystring = mystring.trim();
console.log(mystring);
console.log(mystring.length);

// toUpperCase() method
let new_string = "vivek singh";
console.log(new_string);
value = new_string.toUpperCase();// it will convert the lowercase into uppercase but in copied value of variable
console.log(value);

// toLowerCase() method
let new$string = "VISHWAS";
console.log(new$string);
my$value = new$string.toLowerCase();
console.log(my$value);

// slice() method
let new_str$ing = 'vishal';
console.log(new_str$ing);
str$ing = new_str$ing.slice(0,4);// slice(start index , end index)
console.log(str$ing);
// 1:09:01