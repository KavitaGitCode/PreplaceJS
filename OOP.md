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