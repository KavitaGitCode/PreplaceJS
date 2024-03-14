# 1. Types of functions in JS?
    1. Function Declarations (Named Functions)
    2. Function Expression (stored in a variable: anonymous function)
    3. Self-Invoking Functions eg
       ` (function (){
        let abc = 'abc';
        })();`;
    4. Arrow Function: (short syntax for writing function expressions)    

# 2. CRP critical rendering path explain?
    CRP is the sequence of steps taken by the browser, where browser goes through to convert the HTML, CSS and JAVASCRIT of webpage into Pixel on the screen. 
    It includes 5 steps
    1. DOM TREE CREATION: : The browser reads the raw HTML and converts it into a tree structure known as the DOM.
    2. CSSOM TREE CREATION: The browser reads the CSS, whether it’s inline, in the head(internal with style tage), or an external stylesheet, and constructs the CSSOM  
    3. Create Render TREE: The Render Tree is a combination of the DOM and CSSOM. It includes all visible element (so not with display: none) and the styles applied to it.
    4. Layout: The layout step determines where and how the elements are positioned on the page, determining the width and height of each element, and where they are in relation to each other. How much space is required for the element. Its actually calculating space width, height, of only visible elements.
    5. Paint: show all the nodes with calculated form of layout and the browser paints the pixels on the screen. 

  Points to remember
  1. CRP again create until and unless you refresh browser.
  2. Reflow: is combination of layout + paint. Browser calculate geometrics of elements this process called   reflow.
  3. Whenever you resize your browser or reload your browser at that time reflow happens.

# 3. why we use asyn and defer in script tag ?
When your browser loading a page two major things happens 
1.  Html parsing 
2.  Loading of the scripts
    a.  Fetching the script from server
    b.  Executing script line by line

In general scenario when browser loading web page at that time HTML parsing start and when it reaches to ```<script>``` tag it stops parsing the html and start fetching the script from network and once the script is downloaded, it executed script on browser immediately, during this process html parsing is blocked, it won’t start until the script is completely downloaded.

 To mitigate(reduce) the blocking behavior, we can use async and defer attributes. 

ASYNC
 •  Scripts with the "async" attribute are completely independent. Whichever loads first is executed first.
 •  Async attribute is useful for scripts that are independent and don't rely on the DOM being fully loaded.
<script src="demo_defer.js" async></script>

DEFER
 •  The script with 'defer' is downloaded in parallel to parsing the page, and executed after the page has finished parsing.
 •  useful when the order of script execution is important or when scripts need to manipulate the DOM but don’t need to run immediately.
 <script src="demo_defer.js" defer></script>

Async and Defer both will help to Optimized for rendering speed.

# 4. What is execution context and call stack in js?
Execution context refers to the environment where all the javascript code are executed.
It has two phases 
1. Memory Allocation (creation) phase:
    In memory allocation phase, it picks all the variable and allotted memory to them by assigning them to 'undefined' value it. and for functions, its store function as reference in memory. 
2. Code Execution Phase:
    In Code Execution Phase, JavaScript engine executes the code line by line.  as soon as it reaches to the variable it replaces 'undefined' value to the 'actual value'. and for functions, if it invoke '()' then it created new function execution context, which also has two phases, which we already explain.

 There global execution context, its created when a JavaScript script first starts to run, and it represents the global scope in JavaScript.    

**Call Stack**
 Call stack is present inside JS engine to manage the execution of function calls. It keeps track of all execution context to currently running functions and allow JS to manage function calls in LIFO manner 

 It uses the LIFO principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.

# 5. What is Hoisting?
Javascript only hoisted declaration not initialization. Hosting applies to variable declaration and function declaration. Its default behavior of JS where it moves all the declaration to the top of current scope i.t current scope of function or script scope.  

# 6. What is callback function? 
A function which takes another function as an argument and execute it after specific task is called call back function. Its most probably used in Async Programming for handle task such as event handling and async I/O operations.
Code Example:
```python
   //this is the callback function to show the result 
   function outputDiv(param){ 
    console.log(param)
   }

   function calculationTask(num1, num2, callbackFunc){
        let result = num + num2;
        callbackFunc(result);
   }

   calculationTask(5, 7, outputDiv); 
```

# 7. What is Scope? 
    Scope determines the accessibility(visibility) of specific variable in a particular scope. 
    There are 3 types of scope:
    1. Block Scope: it typically define by '{}' curly braces. Block is which where we wrapping multiple js statements and group together For Eg: for loop, or if else condition. 'let' and 'const' also has block scope.
    2. Function Scope: Function scope has local variable so we can't use it  that local var outside of that function scope. THis local variable will be deleted after the completion of function. 
    3. Global Scope: If we created any variable on global scope we can access it from any place of that script file or any function scope or any block scope. It’s actually created on global level so u can access it with window key word. But variable created with 'let' you can't access it on window level but variable created with 'var' keyword you can access it.

# 8. What is HOC in JS?

**Notes**
1. Rendering is the process of generating HTML markup to display web pages in the browser.
2. HTML parsing is the process of taking raw HTML code, reading it, and generating a DOM tree object structure from it. The browser parses HTML into a DOM tree.

