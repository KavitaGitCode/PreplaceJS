//Multiplication Table
for(let i = 1; i <=5; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
    console.log("/n"); // Adding a newline for better readability
}

//Example 2: 2D Array Iteration
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let i = 0; i < matrix.length; i++){
    //console.log(i, matrix[i], matrix[i].length);
   for(let j = 0; j <= matrix[i].length; j++){
        console.log(matrix[i][j]) ////1 2 3 4 5 6 7 8 9
   }
}

//Exercise 1: Print a Square
function prinSquere(sideLength){
    for(let i = 0; i < sideLength; i++){
       let row = "";
        for(let j = 0; j <= sideLength; j++){
            row += '* '
        }
        console.log(row);
    }
}

prinSquere(10);

//Exercise 2: Print a Right Triangle
function rightTrangle(num){
   for(let i = 0; i <= num; i++){
    let row = "";
    for(let j = 0; j < i; j++){
        row += "* "
    }
    console.log(row);
   }
}

rightTrangle(10);

//Print an Upside-Down Right Triangle
function upsideDownTrangle(num){
    for(let i = num; i >= 0; i--){
        let row = "";
        for(let j = i; j >= 0; j--){
            row += " * "
        }
        console.log(row);
    }
}

upsideDownTrangle(5)

//Print a Number Triangle
function printTrangleNumber(num){
    let number = 1;
    for(let i = 0; i <= num; i++){
        let brakeLine = "";
        for(let j = 0; j <= i; j++){
            brakeLine += j++ + ""
        }
        console.log(brakeLine)
    }
}

printTrangleNumber(5);

//Exercise 5: Print a Number Triangle
function trangleNumber(num){
    let number = 1;
    for(let i =0; i < num; i++){
        let brakeLine = "";
        for(let j = 0; j < i; i++){
            brakeLine += number++ + ''
        }
        console.log(brakeLine)
    }
}
printTrangleNumber(4);

//. Write a JS code to delete all occurrence of element in given array
function deleteElement(arr, ele){
    arr.forEach((element, index) => {
        if(element === ele){
            arr.splice(index, 1);
        }
    });
    return arr;
}
let arr1 = [23,56,4,78,5,63,45,210,56];

console.log(deleteElement(arr1, 56));

//5. Write a JS code to demonstrate Async loop

for(var i=0;i<5;i++){
    setTimeout(()=>console.log(i), 5000);// 5 5 5 5 5
  }

/* setTimeout with Closure

```javascript
for(var i=0;i<5;i++){
  setTimeout(()=>console.log(i), 2000);// 5 5 5 5 5
}

//Why this happens?
  1. when we used setTimeout function..its async operation to take some time to perform.
  2. loop continues to execute without waiting for the timeouts to finish. 
  3.  By the time the timeouts execute, the loop has already finished 
  4. value of (i is 5) in all the timeout callbacks because the loop has already completed its iterations.

//SOLUTION
  1. One way to fix this is to use a closure to capture the current value of i for each iteration. 

for(var i = 0; i < 5; i++){
  (function(currentIndex){
    setTimeout(() => {
      console.log(currentIndex)
    }, currentIndex * 1000)
  })(i)
}

//each iteration creates its own closure, capturing the value of i at that moment in time, and the correct value of i will be logged after the respective delay.
``` */


//6. Write a JS code to find the power of a number using for loop

function numPower(num, pow){
    let result = 1;
    let i = 0;
    while(i < pow){
        result = result * num
        i++
    }
    console.log(result)
}

numPower(2, 5) // 32 .....2*2*2*2*2

//7. Write a JS code to print a pattern using for loop
for(let i = 1; i<= 5; i++){
    let row = "";
   for(let j = 1; j <= i; j++){
       row += j
   }
    console.log(row)
}

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 */

// Write a JS code to find the no of digits in a number   
function digitSum(num){
    let numNew = num.toString();
    let result = numNew.split("").reduce((acc, cv) => acc + parseInt(cv), 0);
    return result
}

console.log(digitSum(73879), 'from 1st solution')

//2nd solution
function numSum(num){
    let result = 0;
    while(num > 0){
        result += num % 10 //// Add the last digit of num to the result ...9 + 7 +8
        //// Remove the last digit from num
        num = Math.floor(num/10); //73879....7387...738...73...7
    }
    return result;
}

console.log(numSum(73879), 'from 2nd solution')

//10. Write a JS code to find the largest number in an array
var arr = [2, 45, 3, 67, 34, 567, 1000, 34, 345, 123];  

//1st solution 
let max = Math.max(...arr) //567

//2nd solution
/* let maxSort = arr.sort((a, b) => b - a);
console.log(maxSort[0])
console.log(arr) */

//3rd solution
function findMax(arr){
    let largest = arr[0];
    arr.forEach((num) => {
        if(num > largest){
           largest = num; 
        }
    })
    return largest
}

console.log(findMax(arr))

// Write a JS code to find the number of zeros in 2D Matrix
let arrZero = [[0,1,1],[0,1,0],[1,0,0]];


function countZero(arr){
    let flatArr = arr.flat()
    let count = 0;
    for(let a of flatArr){
        a === 0 && count++
    }
    return count
}

console.log(countZero(arrZero));
