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

# What is Lexical Scope
    Lexcial means where the variable is inheritantly sitting inside source of code.

# What is Lexical Environemnt
   When we innovke function, function execution context is created and put inside call stack. When function execution context created at that time lexical environment is also created. It contains local memory of that function plus its parents lexical environment. It stores, all variables and functions reference records of its parents lexcial scope.

# what is Scope CHain
example:
JS engine keeps searching inside lexical enviorment of parents
Until it find the variable or finction being access
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

**Advantage**: data encapsuliation and data privacy...They allow you to attach variables to an execution context...variable is state that you can use later.
**Disadvantage**: vairblae declare inside the closure are not grabage collected. so  its affect script performance both in terms of processing speed and memory consumption will slow down your application.

# What is Curring?
Curring means number of arguments has to be equals to the number of function returns;
Curring transform functions with multiple arguments into sequence of functions, each taking single arguments. If there is no arguments there will be no curring.

Curring functions are constructed by chiaining closure and by defining and immediately returning their inner functions simultaneously.

### advantage of curring?
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
Ref Link: PreplaceJS\curring.js

# What is execution context and call stack in js?

for "execution context" please check : D:\Preplaced\PreplaceJS\session-1-task\notes.

## Call Stack:
 Call stack in present inside JS engine to manage the execution of function calls. It keeps track of all execution context to currently running functions and allow JS to manage function calls in LIFO manner.

- Global Execution Context created by JS engine itself.
- When a function called then a new Functin Execution Context created and pushed into call stack.
- Call stack keeps monitoring the function execution.
- Once Function Execution Context get removed from call stack then it destroyed.
- Maximum depth of call stack is 10 million. But JavaScript engine can handle upto 500 million calls.
- LIFO: Last In First Out: Call stack is keeping track of which function execution. context should go first so that it can clean up after its execution. So that it can return back to previous function after completion of current function.
   
# What is callback function?
A function which we passed to the another function as argument and perform some operations is known as callback function.
eg setTimeout...
```javascript
function sum(a, b){
    return a + b
}
function showResult(num1, num2, operationFun){
    return operationFun(num1, num2)
}
showResult(2, 3, sum);
```

# Functions are first-class citizens in JavaScript?

1.  Assign function to variable and use function as values
2.  Pass function to another function as an argument
3. Returning functions from another functions. Functions that return a function are called Higher Order Functions.

Note: A function which take another function as an argument or returns a function from it, is known as HOF the function which is passed into higher order function is called callback function. This is possible only because function is a first call citizen in JS.

# What is Hoisting?
 Hoisting is a Javascript default beheviour, where all the variables and function delcarations are moved to the top of their containing scope during compilation phase. Even if you declare variables and functions later in your code, JavaScript acts as if you wrote them all at the very beginning of their scope.

 OR

 When any interpreter runs the code then all the variables are re-hoisted to the top of the original scope. This method is applicable for declaration not for the initialization of a variable. This is known as a javascript Hoisting.
  
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

```javascript
//let abc // undefiend
//const newMe : Uncaught SyntaxError: Missing initializer in const declaration

```

# What is shadowing and illegal shadowing?
Shadowing is happend when variable declare with the same name in certain scope. Suppose if we declare a variable in outer scope and we declare variable with the same name in the inner scope. then the outter scope variable will be shadow by inner scope variable. 

In JavaScript, variables can be shadowed in both the global and function scope. Global variables can be shadowed by function-scoped variables, and function-scoped variables can be shadowed by block-scoped variables declared with the let or const keyword.

for example please check : PreplaceJS\session-2-task\notes.md example.

# what is the use of anonymous functions?

1. We can stroe anonymous function in variable and use as value later on.
2. we can pass anonymouse function as an argument to another function.
    eg: setTimeout or setInterval or event handlers
3. Anonymous functions can be used to create IIFE(Immediately Invoked Function Expressions ), which execute immediately after being defined.
    Benefits
    1. Create complete new scope (we can create private "Declaration of Private variable")
    2. Data Hiding and Encapsuliation
    3. avoid polluting the global namespace variable
    4. prevent naming collisions
    5. it will help to create function on the fly.

for example please check : PreplaceJS\session-2-task\notes.md

# difference between function expression, function declaration, function statement

Function means: sets of statements that perform some task and then return the result to user

Function declaration (function Statement) is "Hoisted" emans we can call it before its initialized in JS
Function Expression is NOT Hoisted, means we cannot call it before its initialized

When it comes to hoisting, all functions and variables are hoisted. But, functions created with function expressions cannot be "used" before their initialization.

# Difference between undefined and not defined.
Everything in JavaScript happens inside the execution context. The JavaScript code is being executed in two-phase.
1.memory creation phase : In this phase , JavaScript creates memory space for all the variables and functions declarations in a program. For variable by default value is "undefined" is assigned.
2.code execution phase : Each variable holds the value undefined till the program reaches the line where we have assigned that variable. After that line, the variable’s undefined value gets replaced by the original value.

## Undefined:

- A variable that has been declared but its value hasn't been assigned yet.

**example**
let name; //undefined

## not defined:

- When we try to access the variable that doesn't exist or did not declare the variable in program.

# CRP (Critical Rendering Path)
(SS) Sequence of Steps taken by bowser? where browser goes through to convert? kay?
ht HTML,CSS, Javascript of webPage into (kashat) Pixels on the screen.
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
3. "NEW keyword" : what happens when you used new KeyWOrds (read : 1, 2, 3 points)
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

# What do you mean by NULL in JavaScript?

 The NULL value represents that no value or no object. It is known as empty value/object.

 # Write Pollyfill for Arrays?
 Do the practice for Code...
 PreplaceJS\session-4-tasks\Pollyfill\test.js

