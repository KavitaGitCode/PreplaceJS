//Ref Link: https://builtin.com/software-engineering-perspectives/currying-javascript
//Currying in JavaScript is a process that allows you to transform a function with multiple arguments into a sequence of nesting functions.
// It returns a new function that expects the next argument inline. -->  
// Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.
//Currying creates nesting functions according to the number of the arguments of the function. Each function receives an argument. If there is no argument, there is no currying.

/* Why is currying useful in JavaScript?

1. It helps us to create a higher-order function
2. multiple smaller functions that can handle one responsibility.
It is very useful in building modular and reusable code more readable
It helps us to avoid passing the same variable multiple times*/

function sum(a, b){
    return a + b
}
console.log(sum(3, 8));

// Closure always contains the function definition along with the lexical environment of the parent, both things remain connected as a bundle. Hence, it does not matter where we invoke them, the all inner functions will always hold access to the variable of their parent.

//Curried functions are constructed by chaining closures and by defining and immediately returning their inner functions simultaneously.

//curring functions takes one parameter at a time.
function sumNew(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
/* Currying transforms a function with multiple arguments into a sequence/series of functions, each taking a single argument. */
console.log(sumNew(5)(5)(10));

/* Why Is Currying in JavaScript Useful? */
/* 1. Currying helps you avoid passing the same variable again and again.
2 .It helps to create a higher order function. */

const sum1 = sumNew(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6

function buildSandwich(ingredients1){
 return function(ingredients2){
    return function(ingredients3){
        return `${ingredients1}, ${ingredients2}, ${ingredients3}`
    }
 }
}

const mySandwitch = buildSandwich('bread')('tomato')('becon');
console.log(mySandwitch);

/* let's refector of this code  Modern currying with ES6*/
const buildSandwitch2 = ingre1 => ingre2 => ingre3 => {
    return `${ingre1}, ${ingre2}, ${ingre3}`
}

const mySammy = buildSandwitch2('tukey')('cheese')('bread');
console.log(mySammy);

//Partially applied curreing
const multiply = (x, y) => x * y;
console.log(multiply(2, 8));

const multiplyCurring = x => y => x * y;
console.log(multiplyCurring(2));
console.log(multiplyCurring(2)(8));

//or else you can save it varibale
let timesTen = multiplyCurring(10);
console.log(timesTen(8));

///curring with bind...bind creates new function
const curry = (func, varX) => {
    // console.log(func.length, 'func'); //3 (x, y, z) 1 time log
    return curried = (...args) => {
        //console.log(func.length, 'func'); //3 (x, y, z) 3 time log one for each parameter
        console.log(args.length, 'length'); //1,2,3 
        console.log(...args); 
        //curring means number of arguments has to be the equals to the number of functions returns 
        if(func.length !== args.length){ 
            return curried.bind(null, ...args) //bind create new function
        }
        return func(...args);
    }
}

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);
console.log(curriedTotal(2)(9)(5));

let addNum = (x, y) => x + y;
let addFive = addNum.bind(this, 7);
/* console.log(addFive); */
console.log(addFive(8));

function greetings() {
    let currentTime = new Date().getHours();
    if (currentTime < 18) {
        return 'have a nice day';
    } else {
        return 'have a wonderful night';
    }
}

function wishPerson(greetingMsg, name) {
    console.log(`${name} : ${greetingMsg()}`);
}

wishPerson(greetings, "John Doe");






