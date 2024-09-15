Suppose you have method you want to borrow that method on the object at that time you can use call method. function borrowing refers to an object that uses a method of another object.

`functionName.call(thisArg, arg1, arg2, ...);`

The thisArg is the object that the this object references inside the function functionName.
The arg1, arg2, .. are the function arguments passed into the functionName.
example

```javascript
var greeting = 'Hi';

var messenger = {
    greeting: 'Hello'
}

function say(name, location) {
    console.log(this.greeting + ' ' + name + ' ' + location);
}

let callMe = say.call(this, "Harsha", "Mumbai"); //you don't need to save it in variable
//call on the fly
say.call(this, "Harsha", "Mumbai"); //Hi Harsha Mumbai

//when you invoke the call() method of say function object and pass the messenger object as the this value..the this value inside the say() function references the messenger object, not the global object
say.call(messenger, "Kavita"); //Hello Kavita

//2nd example
//Using the JavaScript call() method to chain constructors for an object
function Box(height, width){
    this.height = height;
    this.width = width;
}

function Widget(height, width, color){
    Box.call(this, height, width);
    this.color = color;
}

let widget = new Widget(100, 200, "red");
console.log(widget) //Widget {height: 100, width: 200, color: 'red'}


//3rd example
// Using the JavaScript call() method for function borrowing

const Car = {
    name: "car",
    start(){
        console.log(`Start the ${this.name}`)
    },
    speedUp(){
        console.log(`Speed up the ${this.name}`)
    },
    stop(){
        console.log(`Stop the ${this.name}`)
    }
}

const airCraft = {
    name : 'aircraft',
    fly(){
        console.log(`Fly ${this.name}`)
    }
}

Car.start.call(airCraft); // Start the aircraft
Car.speedUp.call(airCraft); // Speed up the aircraft
airCraft.fly(); //Fly aircraft

/* Technically, the aircraft object borrows the start() and speedUp() method of the car object. And function borrowing refers to an object that uses a method of another object. */

//4th example
//how the arguments object borrows the filter() method of the Array.prototype via the call() function:
function isOdd(number){
    return number % 2;
}
//this func. that accepts any number of arguments and returns an array that contains only odd numbers:
function getOddNumbers(){
        //the arguments object borrows the filter() method of the Array.prototype object.
       return Array.prototype.filter.call(arguments, isOdd);
}

let result = getOddNumbers(2, 3, 7, 6, 9, 8, 10)
console.log(result) // [3, 7, 9]

////////////////////////////////////////////////////////////////////////////////

let cat = {
  name: "Bob",
  age: 5,
  type: "Cat",
};

let animal = {
  animalInfo: function (food) {
    return `Our ${this.type}, ${this.name}, is ${this.age} years old. He likes to eat ${food}`;
  },
};

console.log(animal.animalInfo.call(cat, "fish"));
// Our Cat, Bob, is 5 years old. He likes to eat fish

console.log(animal.animalInfo.apply(cat, ["fish"]));
// Our Cat, Bob, is 5 years old. He likes to eat fish

const bound = animal.animalInfo.bind(cat);
console.log(bound("rats"));
// Our Cat, Bob, is 5 years old. He likes to eat rats

```

The main differences between the three aforementioned methods used for explicit binding are the following:

In order to use call, pass the object and additional parameters as strings
In order to use apply, pass the object and additional parameters inside of an array.
The bind function will create a new function whose ‘this’ value can be set to the value providing in the function call.