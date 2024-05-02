//https://www.youtube.com/watch?v=vZ1wfTExGNk
// https://dmitripavlutin.com/javascript-this-interview-questions/#question-1-variable-vs-property
// javascript output based questions on this keyword : search
// https://dmitripavlutin.com/javascript-this-interview-questions/
//correct use of this: https://blog.logrocket.com/access-correct-this-inside-callback-javascript/
## What is this?

In JavaScript, means who is calling the "this" keyword. you can say its contextual its dynamic its value changes depending on the situations.

## The "this" keyword refers to different objects depending on how it is used

## Suppose you calling "this" inside global scope or Alone.."this" refers to the global object (in browser window)

whereever javascript runs there is javascript runtime environment that can be different
inside browser global object is window
inside node js global object is  {}

## "this" inside function, "this" refers to the global object i.e(window) but look at the example

why?
why "this" keyword value inside function is global object?
//only in non-strict mode -> "this substitution" Algorithm happened -> value become "global object : window"
the value of "this" keyword inside  a function is "undefiend" or "null" but JS has something known as "this substitution" so the value becomes equal to "global object" if it will not use "strict mode" so the value becomes global object.

whoever on the left side of function invocation is "this" */

```javascript
function talk(){
    console.log(this);
}

let me = {
    name: "Jack",
    talk: talk
}

//whoever on the left side of function invocation is "this" 
console.log(me.talk()); //{name: 'Jack', talk: ƒ}
```

## "this" inside function, but in a strict mode ("use strict"), "this" is undefined

//in strict mode as strict javascript doesn't allow calling window inside a function by just using ""this""
//if the value of this keyword is undefined or null
//this keyword will be replaced with global object
//only in non-strict mode

## In an object method, "this" refers to the object

```javascript
function talk(){
    console.log(this);
}

let me = {
    name: "Jack",
    talk: talk //method of object me
}
//this keyword value is depends on how the function is called
//whoever on the left side of function invocation is "this" 
console.log(me.talk()); //{name: 'Jack', talk: ƒ}
```

## Inside the constructor, the "this" keyword refers to the newly created object instance. This allows you to set properties and methods specific to that newly created instance

let me explain: constructor function automatically create binding between the newly created object by using "new" keyword and "this" keyword inside the constructor function. eg

```javascript
function Person(name){
    this.name = name;
    this.language = function(){
        console.log(this)
    }
}
let p1 = new Person("Tony Stark")
p1.language() //Person {name: 'Tony Stark', language: ƒ} //you are getting the object
```

## THis inside the callback function

as callback function runs under different context, just because you calling callback function inside constrctor function does not mean its automatically going to have "binding" between  the "this" keyword and the object which we created by using "new" keyword, that happens within the context of constructor function not for callback function. so how to resolve this
eg:

```javascript
function Person(name){
    this.name = name;
    this.language = function(){
        console.log(this)
    }
    setTimeout(function(){
        console.log(this) //referce to "window" object why?
    }, 100)
}

//1st solution is bind function
/* we are still with in the execution context of constructor function as soon as i created a function inside setTimeout...now we are within the callback function but once the curly bracket close 
function(){
        console.log(this) //referce to "window" object why?
    } we are back inside the exectuion context of constructor function where we can get access of this
    so we can bind this on it
    function(){
        console.log(this) //referce to "window" object why?
    }.bind(this)... so the final version will be */

function Person(name){
    this.name = name;
    this.language = function(){
        console.log(this)
    }
    setTimeout(function() {
        console.log(this); //now this ...Person {name: 'Tony Stark', language: ƒ} not window
    }.bind(this), 100) //bind function
}
let p1 = new Person("Tony Stark") //Person {name: 'Tony Stark', language: ƒ}

//2nd solution...arrow function
function Person(name){
    this.name = name;
    this.language = function(){
        console.log(this)
    }
    setTimeout(()=>{ //arrow function don't have "this" binding associated
        //so the value of the "this" is enclosing lexical context
        console.log(this)
    }, 100)
}
 let p3 = new Person("Tony Stark") //Person {name: 'Tony Stark', language: ƒ}
 
```

## In an event, "this" refers to the element that received the event

## Methods like call(), apply(), and bind() can refer "this" to the refernce object

bind is a function which every javascript function has "bind"

eg: with call and bind

```Javascript
function show(auther){
    console.log(this, author);
}

let obj = {
    name: 'JS'
}
show.call(obj, 'Brendan Eich') // {name: 'JS' }

/* or
whoever on the left side of function invocation is "this" */
function talk(){
    console.log(this);
}

let me = {
    name: "Jack",
    talk: talk
}

//whoever on the left side of function invocation is "this" 
console.log(me.talk()); //{name: 'Jack', talk: ƒ}


//another example with bind
let you = {
    name: "Gloria"
}

//whaterver object you pass in to bind will be used as the value "this" inside the 'talk() function'
//bind create whole new function
const callingYou = talk.bind(you);
console.log(callingYou()) //{ name: "Gloria"}

```

## this Inside Inner Function

```javascript
const person = {
    name : 'Jack',
    age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);        // {name: "Jack", age ...}
        console.log(this.age);  // 25

        // inner function
        function innerFunc() {
        
            // this refers to the global object
            console.log(this);       // Window { ... }
            console.log(this.age);    // undefined
            
            /* Here, this inside innerFunc() refers to the global object because innerFunc() is inside a method.However, this.age outside innerFunc() refers to the person object. */
        }

        innerFunc();

    }
}

person.greet();
```

## this Inside Arrow Function

    Arrow function don't provide their own "this" binding(it retains(hold or keep) the "this" value of enclosing lexical context).  ‘this’ get inherited from the parent function.

    Arrow functions do not have their own "this". When you use "this" inside an arrow function, "this" refers to its parent scope object.

   ```javascript
    //without arrow function
    let obj1 = {
        name: "akash",
        myName: function() {
            console.log(this)
        }
    }
    obj1.myName() //{name: 'akash', myName: ƒ}

    let obj2 = {
    name: "akash",
        /* Arrow function don't provide their own "this" binding(it retains(hold or keep) the "this" value of enclosing lexical context,  ‘this’ get inherited from the parent function */
        myName: () => {
            console.log(this) ///this will be globale object...window
        }
    }
    obj1.myName(); //window

    const greet = {
        name: 'Jack',
        // method
        sayHi () {
            let hi = () => console.log(this.name);
            hi();
        }
    }

    greet.sayHi(); // Jack

    let obj1 = {
        name: "akash",
        myName: function() {
            console.log(this)
            //enclosing lexical context
            //what is the enclosing lexical context of surname arrow function?
            //it is the parent function which is not arrow func
            const surname = () => {
                console.log(this)
            }
            surname()
        }
    }
    obj1.myName()/* {name: 'akash', myName: ƒ}
    {name: 'akash', myName: ƒ} */

    let obj4 = {
    name: "akash",
        myName: () => {
            console.log(this); //
            const surName = () => {
                console.log(this);
            }
            surName()
        }
    }
    obj4.myName() //window...2nd window

   ```

## this keyword inside DOM

 inside DOM "this" keyword is the refernce element;

 ```javascript
 <button onclick="alert(this)">Click me</button>
 you will get refernce of "button HTMLElement"
 ```

In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.
