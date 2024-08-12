# What is Call, Apply, Bind?

 We used call apply bind methods for borrowing functions. Suppose we want to borrow some method from one object to another object..or we want to borrow some function on object we used these methods.
 /the "this" value (object on which the function is to be called)
//2nd Arguments is passing individually for the function. call(seprated by ",") (apply pass it in [array])
//call and apply method immediately execute the function. doesn't return another function.
'Bind'  doesn’t immediately execute the function.
//you have to save it in variable and use it later.  .bind() returns a new function object.

# What is Scope?

Scope : {} is curly brackets, it determines, the accessibility of particular variable or function in their containing scope...where we can access variables and functions.

In a given part of code or program, scope helps us to detemine, what variables and functions can access with the scope, and what variables or functions one cannot access.

 Js engines uses scope to manage the variable accessibility.

 . Block Scope: it typically define by '{}' curly braces. Block is which where we wrapping multiple js statements and group together For Eg: for loop, or if else condition. 'let' and 'const' also has block scope.
    2. Function Scope: Function scope has local variable so we can't use it  that local var outside of that function scope. THis local variable will be deleted after the completion of function.
    3. Global Scope: If we created any variable on global scope we can access it from any place of that script file or any function scope or any block scope. It’s actually created on global level so u can access it with window key word. But variable created with 'let' you can't access it on window level but variable created with 'var' keyword you can access it.

 ```javascript
 var myObj = {
    foo: 'bar',
    fun: function () {
        var self = this;
        console.log(this.foo); //bar
        console.log(self.foo); //bar
        (function(){
             console.log('inner', this.foo); //inner undefined
             console.log('inner', self.foo); //inner bar
        }())
    }
}
myObj.fun()
//result
bar
VM706:6 bar
VM706:8 inner undefined
VM706:9 inner bar
 ```   

# What is Lexical Scope

    Lexcial means where the variable is inheritantly sitting inside source of code.

# What is Lexical Environemnt

   When we innovke function, function execution context is created and put inside call stack. When function execution context created at that time lexical environment is also created.
   It contains local memory of that function plus its parents lexical environment.
   It stores, all variables and functions reference records of its parents lexcial scope.

   short:
   when? IF...FEC...and put in call stack..when FEC create at that time Lexcical ENV create
   contains: LM + It's PLE
   Store: All 1)VAR & FRR of PLS

# what is Scope CHain

example:
JS engine keeps searching inside lexical enviorment of parents
Until it find the variable or function being access
the machanisum by which JS engine seraching variable accessibility inside its parents lexical scope
is known as Scope CHain

Example : Suppose if you try to access a variable or function inside a particular scope and if that variable is not inside that local scope, so JS engine keeps on searching the lexical environment of its parent until it finds the variable or function being accessd. This mechanism by which JavaScript Engine searches or (way of finding variable inside its lexcial scope) for variables within the code that it executes is known as Scope Chain.  
If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the browser's console. Please check below code.

If js engine doesn't find anything in local memory of function then it will look into outer function for that, and if it not found in it then it goes to next level of scope and eventually it reach to the globalscope.

# What is the Closure?

    Function along with its lexical environment bundles togeather forms a closure. In simple term we can say that, closure gives you access to an outer function scope from an inner function. A function along with its outer lexical environment froms a closure.

1. closures do not store static values.
2. Instead, they store references to the variables present inside the lexical scope chain. (IMP)
3. In this way, even if the outer function (cease or exit) dies, the inner function, that is a closure, still has access to its parent variables.

    - A closure is a function that preserves the outer scope in its inner scope.
    - The closure is created when a child functions to keep the environment of the parent’s scope even after the parent’s function has already executed.

    Short:
    1. What: F Along with LX:ENV bundle togeather forms a closure...simple term ...we can access OFS from IFS..
    2. IFS preserve OFS even if the parent func is already EXECUTED (IMP)
    3. HoW: closure store (Ref to the var) present inside the LSC *****IMP

```javascript
function greet(message) {
    function sayHi() { //this function forms a closure
        console.log('Hi' + ' ' + message);
    }
    //Note that functions are the first-class citizens in JavaScript, therefore, you can return a function from another function.
    return sayHi; //return function defination
}

const hi = greet('John'); // outer function ceases(no longer) to exist
// hi is closures. They share the same function body but store different scopes.
console.log(hi); // returns the function definition
hi(); // calling the function
```

**Advantage**: data encapsuliation and data privacy...They allow you to attach variables to an execution context...maintain variable state that you can use later.Useful for currying and callback func. 
**Disadvantage**: variable declare inside the closure are not grabage collected. so  its affect script performance both in terms of processing speed and memory consumption will slow down your application.
Short cut : MC and PS: slow down you applicaton perfomance

# setTimeout with Closure

```javascript
for(var i=0;i<5;i++){
  setTimeout(()=>console.log(i), 2000);// 5 5 5 5 5
}

//Why this happens? this question is asked in interview
  1. when we used setTimeout function..its async operation to take some time to perform.
  2. loop continues to execute without waiting for the timeouts to finish. 
  3.  By the time the timeouts execute, the loop has already finished 
  4. value of (i is 5) in all the timeout callbacks because the loop has already completed its iterations.

//SOLUTION
  1. One way to fix this is to use a closure to capture the current value of i for each iteration. 
  2. each iteration creates its own closure, capturing the value of i at that moment in time, and the correct value of i will be logged after the respective delay.

for(var i = 0; i < 5; i++){
  (function(currentIndex){
    setTimeout(() => {
      console.log(currentIndex)
    }, currentIndex * 1000)
  })(i)
}

//each iteration creates its own closure, capturing the value of i at that moment in time, and the correct value of i will be logged after the respective delay.

//another example
function func1(){
    setTimeout(() => {
        console.log(x); 
        console.log(y)
    }, 2000)
    var x =2;
  
  let y = 10
}

func1() //answer ...2,10
```

# What is currying?

  Its a technique of evaluating function with single / multiple arguments into sequence of functions with single /multiple arguments.
 If there is no arguments there will be no currying.

currying functions are constructed by chiaining closure and immediately returning their inner functions simultaneously.

### advantage of currying?

    1. it helps to avoid passing same variables multiple times
    2. Create higehr order function
    3. multiple smaller functions that can handle one responsibility.

### code example

```javascript
const multiply = num1 => num2 => num3 => {
    return num1 * num2 * num3
}
multiply(2)(3)(4); 
```

Ref Link: PreplaceJS\curring.js... Curring-Aman.js

# What is execution context and call stack in js?

for "execution context" please check : D:\Preplaced\PreplaceJS\session-1-task\notes.

## Call Stack

 Call stack in present inside JS engine to manage the execution of function calls. It keeps track of all execution context to currently running functions and allow JS to manage function calls in LIFO manner.

- Global Execution Context created by JS engine itself.
- When a function called then a new Functin Execution Context created and pushed into call stack.
- Call stack keeps monitoring the function execution.
- Once Function Execution Context get removed from call stack then it destroyed.
- Maximum depth of call stack is 10 million. But JavaScript engine can handle upto 500 million calls.
- LIFO: Last In First Out: Call stack is keeping track of which function execution. context should go first so that it can clean up after its execution. So that it can return back to previous function after completion of current function.

# What is callback function? (check async)

A function which we passed to the another function as argument and perform some operations is known as callback function.
eg setTimeout...

```javascript
//example of synchronous callback
function sum(a, b){
    return a + b
}
function multiply(x,y){
    return x*y
}
function showResult(num1, num2, operationFun){
    return operationFun(num1, num2)
}
showResult(2, 3, sum); //5
showResult(2, 3, multiply); //6

const arr = [2,4,6,8]
const largeNum = num => num > 3

console.log(arr.filter(largeNum)) // 4,6,8

/* In the above example for the filter function, the callback function gets executed inside the filter function synchronously. Hence, it is called a synchronous callback. The filter function has to wait for the largeNum callback function to finish execution. Hence, the callback function is also called blocking callbacks as it blocks the execution of the parent function in which it was invoked. */

```

# Functions are first-class citizens in JavaScript?

1. Assign function to variable and use function as values
2. Pass function to another function as an argument
3. Returning functions from another functions. Functions that return a function are called Higher Order Functions.

Note: A function which take another function as an argument or returns a function from it, is known as HOF the function which is passed into higher order function is called callback function. This is possible only because function is a first call citizen in JS.

# What is Hoisting?

 Hoisting is a Javascript default beheviour, where all the variables and functions delcaration are moved to the top of their containing scope during compilation phase before the actual code execution. Even if you declare variables and functions later in your code, JavaScript acts as if you wrote them all at the very beginning of their scope.
  
 it's important to note that only the declarations are hoisted, not the initializations or assignments.
 So suppose if you want to try to aceess variable before declareing it

 1. "Var" keyword case : will give you undefined
 1. in "let" and "const" case : Uncaught ReferenceError: "variable nae" is not defined
 After Compilation (Hoisting):
 3. explain hoisting with Function Declaration + Function expression:

```javascript
javascript  original code 
console.log(x); //undefiend
var x = 5;
console.log(x);

After Compilation (Hoisting):

var x; // Variable declaration is hoisted to the top
console.log(x); // Output: undefined
x = 5; // Assignment remains in place
console.log(x); // Output: 5

```

# Difference between let, const and var

variable defined with 'var' keyword has global scope and function scope.
variable defined with 'let' keyword only has block scope (within the nearest containing block)
variable defined with 'const' keyword also has block scope but cannot be reassigned to a new value.

var : you can redeclared and update it,  into the scope. It can be declare without initialization. Or you can access before its declaration. It will not give you any error. But you got the 'undefiend' value

let : let can be declared without initialization and you can access its value which is 'undefined';
Const: but if you declare variable with "const" keyword without initialization will give you syntax error of missing initialization

 let and const declarations are also hoisted but with a subtle difference. They are hoisted, but they are not initialized. In other words, you can't access their value before the declaration.

GLobal Scope ---> Global (Window Object ...Browser) + Script (local scope...local memory)

function scope:

```javascript

let a; //declare without initialization (let , var ...not for const)
//undefined
console.log(count) // tries to access the count variable before it is initialized, resulting in a ReferenceError.
let count = 10

```

block scope: let and const///like "var" keyowrd the predefined value or placeholder is "undefiend"
 for let and const....value "unavailable" is placeholder

 let and const are hoisted.
 If you try to access (const) before initialization will give an error .
 As they are in TDZ:

# const doesn't make the variable immutable, it just prevents reassignment of the variable itself

In JavaScript, the const keyword is used to declare a constant variable, which means that its value cannot be reassigned after it's initialized.

 you can't reassign a const variable, you can still modify its properties if it's an object or array.
for eg:

```javascript
const x = 5;
x = 10; // This will throw an error because you're trying to reassign a const variable

//However, if x is an object or an array, you can still modify its properties or elements:

const obj = { key: 'value' };
obj.key = 'new value'; // This is allowed

const arr = [1, 2, 3];
arr.push(4); // This is allowed


```

## What is temporal Dead Zone?

  .if the variable declare with "let" and "Const" ...and In memory creation phase.....will get  value unavilable for these variable ...and in code execution when it reaches to the line of intialization...the time btween the declaration varaible (with let and const) and initialization(actual value assgine) of let and const...that time zone is Temporal dead zone. Thats why you are not able to handle the

```javascript
//let abc // undefiend
//const newMe : Uncaught SyntaxError: Missing initializer in const declaration

```

# What is shadowing and illegal shadowing?

## Shadowing

Shadowing is happend when variable declare with the same name in certain scope. Suppose if we declare a variable in outer scope and we declare variable with the same name in the inner scope. then the outter scope variable will be shadow by inner scope variable.

```javascript
//shadowing example
let a = 5;
{
  a = 10
  console.log(a) //10
}
console.log(a) //10
```

## Illegal SHadowing

In JavaScript, variables can be shadowed in both the global and function scope. Global variables can be shadowed by function-scoped variables, and function-scoped variables can be shadowed by block-scoped variables declared with the let or const keyword.

```javascript
let b = 10;
{
  var b = 34; //this is illegal shadowing..Uncaught SyntaxError: Identifier 'b' has already been declared
  console.log(b) 
}
 console.log(b)
```

let a < var a //Uncaught SyntaxError: Identifier 'a' has already been declared

var n < let n /// will work not giving any error

for example please check : PreplaceJS\session-2-task\notes.md example.

# what is the use of anonymous functions?

1. We can store anonymous function in variable and use as value later on.
2. we can pass anonymouse function as an argument to another function.
    eg: setTimeout or setInterval or event handlers
3. Anonymous functions can be used to create IIFE(Immediately Invoked Function Expressions ), which execute immediately after being defined.
    Benefits
    1. Create complete new scope (we can create private "Declaration of Private variable")
    2. Data Hiding and Encapsuliation...IMP
    3. avoid polluting the global namespace variable
    4. prevent naming collisions
    5. it will help to create function on the fly.

for example please check : PreplaceJS\session-2-task\notes.md

# difference between function expression, function declaration, function statement

Function means: sets of statements that perform some task and then return the result to user

Function declaration (function Statement) is "Hoisted" emans we can call it before its initialized in JS
Function Expression is NOT Hoisted, means we cannot call it before its initialized

When it comes to hoisting, all functions and variables are hoisted. But, functions created with function expressions cannot be "used" before their initialization.

# Advantages of Function
Using functions in JavaScript offers several advantages, which contribute to better code organization, reusability, and maintainability. Here are some key advantages of using functions in JavaScript:

Modularity: Functions allow you to break down a program into smaller, more manageable pieces. This makes the code easier to understand, maintain, and debug. Each function can be designed to perform a specific task, promoting modular programming practices.

Code Reusability: Functions can be reused multiple times within a program or across different programs. Once a function is defined, it can be called as many times as needed, reducing code duplication and promoting the DRY (Don't Repeat Yourself) principle.

Abstraction: Functions allow you to abstract away complex logic into a single unit, making the code more readable and easier to work with. By giving a meaningful name to a function, you can hide the implementation details and focus on what the function does rather than how it does it.

Encapsulation: Functions create a scope in JavaScript, which helps in encapsulating variables and logic. This helps prevent naming conflicts and unintended side effects. Variables defined inside a function are not accessible from outside the function, providing data privacy.

Parameterization: Functions can accept parameters, allowing you to pass data into the function for processing. This makes functions more flexible and versatile, as they can be customized based on the input provided.

Return Values: Functions can return values, allowing them to produce output that can be used elsewhere in the program. This helps in creating reusable and composable code.

Callback Functions: Functions can be passed as arguments to other functions, enabling the use of callback functions for asynchronous programming, event handling, and more. This is a powerful feature of JavaScript that allows for flexible and dynamic behavior.

Overall, functions are a fundamental building block in JavaScript programming that helps improve code quality, maintainability, and scalability. By leveraging functions effectively, you can write more organized, reusable, and efficient code.

# Difference between undefined and not defined

Everything in JavaScript happens inside the execution context. The JavaScript code is being executed in two-phase.
1.memory creation phase : In this phase , JavaScript creates memory space for all the variables and functions declarations in a program. For variable by default value is "undefined" is assigned.
2.code execution phase : Each variable holds the value undefined till the program reaches the line where we have assigned that variable. After that line, the variable’s undefined value gets replaced by the original value.

## Undefined

- A variable that has been declared but its value hasn't been assigned yet.  When a variable is declared yet not initialized, it is automatically assigned the value of undefined by JavaScript.

**example**
let name; //undefined

## not defined

- When we try to access the variable that doesn't exist or did not declare the variable in program.

## NULL

null is explicitly assigned by a programmer to indicate that a variable has no value.

# CRP (Critical Rendering Path)

(SS) Sequence of Steps taken by bowser? where browser goes through to convert? kay?
 HTML,CSS, Javascript of webPage into (kashat) Pixels on the screen.
it has 5 steps

1. DOM TREE Creation: Browser  read hte Row DOM tree and create structure of DOM TREE
2. CSSOM TREE Creation: The browser reads the CSS: Inline, internal External and construct CSSDOM
3. Create Render Tree: Combination of CSSOM TREE + DOM TREE. Shows only visible elements
4. Layout: Calulate the space, width, height of elementes and determines the postion and place of Elm.
5. Paint: Browser paint the pixel on the screen and shows all the nodes in form of calulated layout.

Reflow: is combination of layout + paint. Browser calculate geometrics of elements this process called reflow.
for example please check : D:\Preplaced\PreplaceJS\session-1-task\notes.md

# why we use asyn and defer in script tag ?

for example please check : D:\Preplaced\PreplaceJS\session-1-task\notes.

# Prototype

- Javascript is a prototype based language.
- Prototypes are the mechanism by which JavaScript objects inherit features from one another. (IMP)
- When you create a function/object in javascipt, JS engine adds "prototype property" inside these functions/objects.
- "Prototype Property" is nothing but "Prototype Object";
- Beacuse of this Prototype beheviour Object actually enables other objects to inherit properties and methods from another object. (IMP)
- String, boolean, number, functions under the hood in JS engine they all are Object.
- All JavaScript objects inherit properties and methods from Object.prototype , String.prototype, Number.proptotyep.
- Date objects, Array objects, and Person objects inherit from Object.prototype.

eg: Date objects inherit from Date.prototype
string.length (beacuse of proptotype)

passing properties from one object to another or inherit : Object.setPrototypeOf(which obj, from which obj u want to copy);

if you want to create by default method on Object; :

```javascript
String.prototype.newTrim = function () {}
```

# Prototype chain

JavaScript is an object-oriented programming language. In JavaScript, every object has a prototype object that acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object from which it inherits methods and properties, creating a chain of prototypes. This chain of prototypes is called the prototype chain. The prototype chain allows objects to inherit properties and methods from their ancestors, which can be useful for code reuse and efficiency. By using the prototype chain, you can avoid duplication of code and create more efficient and maintainable code.

# Constructor vs Object Literal

An object literal is typically used to create a single object whereas a constructor is useful for creating multiple objects.

# What is Constructor Function | JavaScript Constructor Function

Constructor function is a special function that used to create and initialize an objects with specific bluprints or templates.
Each object created using a constructor is unique as we create it with the new keyword.
Properties and methods can be added to a constructor using a prototype.

## Why We Need Constructor Functions?

- It is a convenient way to create multiple objects with similar properties and methods.
- It encapsulate the creation and initialization logic of objects in one place, making our code more modular and easier to maintain.

## How constructor function Works?

1. Inside the constructor function, you can define properties and methods for the new object being created by using this.
2. And we used "new" keyword to create new instance of object.
3. "NEW keyword" : what happens when you used new KeyWOrds (read : 1, 2, 3 points of new Kayword)
4. So basically it ensuring that each object is properly initialized with its own properties.

## "NEW keyword" : what happens when you used new KeyWOrds

1. New keywors : instantiate(create) the new Empty object.
2. This newly created object linked to the prototype property of constructor function.
   (this means the newly create object now able to access the methods and properties deffined on this constructor function)
3. Constructor FUnction called:  the constructor function is called with specified arguments and "this" keyword inside the constructor function is bound to newly createad object.
("this" is refers to the "current context" of newly created object) and it will get passed into our function.
4. Finally, if there’s no return statement in the constructor function, JavaScript automatically returns the new instance of object.

## example of constructor function

```javascript
function Mobile(company, year, country) {
  this.company = company;
  this.year = year;
  this.country = country;
}

/* You cannot add a new property to an object constructor the same way you add a new property to an existing object, what i mean by this is 
<!-- Mobile.founder = 'Carl Pei' --> this code will not work
*/
Mobile.prototype.language = "English"; //will work

/* add new methods to objects constructors: */
Mobile.prototype.founder = function (founderName) {
  return `${founderName} the founder of ${this.company}, is founded in ${this.country}`;
};

let oneplus = new Mobile("OnePlus", 2013, "china");
let nothing = new Mobile("Nothing", 2020, "London");

oneplus.founder("Carl Pei"); // 'Carl Pei is founded in china'

nothing.language; // 'English'
```

# What is the difference between prototype and instance properties in JavaScript?

A prototype property is a property that is defined on the prototype object of a constructor function.Prototype properties are shared by all objects that are created by a constructor function. 

 Instance properties are properties that are defined on individual objects that are created by a constructor function. Instance properties are not shared by other objects.

# Classes

1. ES6 provides a new syntax to create objects, using the class keyword.
2. It has constructor function if u don't metion it in class its automatically added inside class.
3. Constructor is a special method that called automatically when a new instance of class is created by using "new" keyword. The main purpose of COnstructor method is to initialize the newly created object.
 They implicitly return the newly created object instance.

4. Behind the scence the class is behave like constructor function.

```javascript
class Mobile {
  constructor(company, year, country) {
    this.company = company;
    this.year = year;
    this.country = country;
  }

  founder(founderName) {
    return `${founderName} the founder of ${this.company}, is founded in ${this.country}`;
  }

  yearsInMarket() {
    let currentDate = new Date().getFullYear();
    return `they have been in market for ${this.year - currentDate} years`;
  }
}

let samsung = new Mobile("Samsung ", 1938, "Korea");
let apple = new Mobile("Apple", 1976, "California");

samsung.founder("Kral Chai");
```

# What Strict Mode doing?

When we use "use strict"; at the begining of code, Strict mode applies certain rules to JS code.

1. Your codes prevents using variables before they were delcared,
2. Helping to avoid potential Hoisting-Related issue.

# THIS explain

please read PreplaceJS\this.md and PreplaceJS\this-aman.js

https://medium.com/@amsingh714/common-javascript-interview-question-what-is-the-purpose-of-this-e9f5e11720c5

# What do you mean by NULL in JavaScript?

 The NULL value represents that no value or no object. It is known as empty value/object.

# Write Pollyfill for Arrays?

 Do the practice for Code...
 PreplaceJS\session-4-tasks\Pollyfill\test.js

# what is the difference between conversion and cohersion

## cohersion : because javascipt is loosely type language

 means you unintentionally change the type or value (one data type is changing to another data type)

```javascript
 let name="Kavita"
 name = ['Kaavya']
```

## Conversion : we deliberatly want to change the type  

let a = 8;
let c = String(a)...using inbuild method and change data type

# Explain OOPS
Object	| Classes |	Encapsulation
Abstraction	| Inheritance |	Polymorphism

# What is “propagation”?

Propagation refers to how events travel through the Document Object Model (DOM) tree.

## Event Bubbling and Capturing

Bubbling and Capturing are the two phases of propagation. In their simplest definitions, bubbling travels from the target to the root(from child to parent), and capturing travels from the root to the target (from parent to child). However, that doesn’t make much sense without first defining what a target and a root is.

# Event Delegation (asked in Tech Mahindra)
Event Delegation is a pattern based upon the concept of Event Bubbling. 

Event delegation is a technique where you attach a single event listener to a parent element, and that event listener handles events occurring on its child elements.  It’s useful for dynamically created elements or when you have a large number of elements. It helps optimize performance and reduce memory consumption.

Instead of attaching an event listener to each individual element, event delegation involves attaching a single event listener to a common ancestor element that is higher up in the DOM (Document Object Model) hierarchy.

eg
```javascript 
//Due to event bubbling, when the button receives an event, say click, that event bubbles up the tree, so span and div will respectively receive the event also.
<div>
  <span>
    <button>Click Me!</button>
  </span>
</div>

//With event delegation, instead of handling the click event on the button, you can handle it on the div.
/* The idea is that you "delegate" the handling of an event to a different element (in this case, the div, which is a parent element) instead of the actual element (the button) that received the event. */

const div = document.getElementsByTagName('div')[0];

div.addEventListener(("click"), (event) => {
  if(event.target.tagName === 'BUTTON'){
    console.log('button clicked')
  }
})

The event object has a target property which contains information about the element that actually received the event. On target.tagName, we get the name of the tag for the element, and we check if it's BUTTON.

Event delegation is possible because of event propagation in the DOM, where the event a child element receives is also passed to the child's parent and ancestors.

//please check : PreplaceJS\event-delegation.html
```

# Can you explain the concept of destructuring in JavaScript?

Destructuring is used to create varibles from array items or object properties.
Spread syntax is used to unpack iterables such as arrays, objects, and function calls.
Rest parameter syntax will create an array from an indefinite number of values.

Destructuring in JavaScript is a feature introduced in ES6 that allows you to unpack values from arrays, or properties from objects, into distinct variables. This can greatly simplify your code, making it more readable and maintainable.

```javascript
let a = arr[0];
let b = arr[1];
let c = arr[2];

//With destructuring ARRAY
let [a, b, c] = arr;

let name = obj.name;
let age = obj.age;

//With destructuring Object
let {name, age} = obj;
```

# Using Destructuring Assignment with Rest Parameters:

```javascript
function num(...args){
  const [one, two, ...rest] = args;
  console.log(one, two, rest)
}
num(1,2,3)
```
#  several ways to access the arguments of a function

```javascript
//Using the arguments Object:
function num() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

num(1, 2, 3); // Logs: 1, 2, 3

//Using Rest Parameters (...args):
// Rest parameters allow you to represent an indefinite number of arguments as an array.
function num(...args) {
  args.forEach(arg => console.log(arg));
}

num(1, 2, 3); // Logs: 1, 2, 3

//Using ES6 Array.from Method:
//Another way to convert the arguments object to an array is using Array.from.

function num(){
  const args = Array.from(arguments);
  args.forEach((args) => console.log(args))
}
num(1,2,3)

//Using Destructuring Assignment with Rest Parameters:

function num(...args){
  const [one, two, ...rest] = args;
  console.log(one, two, rest)
}
num(1,2,3)

```

# Can we handle arguments throught arrow function : NOOOOOOOOOOOOOOOOOOOOOO

```javascript
let argArrow = () => {
  console.log(arguments)
}
argArrow(1,2,3)
```

# Can you explain the concept of immutability in JavaScript?

Immutability in JavaScript means that it can't be changed once a value is created. This is particularly useful in functional programming and can help to avoid side effects and make your code more predictable.

# Types of Erros

//   1. Reference

//   2. Syntax
//let abc // undefiend
//const newMe : Uncaught SyntaxError: Missing initializer in const declaration

//   3. Type error

//   4. Aggregate Error (async Promise.any() method/api)

# What is rest and spread operator?

The rest operator, represented by three dots (...), is used in function parameters to collect a variable number of arguments into an array. It allows you to pass an arbitrary number of arguments to a function without explicitly defining them as named parameters.

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs 10
```

The spread operator, also denoted by three dots (...), is used to spread the elements of an array or object into another array or object. It allows you to easily clone arrays, concatenate arrays, and merge objects.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
// mergedArray is [1, 2, 3, 4, 5, 6]
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };
// mergedObject is { a: 1, b: 3, c: 4 }
```

# What are the new features in ES6  (asked in interview 3 times)

1. let and const Keywords
2. Arrow Functions
3. Multi-line Strings : multi-line strings by using back-ticks(`).
4. Default Parameters : let calculateArea = function(height = 100, width = 50) {  }
5. Template Literals : let name = `My name is ${firstName} ${lastName}`
6. Destructuring Assignment

```javascript
//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b); //"Apple", "Banana"

//Object Destructuring
let person = {name: "Peter", age: 28};
let {name, age} = person; // Object destructuring assignment
console.log(name, age);
```

7. Rest parameter and spread operator (difference btweeen the rest param and spread param)
8. Promises
9. Classes
10. Modules (import and export)

```javascript
export var num = 50; 
export function getName(fullName) {   
   //data
};
import {num, getName} from 'module';
console.log(num); // 50

```

11. "abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"
12. JavaScript Maps and Sets

13. Array Methods
JavaScript Array.from(): It will return a array from any object which is iterable and has the length property associated with it.
JavaScript Array.keys(): It returns an array of the iterator keys of the array.
JavaScript Array.find(): It will return the value of the first array element that matches or passes the condition of the passed function.
JavaScript Array.findIndex(): It will return the index of the first array element that matches or passes the condition of the passed function.

14. Object Enteries
Object.entries() method is used to convert a single valued array into an array object with a key-value pair as array items.

# how to optimize code in javascript (INTERVIEW Deloitte..TECH MAHINDRA)

1. Remove unused code: This may sound obvious, but it is surprising how many developers forget to clean up unused functionality that was added during the development process.

2. Modules: You should also split your JavaScript into multiple files representing critical and non-critical parts. JavaScript modules allow you to do this more efficiently than just using separate external JavaScript files. JavaScript modules can be dynamically loaded using the import() function:

3. Consider built-in browser features: It might be that you can use a feature the browser already has, rather than creating your own via JavaScript. For example: CSS animations or video

4. Then you can optimize these smaller files. Minification reduces the number of characters in your file, thereby reducing the number of bytes or weight of your JavaScript.

- Gzipping compresses the file further and should be used even if you don't minify your code.
- Brotli is similar to Gzip, but generally outperforms Gzip compression.
- You can split and optimize your code manually, but often a module bundler like Webpack will do a better job of this. (Webpack, Vite, Parcel)

5. Using Async and deffer to metigate the  the blocking behavior and help to Optimized for rendering speed.

UNDERSTAND THIS
When your browser loading a page two major things happens
1. Html parsing
2. Loading of the scripts
    a. Fetching the script from server
    b. Executing script line by line

In general scenario when browser loading web page at that time HTML parsing start and when it reaches to `<script>` tag it stops parsing the html and start fetching the script from network and once the script is downloaded, it executed script on browser immediately, during this process html parsing is blocked, it won’t start until the script is completely downloaded.

To mitigate(reduce) the blocking behavior, we can use async and defer attributes.

ASYNC

1. Scripts with the "async" attribute are completely independent. Whichever loads first is executed first.
2. Async attribute is useful for scripts that are independent and don't rely on the DOM being fully loaded.

<script src="demo_defer.js" async></script>

DEFER

1. The script with 'defer' is downloaded in parallel to parsing the page, and executed after the page has finished parsing.
2. useful when the order of script execution is important or when scripts need to manipulate the DOM but don’t need to run immediately.

 <script src="demo_defer.js" defer></script>

**Async and Defer both will help to Optimized for rendering speed.**

7. CSS performance optimization

- Remove unnecessary styles:
- Split CSS into separate modules:
  eg 1.
  <!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />
eg:2
<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />
eg:3.
<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (max-width: 480px)" />

8. Run computation off the main thread
JavaScript generally runs tasks on the main thread, and how long operations can block the main thread, potentially leading to bad UI performance.

- Use asynchronous code: Asynchronous JavaScript : Promise...async and await

(READ ALL these concepts)
Deboucing..throttling in javascript
code spliting
pegination...infinite scroll
bundling...minification: webpack...parcel...vite
async and defer
memorise : Closures...Higher-Order Functions

# What is DOM

The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

# Deep Copy and SHallow Copy in Object
Read notebook

# how to debug if my page loading slow and improve the page speed
Website : PageSpeed Insights, LlightHOuse, developer tools

# How to track page speed and improve it

# Assessibility

# How to deploy react app to production

# Did you make any changes in webpack? Where and why?


# What is Arrow function?
Arrow function {()=>} is concise way of writing JavaScript functions in shorter way. Arrow functions were introduced in the ES6 version. They make our code more structured and readable.

Arrow functions are anonymous functions i.e. functions without a name but they are often assigned to any variable. 

1. Regular Functions (regular function in two ways, i.e. Function declaration, and Function expression.)
2. Arrow Functions (Introduced in ES6) : a more concise syntax for writing function expressions... particularly useful for creating anonymous functions

1. No prototype object for the Arrow function
2. Cannot be invoked with a new keyword (Not a constructor function)
3. No own this (call, apply & bind won’t work as expected)

# what is the difference between Map() and filter()
'Map' is used to apply a function on every item in an array and returns the new array. 'Filter' is used to create a new array from an existing one, containing only those items that satisfy a condition specified in a function.

# Explain Debounce and explain steps and give example

1. debouncing is commonly used to enhance browser performance.
understand this
Sometimes, certain actions on a web page involve complex computations that take up time. If these actions are triggered too frequently, it can significantly impact the browser’s performance, especially since JavaScript operates on a single thread.

for code refernce path : PreplaceJS\debounce.html

# What is memoization in JavaScript?
Memoization is a technique that can be used to improve the performance of JavaScript code.
Memoization works by storing the results of expensive calculations in a cache.
This allows the JavaScript code to avoid re-performing the expensive calculations if the same input is provided again.

example:


# What is recursion in JavaScript?
Recursion is a programming technique that allows a function to call itself. Recursion can be used to solve a variety of problems, such as finding the factorial of a number or calculating the Fibonacci sequence.

```javascript
function factorial(n){
  if(n === 0){
    return 1
  } else {
    return n * factorial(n-1)
  }
}

factorial(5) //5*4*3*2*1 : 125
```

# How do you handle errors in JavaScript?

Errors in JavaScript can be handled using try-catch blocks. The try block contains the code that may throw an error, and the catch block handles the error and provides an alternative execution path.

```javascript
try{
  //this code throw an error
  throw new Error("Something went Wrong")
} catch(error){
  console.log("Error Occured : " + error.message)
}
```

# What is generator function?

A generator function is a special type of function that can be paused and resumed during its execution. It allows generating a sequence of values over time, using the yield keyword.

```javascript
function* numberGenerator() {
  let i = 0;
  while (true) {
    yield i++; //यील्‍ड्‌
  }
}

const gen = numberGenerator();
console.log(gen.next().value); // Output: 0
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
```

# Optimization: Debouncing and Throttling give an example (pending)


(IMP Links)
//ref link : https://builtin.com/software-engineering-perspectives/javascript-interview-questions
# https://javascriptcentric.medium.com/top-30-javascript-interview-questions-and-answers-for-2024-7f1e2d1d0638


