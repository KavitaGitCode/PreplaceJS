//https://sanjanahumanintech.medium.com/javascript-difference-between-callback-function-and-higher-order-function-53db09fe8399

function printFunc(index){
    console.log(`Inded is ${index}`)
}

function repeatFunction(fn, times){
    for(let i = 1; i <= times; i++){
        fn(i);
    }
}

repeatFunction(printFunc, 5);

function filterBy(arr, criteriaFun){ //higher-order function...criteriaFn as arguments
   //A Higher-order function takes one or more functions as arguments and returns as a result. A Higher-order function enables the creation of more abstract and reusable code. 
   const filterNewArr = [];
   for(let i = 0; i < arr.length; i++){
    if(criteriaFun(i)){
        filterNewArr.push(i)
    }
   }
   return filterNewArr;
}

function isEven(num){
    return num % 2 === 0
}

let arr = [1,2,3,4,5,6,7,8,9];
//A Callback function is a function that is passed as an argument to another function and is executed after the completion of some operation. 
console.log(filterBy(arr, isEven)); // callback function