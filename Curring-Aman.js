//Curring is the usecase of Closure
// Closure and Bind -> Currying
// Currying(definition)-- > Its a technique of evaluating function 
//with single / multiple arguments 
//into sequence of functions with single / multiple arguments.

//single arguments - sum(1)(2)(3)(4)(5)()
//code -
//recursion solution: generic
//simple example
function add(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3
        }
    }
}
console.log(add(5)(5)(1));

//with es6
const addES = num1 => num2 => num3 => num1 + num2 + num3;
console.log(addES(10)(20)(50))

//CUrring with Recursion
function sum(a) {

    return function (b) {

        if (b) {

            return sum(a + b);

        } else {

            return a;

        }

    };

}
console.log(sum(5)(5)(15)());

//this will be utilization
//Curring with multiple arguments with resucssion method - sum(1)(2)(3)(4, 5, 6)(7, 8)(9, 10)()
function sumNew(a) {

    return function (...b) {
        let result = b.reduce((accumlator, currentVal) => currentVal + accumlator, 0);
        if (result) {

            return sumNew(a + result);

        } else {

            return a;

        }

    }

}

console.log(sumNew(1)(2)(3)(4, 5, 6)(7, 8)(9, 10)())

//(Advance) without parenthesis - sum(1)(2)(3)(4)(5)

//Bind ...closure with curring
function sumWithBind(a, b){
   return a + b
}

let bindCurring = sumWithBind.bind(null, 5)
console.log(bindCurring(10));
console.log(sumWithBind.bind(null, 2)(5))

//DSA Topics
//array
//object
//string
//link list
//Devident Quanqures
//recursion
//two sliding window 
//two pointers
//devident
//stack 
//Queue
//Binary Tree