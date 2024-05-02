// 'use strict';


// global scope

// console.log('global', this); // browser (main thread) -> window, nodeJS -> global object


// function normal declaration

// function parent () {

//     console.log('inside function', this); // undefined -> this substitution Algorithm -> window

// }

// parent()

// window.parent();


// arrow function


// const parentArrow = () => {

//     console.log('arrow inside function', this);

// }

// parentArrow();


// object

let obj = {

  name: "kavita",

  getName: function () {

    // console.log(this);

    const getNameArrow = () => {

      console.log("arrow inside obj", this);

    };

    getNameArrow();

  },

};

obj.getName();


// call apply bind -method/function borrow

obj.getName.call(obj1)


// constructor function


// document ~ eventlistener

document.querySelector('.child').addEventListener('click', function() {

    console.log(this);

})

