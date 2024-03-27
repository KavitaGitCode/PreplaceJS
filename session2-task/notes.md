# Difference between let, const and var

variable defined with 'var' keyword has global scope and function scope.
variable defined with 'let' keyword only has block scope (within the nearest containing block)
variable defined with 'const' keyword also has block scope but cannot be reassigned to a new value.

var : It can be updated and redeclared into the scope and can be declared without initialization.
let & const: let can be declared without initialization and you can access its value which is 'undefined' but 'const' cannot be declared without initialization, it will go you an error;

```javascript
let b = 100;
{
  let b = 10;
  console.log(b);
}
console.log(b);

//the code below will not work as Illegal Shadowing
let c = 50;
let d = 100;
{
  var c = 10;
  d = 900 // shadowing
  console.log(c); //Uncaught SyntaxError: Identifier 'c' has already been declared
}
console.log(d) //900 //shadowing
```

# what is the use of anonymous functions?

An anonymous function is a function that does not have any name associated with it.
An anonymous function is not accessible after its initial creation.
it can only be accessed by a variable it is stored in as a function as a value.

## 1. we will store the anonymous function in a variable so that we can call it later if needed.
   example

```javascript
let funcExpress = function () {
  return "this is function expression which is example of anonymous function";
};
funcExpress();

let funcArraow = () => {
  return "This is arrow function";
};
funcArraow();

let square = (x) => x * x;
square(x);
```

## 2. We can pass anonymous function as arguments to other functions.

   example : setTimeout or setInterval or event handlers
   In setTimeout(), which is a method that expects a function and the number of milliseconds after which it will execute the function. Now, let us see how we can pass an anonymous function to setTimeout().

```javascript
setTimeout(function () {
  console.log("I will run after 5 seconds!");
}, 5000);
```

Event Listeners: Anonymous functions are commonly used as event handlers in web development to respond to user interactions.

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked");
});
```

## 3. Immediately Invoked Function Expressions (IIFE):
   Anonymous functions can be used to create IIFE, which execute immediately after being defined.
   They are often used to create a private scope i.e in local scope and to avoid polluting the global namespace variable, , protect variables, and prevent naming collisions.
   If you want to create a function on-the-fly for short periods of time or don’t need to reference it again.
   example

```javascript
(function(text){
alert(text)
}('Hi...I am an IIFE'));

//OR//
(() => {
    console.log('arrow function of IIFE')
},())
```
Used for "Data Hiding" , "Declaration of Private variable", "Encapsuliation"

```javascript
(function () {
  // create a new variable that is only accessible within this function
  var privateVariable = "I am a private variable";

  // create a function that can access the private variable
  function printPrivateVariable() {
    console.log(privateVariable);
  }

  // call the function to print the private variable
  printPrivateVariable(); // "I am a private variable"
})();
console.log(privateVariable); //not accesible
```

# Hoisting in depth (for variables (var, const, let) and functions(declaration, expression, statement, arrow functions));

Hoisting where all the declaration of variable and functions are moved to the top of the scope ( containing scope ) where they are declared.
Hoisting happes only for the declaraton not for the initialization.
for variable keywords 'var', 'let', 'const'...hoisting beahves diffrently

## hoisting with var:

variable decalre with 'var' are hoisted to the function scope or global scope. If you try to access it before its initialization it will return 'undefined'

```javascript
console.log(x); // undefined
var x = 5;
// how js interpreted code
var x;
console.log(x); // undefined
x = 5;
```

## hoisting with let:

variable declare with 'let' keyword are hoisted to the top of block scope (the block where they declare it). if we try to access them before its declaration will gave u 'ReferenceError'
as Uncaught ReferenceError: 'x' is not defined

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

Unlike var, the above code doesn't get initialized with undefined, so accessing it before the declaration throws an error.

## hoisting with const:

variable declare with 'const' keyword are hoisted to the top of block scope (the block where they declare it).
Trying to access a const variable before its declaration results in a ReferenceError.

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
const x = 5;
```

## hoisting with Function Declaration + Function Statement:

Function declarations are hoisted, so you can use them before they’re declared.
javascript interpreter puts all function declarations at the top of the script,
even if they’re used later in the code.
//In this example, the greet() function is called before its declaration, but it still works due to hoisting.

```javascript
greet(); // "Hello, world!"

function greet() {
  console.log("Hello, world!");
}
```

## hoisting wiht Function Expression:

Function expressions (also known as anonymous functions) are not hoisted, just like variables and constants.
Only the variable declaration gets hoisted, not the function assignment.

```javascript
// greeting(); // This will throw an error: TypeError: greeting is not a function

var greeting = function () {
  console.log("Hello, world!");
};

greeting(); // "Hello, world!"
```

you'll get an error because only the variable greeting is hoisted, not the function.

## hoisting with Arrow FUnction:

Only the variable declaration gets hoisted, not the arrow function assignment.

```javascript
// greeting(); // This will throw an error: TypeError: greeting is not a function

var greeting = () => {
  console.log("Hello, world!");
};

greeting(); // "Hello, world!"
```

# difference between function expression, function declaration, function statement

sets of statements that perform some task and then return the result to user
We can use function declaration or Function expression to defined or creation of JS function
Function declaration is "Hoisted" emans we can call it before its initialized in JS
Function Expression is NOT Hoisted, means we cannot call it before its initialized

When it comes to hoisting, all functions and variables are hoisted. But, functions created with function expressions cannot be "used" before their initialization.

function statement: Its a way to declare a function.
like we used function keyword to define function...function name to identify function...{} for function body

```python
function functionName(parameter1, parameter2, ...) {
    // Function body: code to be executed
}
```
