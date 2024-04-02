## Prototype under the hood behaviour

// str (under the hood yeh bhi object h in js Engine (eg-> str.length)) -> Object -> null

// arr -> Object -> null

// boolean -> Object -> null
// any datatype -> Object -> null

# Constructor vs Object Literal

An object literal is typically used to create a single object whereas a constructor is useful for creating multiple objects:

# Construtor Function:

Constructor function is a special function that used to create and initialize an objects with specific bluprints or templates.

In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.

Objects of the same type are created by calling the constructor function with the new keyword:

check "this.md" file

## Why We Need Constructor Functions?

- It is a convenient way to create multiple objects with similar properties and methods.
- It encapsulate the creation and initialization logic of objects in one place, making our code more modular and easier to maintain.
- Constructor functions enable the concept of object-oriented programming in JavaScript, allowing us to define classes and create instances of those classes.

## How constructor function Works?

1. Constructor functions are like regular functions, but they are used with the new keyword to create objects.
2. When a constructor function is called with new, it creates a new object and sets the this keyword to point to that newly created object.
3. Inside the constructor function, you can define properties and methods for the object being created by using this.
4. The new keyword automatically returns the newly created object from the constructor function. So basically it ensuring that each object is properly initialized with its own properties.

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

## Object Prototype

Properties and methods can be added to a constructor using a prototype.

## "NEW keyword" : what happens when you used new KeyWOrds

1.  A new empty object will be created. : the new keyword initiates the creation of an entirely new object. A new keywords instantiate new object.
2.  This newly created object will get linked to the prototype property of the constructor function.
    This means we can access to properties and methods defined on the construction's prototype.
3.  The constructor function is called: the constructor function is called with specified arguments and this is bound to newly createad object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.
    in simple word:
    - this (which now refers to the "current context" of newly created object) will get passed into our function.
    - We can access this through out function's (property n methods) using the this keyword.
4.  Finally, if there’s no return statement in the constructor function, JavaScript automatically returns the new object.

# Classes

ES6 provides a new syntax to create objects, using the class keyword.

In ES6, a class declaration has a constructor method that is invoked with the new keyword.
If you do not define a constructor method, JavaScript will add an empty constructor method.

The constructor method is a special method for creating and initializing an object created with a class.

It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

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
```

## Inheritance

Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

1. the child class inherits parent class properties and methods by useing "extends" keyword
2. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
3. Methods of the parent class can be overridden by the methods of the child class.
4. Static class methods are defined on the class itself. You cannot call a static method on an object.
   if you want to use static method then send it as parameter

```javascript
class SmartWatch extends Mobile {
  constructor(company, year, country, features) {
    super(company, year, country);
    this.features = features;
  }

  static heartBeatFeature() {
    return `${this.features}`;
  }

  //this method will override the "yearsInMarket()" method of Mobile class

  yearsInMarket() {
    return `newly lanuch smart watch in ${this.country}`;
  }
}

let appleSmartWatch = new SmartWatch('apple', 2005, 'california', 'colorchange');

appleSmartWatch.yearsInMarket(); // //'newly lanuch smart watch in california'


//with static
ref link : https://www.w3schools.com/js/js_class_static.asp
```

## Prototype:

     1. If there is no property directly available in an object then javascript looks up the chain until it finds the property or reaches the end(null)

1. If there is no property directly

- In JavaScript, a constructor gets called when an object is created using the new keyword.
-
- Each object created using a constructor is unique. Properties can be added or removed from an object without affecting another one created using the same constructor. However, if an object is built using an object literal, any changes made to the variable that is assigned the object value will change the original object.

## Lexical Enviornment

Lexical environment is creatd when execution context created. Leaxical is the local memory + refernce to the lexical enviornment of its parent.Lexical Parent Means where that function is actually sits inside that code.
Local Memory + lexical environment of parent function. And this we called Scope Chain

- Can you explain the concept of scope in JavaScript
  Question:
  Explanation: In JavaScript, every function has its own lexical environment. A lexical environment consists of an object that contains all variables.
