# this keyword

Plz check "this.md"

# Functions are first-class citizens in JavaScript

You can pass functions to other functions as arguments, return them from other functions as values, and store them in variables.

## 1. Assign function to variable and use function as values

```javascript
const age = function(birthYear){
    return `${new Date().getFullYear() - birthYear}`
}
age(1987);
```

## 2. Pass function to another function as an argument

```javascript
function greetings(message){
    let currentTime = new Date().getHours();
    if(currentTime <  18){
       return 'have a nice day';
    } else {
       return 'have a wonderful night';
    }
}

function wishPerson(greetingMsg, name){
    console.log(`${name} : ${greetingMsg()}`)
}
wishPerson(greetings, "John Doe");
```

## 3. Returning functions from another functions | Return a function and call using another variable

```javascript
function sayHello(){
    return  function(){
        return 'hello'
    }
}
/*  Functions that return a function are called Higher Order Functions. */
let newFunc = sayHello();
newFunc();

/* another example :  Functions that return a function are called Higher Order Functions. */
function compareBy(propertyName){
     return function(a, b){
        let x = a[propertyName];
        let y = b[propertyName];

        if(x > y){
            return 1
        } else if(x < y){
            return -1
        } else {
            return 0;
        }
     }
}

let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];
console.log('Products sorted by name:');
products.sort(compareBy('name'));

prodcuts.sort(compareBy('price'));
```

# OOPS and its principles (EAIP)

1.Encapsuliaton 2.Abstraction 3.Inheritance 4.Polymorphism

## 1.Encapsulation

Encapsulation is useful in cases where we need certain properties or methods for the inner working of the object, but we don't want to expose that to the exterior. Having private properties/methods ensures we don't "accidentally" expose information we don't want.

## 2.Abstraction

## 3.Inheritance

Class inherits some properties and methods from the parent Class.Inheritance is the ability to create classes based on other classes. With inheritance, we can define a parent class (with certain properties and methods), and then children classes that will inherit from the parent class all the properties and methods that it has.

### Some things to keep in mind about inheritance

1. A class can only have one parent class to inherit from. You can't extend multiple classes, though there're are hacks and ways around this.
2. You can extend the inheritance chain as much as you want, setting parent, grandparent, great grandparent classes and so on.
3. If a child class inherits any properties from a parent class, it must first assign the parent properties calling the super() function before assigning its own properties.

## Polymorphism

It's the ability of one method to return different values according to certain conditions.

That's one kind of polymorphism, parameter-based.
const newBike = new Bike('Honda SP 125', 'desh ki dhadkan' , 10.71, 1998); adTags

This implementation is polymorphic because if we commented out the getDetails method in the Car class, we would still be able to call it on other object class:

//Another kind of polymorphism, Override the parent method.
look getDetails() method which override Car class method in Bike class

code example

```javascript
class Car{
    #speed = 0; //private field of the Car class, encapsulated within the class.
    constructor(name, bhp, adTags){
        this.name= name;
        this.bhp = bhp;
        this.adTags = adTags;
    }

    accelerate(){
        this.#speed += 10
    }

    getSpeed(){
        return this.#speed;
    }

    getDetails(){
        console.log(`${this.name} has ${this.bhp}`);
    }
}

//Usage
const myCar = new Car();
myCar.accelerate();
myCar.accelerate();

console.log(myCar.getSpeed());

const newCar = new Car('Porsche 911', 380, "nay bharat ki nayi pehchan")
newCar.getDetails();

//Inheritance using "extends" keywords from Car and overwrites its existing methods
class Bike extends Car{
    #birthyear
    constructor(name, bhp, adTags, birthyear){
        super(name, bhp, adTags);
        this.#birthyear = birthyear;
    }

    getDetails(weight){
        console.log(`${this.name} | ${this.bhp}-bhp | ${weight} Kg`);
    } 
    
    howOld(){
        console.log(`${this.name} was introduce in ${this.#birthyear}`)
    }

}

const newBike = new Bike('Honda SP 125', 'desh ki dhadkan' , 10.71, 1998);
newBike.getDetails(116);
newBike.howOld();
/* console.log(newBike.#birthYear); SyntaxError: Private field '#birthYear' must be declared in an enclosing class */
```

# Closures and Currying

## Laxical Scope

    Scope is the visiblity and accessibility of variables and functions declared in the source code.
    Laxical means where they(variable, func) are inheritantly sitting inside the source code. 
    JavaScript engine uses the scope to manage the variable accessibility.
    According to lexical scoping, the scopes can be nested and the inner function can access the variables declared in its outer scope. 

    ```javascript
    function greeting() {
        let message = 'Hi';

        function sayHi() {
            console.log(message);
        }

        sayHi();
    }

    greeting();
    ```

# Closure

### reflink: <https://www.freecodecamp.org/news/javascript-closures-explained-with-example/#advantages-of-closures>

 Function along with its lexical parent scope.  

 Closures are functions that have access to the variables that are present in their (lexical) scope chain even if the outer function ceases(no longer) to exist.

 Scope chain refers to the fact that parent scope does not have access to the variables inside its children's scope, but the children's scope does have access to the variables present in its parent scopes.

 closures do not store static values. Instead, they store references to the variables present inside the scope chain. In this way, even if the outer function dies, the inner function, that is a closure, still has access to its parent variables.

## closure has scope chain

1. Local : (within function)
2. outrer : (out child function inside parent function)
3. global

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

## some interesting point

- However, the interesting point here is that, typically, a local variable only exists during the function’s execution.

- It means that when the greeting() function has completed executing, the message variable is no longer accessible.

- In this case, we execute the hi() function that references the sayHi() function, the message variable still exists.

- The magic of this is closure. In other words, the sayHi() function is a closure.

- A closure is a function that preserves the outer scope in its inner scope.

## Creating closures in loops

```javascript
for(var index = 1; index <= 3; index++){
        setTimeout(() => {
               console.log('after ' + index + ' second(s):' + index);
    }, index * 1000)
}
// problem after 4 second(s):4

//with the help of IIFE : creates a new scope by declaring a function and immediately executing it.
for(var index = 1; index <= 3; index++){
 (function(index){
        setTimeout(() => {
               console.log('after ' + index + ' second(s):' + index);
    }, index * 1000)
   })(index)
}

/* or */
for(var index = 1; index <= 3; index++){
   function close(index){
        setTimeout(() => {
               console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
         
   }
   close(index)
}


/* after 1 second(s):1
after 2 second(s):2
after 3 second(s):3 */
```

## Advantages of closures

1. They allow you to attach variables to an execution context.
2. Variables in closures can help you maintain a state that you can use later.
3. They provide data encapsulation. JavaScript closure helps in the data privacy of the program.
4. They help remove redundant code and maintain modular code.

## Disadvantages of closures

1. The variables declared inside a closure are not garbage collected.
2. Too many closures can slow down your application. This is actually caused by duplication of code in the memory.
3. will negatively affect script performance both in terms of processing speed and memory consumption.

# Curring

Curring means number of arguments has to be equals to the number of function returns.
Curring create nesting functions, according to the number of the arguments of the functions.
Each functions receives an arguments. If there is no arguments there is no curring.

Curried functions are constructed by chaining closures and by defining and immediately returning their inner functions simultaneously.

Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.
multiple smaller functions that can handle one responsibility.

```javascript
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

/* let's refector of this code  Modern currying with ES6*/
let buildSanwitch = ingredient1 => ingredient2 => ingredient3 => {
    return `My sanwitch ingredients is ${ingredient1}, ${ingredient2} and ${ingredient3}`
}

let mySandW = buildSanwitch('bread')('tomato')('mutton');
console.log(mySandW);

const multiply = num1 => num2 => num3 => {
    return num1 * num2 * num3
}
multiply(2)(3)(4);
```

## Call apply bind

