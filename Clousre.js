/* What is Closure?
Function along with its lexical scope(environment) bundled together  forms a Closure. U can say closure gives you access to an outer function scope from an inner function. A Function along with reference to its outer environment, together forms a closure.

 In JavaScript, functions have a reference to all variables declared in the same scope as well as any outer scopes. These scopes are known as the function's lexical environment. The combination of the function and it's environment is known as a closure.
Closure Example
In Javascript, you can declare functions within other functions and return them. The inner function has access to any variables declared above it. */
function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;
  }
}
const addTo3 = createAdder(3);
addTo3(5); // 7

function One () {
    let a = 1;
    function two(){
        console.log(a) //a reference to be returned so if you change
    }
	a = 100;
    return two //function which is return from another function (i.e one) thay maintain their lexical scope. And where it actually present
	//or code something like this
  return function two(){
        console.log(a)
    }

}

let three = One() //  Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure
console.log(three()) //

//Another example
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7 add5 and add10 both form closures. They share the same function body deffination, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.


console.log(add10(2)); // 12
/* 
1. thinks its preserving access to a variable. Remembering the context …where its actually coming from
2. Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
3.Closure is the feature of JavaScript that allows an inner function to have access to its 
current scope as well as its lexical parent scope. It is a very fundamental, basic yet important concept of JavaScript.
 The closure has the property of encapsulation, code organization, and memorization of its lexical parent scope. 
 In react.js privacy can be achieved using closures, by creating encapsulated logic inside components.

Advantage
Module Pattern
Function curing
Memoize 
Once function
Data hiding and encapsuliaton
	we have function or variable, we have some data privacy over it. that we don’t want to use or access that variable by other function. We actually encapsulated data that other functions in programme not use it.

Disadvantage 
	It consume a lot of memory.this could be reason of garbage collected 
What is Garbage collectors
	it is programme in javascript engine. Which freeze the un-utilise memory. In javascript, whenever there is some unused variables it kind of take it out of memory which freez the memory , whenever js engine find out this variable is no longer need it. That is what garbage collector do.
_____________________________________________________________________________________

Why do need to use Class over functions */

function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;
  }
}
const addTo4 = createAdder(2);
addTo4(5); // 7


class Adder {
  constructor(a) {
     this.a = a;
  }

  add(b) {
    const sum = this.a + b;
    return sum;
  }
}
const addTo5 = new Adder(2);
addTo5.add(5); // 7

/* Another difference is how the functions are stored in memory. If you create many instances of a class, each instance stores a single reference to the prototype object where all the methods are stored. Whereas for closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called. For this reason, classes can be more efficient, particularly in the case where there are many methods. */

//closure with settime out
/* for(var a = 0; a < 5; a++){
  setTimeout(() => {
    console.log(a)  ///this is an error how to resolve
  }, 1000 + a);
} */

//1st solution
/* for(var a = 0; a < 5; a++){
  function innerFunc(_a){
    setTimeout(() => {
      console.log(_a)  ///this is an error how to resolve
    }, 1000 * _a);
  }
  innerFunc(a)
} */

//2nd solution
for(var b = 0; b <= 5; b++){
  (function(a){
    setTimeout(() => {
      console.log(a)
    }, a * 1000)
  })(b)
}

//3rd solution
for(let i = 0; i <= 5;i++){
  setTimeout(() => {
    console.log(i);
  }, i * 1000)
}


