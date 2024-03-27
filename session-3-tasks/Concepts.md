# What is Scope and Explain Scope Chain?
<Answer>
Scope - {} The place in which a variable can be accessed.

## Understand the "Lexical Environment" first
 When js programe runs global execution context created and it is put inside "call stack". 
 
 Whenever function execution context created at that time 'Lexical Environment' will create for that function, In contains local memory and lexical environment of its parents refernce. It stores the reference to all the available variables and functions Records. THe `function b` lexically sitting inside `function a`. where that code is present inside the scope.

## Scope CHain
Example : Suppose if you try to access a variable or function inside a particular scope and if that variable is not inside that local scope, so JS engine keeps on searching the lexical environemnt of its parent until it finds the variable or function being accessd. This mechanism by which JavaScript Engine searches or (way of finding variable inside its lexcial scope) for variables within the code that it executes is known as Scope Chain.  
If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the  browser's console. Please check below code.

If js engine doesn't find anything in local memory of  function then it will look into outer function for that, and if it not found in it then it goes to next level of scope and eventually it reach to the globalscope.

example
```javascript
function a(){
    let x = "I am inside function A";
    function b(){
        let  y = "I am inside nested function B";
        console.log(x); //you can access it 'x' as child can access parent scope.
    }
    b(); // Output: I am inside nested function B
    console.log(y); //you can't access 'y' as it is not defined here in parent scope its inside child function scope. It will give an error.
}
a();
```

In the above code, `let` keyword creates block scope for variables `x` and `y`. So, `x` can only be accessed within the function `a()` but not outside it. and `y` which we try to access outside of function `b()` will give an error `y` is not defiend.


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

**example**
console.log(person); //Uncaught ReferenceError: person is not defined.

# What is Prototype?

every function in JavaScript has a prototype property that references an object.This prototype allows us to share methods across all instances of a function. 
eg : Objects are instances of objects, they inherit properties from another object called prototype.
- Properties and methods can be added to a constructor using a prototype:

let Animal = {}
Animal.prototype.name = "Lion"

## What is a Constructor in JavaScript?

- The purpose of a constructor is to create a new object and set values for any existing object properties.
A new empty object gets created.
The this keyword begins to refer to the new object and it becomes the current instance object.
The new object is then returned as the return value of the constructor.

```javascript
function User() {
    this.name = 'Bob';
}

var user = new User();
```
- In JavaScript, a constructor gets called when an object is created using the new keyword.
- Each object created using a constructor is unique. Properties can be added or removed from an object without affecting another one created using the same constructor. However, if an object is built using an object literal, any changes made to the variable that is assigned the object value will change the original object.

## Lexical Enviornment
Lexical environment is creatd when execution context created. Leaxical is the local memory + refernce to the lexical enviornment of its parent.Lexical Parent Means where that function is actually sits inside that code. 
Local Memory + lexical environment of  parent function.  And this we called Scope Chain
- Can you explain the concept of scope in JavaScript
Question: 
Explanation: In JavaScript, every function has its own lexical environment. A lexical environment consists of an object that contains all variables.

## Call Stack
- Global Execution Context created  by JS engine itself.
- When a function called then a new Functin Execution Context created and pushed into call stack.
- Call stack keeps monitoring the function execution.  
- Once Function Execution Context get removed from call stack then it destroyed.
- Maximum depth of call stack is 10 million. But JavaScript engine can handle upto 500 million calls.
- LIFO: Last In First Out: Call stack is keeping  track of which function exectuion. context should go first so that it can clean up after its execution. So that it can return back to previous function after completion of current function.

https://cat-fact.herokuapp.com/facts (fetch api and promices)