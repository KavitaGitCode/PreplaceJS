//when you want to borrow methods from a different object. but 'Bind'  doesn’t immediately execute the function.
//you have to save it in variable and use it later.
//Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns a new version of the function whose this sets to thisArg argument.
//The bind() method allows an object to borrow a method from another object without copying.
//Notes: If thisArg is not specified, the this of the executing scope is treated as thisArg.

//  .bind() returns a new function object.

/* The bind() method creates a new function that, when invoked, has the this sets to a provided value.
The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript. */

function talk(){
    console.log(this);
}

let me = {
    name: "Jack",
    talk: talk
}

//whoever on the left side of function invocation is "this" 
console.log(me.talk()); //{name: 'Jack', talk: ƒ}


//another example with bind
let you = {
    name: "Gloria"
}

//whaterver object you pass in to bind will be used as the value "this" inside the 'talk() function'
const callingYou = talk.bind(you);
console.log(callingYou()) //{ name: "Gloria"}

const student1 = {
    name: "Kavlita",
    grade: 5,
    introduction: function(rollNo){
        console.log(`${this.name} studies in grade ${this.grade} and has rool no. is ${rollNo}`);
    }
}

const student2 = {
    name: "Rmia",
    grade: 6
}

// the object student2 is borrowing introduction method from student1
let result = student1.introduction.bind(student2, "19");
console.log(result);
result();

//2nd example
let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};

setTimeout(person.getName, 1000);

let f = person.getName;
setTimeout(f, 1000);

setTimeout(() => {
    person.getName(); 
}, 1000)

//or
/* First, bind the person.getName method to the person object.
Second, pass the bound function f with this value set to the person object to the setTimeout() function. */
let funNew = person.getName.bind(person);
setTimeout(funNew, 1000)