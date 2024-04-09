//ref link: https://www.freecodecamp.org/news/object-oriented-javascript-for-beginners/
/* Encapsulation is another key concept in OOP, and it stands for an object's capacity to "decide" which information (property and methods) it exposes to "the outside" and which it doesn't. Encapsulation is implemented through public and private properties and methods. 

Encapsulation is useful in cases where we need certain properties or methods for the inner working of the object, but we don't want to expose that to the exterior. Having private properties/methods ensures we don't "accidentally" expose information we don't want.
*/

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

/* Polymorphism
It's the ability of one method to return different values according to certain conditions.

That's one kind of polymorphism, parameter-based. 
const newBike = new Bike('Honda SP 125', 'desh ki dhadkan' , 10.71, 1998); adTags

This implementation is polymorphic because if we commented out the getDetails method in the Car class, we would still be able to call it on other object class:

//Another kind of polymorphism, Override the parent method.
look getDetails() method which override Car class method in Bike class
*/