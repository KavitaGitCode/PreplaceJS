
//Ref Link: https://www.scaler.com/topics/apply-in-javascript/
//The apply in Javascript accepts two arguments,
//the "this" value (object on which the function is to be called)
//the list of the arguments (optional) that will be passed to the method it calls (fn).
//call and apply method immediately execute the function. doesn't return another function.
//The apply() method is used for different use-cases like function borrowing, appending two arrays, etc.

//1. apply() Method to Call a Function

function intro(message){
    console.log(`${message} ${this.name} ${this.lastname}`)
}

const student1 = {
    name: "TOny",
    lastname: "Stark"
}

const student2 = {
    name: "Steve",
    lastname: "Rogers"
}

intro.apply(student1, ["Hello, I am"]);
intro.apply(student2, ["Hey there, I am"]);

//2. apply() for Function Borrowing
let car = {
    name: "Atlos",
    speed: "120KMPH",
    drive: function(){
        console.log(`${this.name} runs at ${this.speed}`);
    }
}

car.drive();

let bike = {
    name: 'Jawa',
    speed: "100KMPH"
}

car.drive.apply(bike);

//3. apply() to Append two Arrays
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
//1st solution
//console.log(array1.concat(array2))

//2nd Solution
/* array1.push(...array2)
console.log(array1); */

//3rd solution
array1.push.apply(array1, array2);
console.log(array1);

//4. apply() with Built-in Functions
let  values = [5, 3, 2, 4, 1, 90];

//console.log(Math.max(...values)); //solution 1
//The first parameter, thisArg, is not required for this method. So, we passed the null value.
console.log(Math.max.apply(null, values)) ////solution 2
