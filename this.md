## What is this?

In JavaScript, the "this" keyword refers to an object.

## Which object depends on how "this" is being invoked (used or called)

## The "this" keyword refers to different objects depending on how it is used

## Suppose you calling "this" inside global scope or Alone.."this" refers to the global object (in browser window)

## "this" inside function, "this" refers to the global object

## "this" inside function, but in a strict mode ("use strict"), "this" is undefined

## In an object method, "this" refers to the object

## In JavaScript, constructor functions are used to create objects. When a function is used as a constructor function, this refers to the object inside which it is used

## In an event, "this" refers to the element that received the event

## Methods like call(), apply(), and bind() can refer "this" to the refernce object

eg

```Javascript
function show(){
    console.log(this);
}

let obj = {
    name: 'JS'
}
show.call(obj) // {name: 'JS' }

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

    Arrow functions do not have their own "this". When you use "this" inside an arrow function, "this" refers to its parent scope object.

   ```javascript
    const greet = {
    name: 'Jack',

    // method
    sayHi () {
        let hi = () => console.log(this.name);
        hi();
    }
}

greet.sayHi(); // Jack
   ```

In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

Inside the constructor, the "this" keyword refers to the newly created object instance. This allows you to set properties and perform other operations specific to that instance.
