//heap memory(non-primitive value)
//stack nemory (primitive values)

//datatypes are based on memory allocation
/* Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it. */

let user1 = "Kavita";
let user2 = user1;

console.log(user1);
console.log(user2);
console.log("----------------------------------");
user1 = "Harsha";

console.log(user1);
console.log(user2);

let obj1 = {
    email: "abc@mgail.com",
    id:234
}

let obj2 = obj1;

console.log(obj1);
console.log(obj2);
console.log("----------------------------------");
obj2.id = 321;
console.log(obj1);
console.log(obj2);

//Garbage Collection in JavaScript | Garbage Collecto
/* uses...mark and sweep algorithum...
so whenever object is in use or it will be refer to another object...it will be mark to reachable, will be change>
whenever the obhect are unreachable ...not in use...it will be grabage collected means it delete.

What is Garbage collectors
	it is programme in javascript engine. Which freeze the un-utilise memory. In javascript, whenever there is some unused variables it kind of take it out of memory which freez the memory , whenever js engine find out this variable is no longer need it. That is what garbage collector do. */