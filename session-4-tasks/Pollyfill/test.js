//Ref :https://codecrunch.org/javascript-array-methods-polyfills-f2218fa15d2e : Read this 
// explain well about defference between map and forEach

/* Difference between forEach and map method

The returning value — The forEach() method returns undefined, while map() returns a new array with the transformed elements.

Ability to chain other methods —The map()method is chainable. This means that you can chain other methods (like reduce(), sort(), filter(), and so on), after executing the map() method in an array. This is something you can’t do with forEach() because, as you can guess, it returns undefined.

Mutability — Mutability means “Capacity or ability to change.” The map() method returns an entirely new array with transformed elements and the same amount of data. In the case of forEach(), even if it returns undefined, it can mutate the original array with the callback. Therefore, we see clearly that map() relies on immutability and forEach() is a mutator method. */
let numbers = [5, 4, 3, 2, 1];
const newArrayMap = numbers.map(element => element * element);
console.log(newArrayMap); //[ 25, 16, 9, 4, 1 ]
console.log(numbers); //[ 5, 4, 3, 2, 1 ]
const newArrayForEach = numbers.forEach(
   (element, index) =>
      numbers[index] = element * element
);
console.log(newArrayForEach); //undefined
console.log(numbers); // [ 25, 16, 9, 4, 1 ]

//map, reduce, forEach, filter, find

// Pollyfill is a fallback for all those methods that don't supported some of the browser in js 

/****************************** MAP ********************************/

let addFive = [1,2,3,4,5].map((item) => item + 5);
/* console.log(addFive); */
//[6,7,8,9,10]
Array.prototype.newMapFunction  = function (callbackFunc) {
    let newArr = [];
    /* console.log(this, 'this'); */

    if(typeof callbackFunc !== "function"){
        throw new Error(`${callbackFunc} is not a function`);
    }

    for(let i = 0; i < this.length; i++){
       newArr.push(callbackFunc(this[i], i, this))
    }
    return newArr;
}

let addTen = [6,7,8,9,10].newMapFunction(item => item + 10);

/* console.log(addTen) */


/****************************** FOREACH ********************************/

const array1 = [10,20,30,40,50];
/* array1.forEach(function(item) {
    console.log(item * 2, 'me')
}) */

Array.prototype.newForEach = function(callbackFunc){
   for(let i = 0; i < this.length; i++){
       callbackFunc(this[i], i, this)
    } 
}

array1.newForEach((item) => console.log(item * 2))

//count alphabate number
let letters = ["a", "b", "c", "a", "e", "b", "e", "z", "a"];
let obj = {};
letters.forEach((item) => {
    if(obj[item]){
        obj[item] += 1;
    } else{
        obj[item] = 1;
    }
})

//short cut code
/* letters.forEach((item) => {
    obj[item] ? obj[item] += 1 : obj[item] = 1
}) */
console.log(obj);

/****************************** FILTER ********************************/

let ages = [23, 90, 82, 31,10, 3, 12];
/* let above18 = ages.filter((item) => item > 18);
console.log(above18, 'above 18'); */

Array.prototype.newFilter = function(callbackFunc){
    let newArr = [];

    for(let i = 0; i < this.length; i++){
        let result = callbackFunc(this[i]);
        if(result){
            newArr.push(this[i])
        }
    }

    return newArr;
}

let above18 = ages.newFilter((item) => item > 18);
console.log(above18, 'above 18');


/****************************** find ********************************/

/* let below18 = ages.find(item => item < 18);
console.log(below18); */
//let ages = [23, 90, 82, 31,10, 3, 12];

Array.prototype.findNew = function(callbackFunc){
    for(let i = 0; i < this.length; i++){
        if(true === callbackFunc(this[i], i, this)){
            return this[i];
        }
    }
}

let below18 = ages.findNew(item => item < 18);
console.log(below18);

/****************************** Reduce ********************************/

let arrSum = [100, 200, 390, 400, 500, 600];
//let getSum = arrSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//console.log(getSum);
Array.prototype.newReduce = function(callbackFunc, initialValue){
    let accumulator = initialValue === undefined ? 0 : initialValue;
    for(let i = 0; i < this.length; i++){
       accumulator = callbackFunc(accumulator, this[i])
    }
    return accumulator;
}
let getSum = arrSum.newReduce((accumulator, currentValue) => accumulator + currentValue);
console.log(getSum);

function Animal(name, age, location){
    this.name = name;
    this.age = age;
    this.location = location;
}

Animal.bread = "AnimalPark" //this is private property 

/* Object.prototype.getName = function(){
    return `${this.name}`
} */

let lion = new Animal('Lion', 20, 'Mumbai');
lion.getNameLion = function(){
    return `${this.name}`
}
let tiger = new Animal('Tiger', 2, 'xys');
Object.setPrototypeOf(tiger, lion);
console.log(tiger.getNameLion());

console.log(lion.getNameLion());
console.log(Animal)


/* Inheriting from built-in types */
class Queue extends Array{
    enqueue(e){
        super.push(e)
    }
    dequeue(){
        return super.shift()
    }
    peek(){
        return !this.empty() ? this[0] : undefined
    }
    empty(){
        return this.length === 0
    }
}

let students = new Queue();
students.enqueue('Pushpa');
students.enqueue('Liger');
students.enqueue('Lion');
students.pop()//Lion
console.log(students)