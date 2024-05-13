//javascript 10 days challenges
//sample output
//Print each vowel of  in order on a new line, then print each consonant in order on a new line. Return nothing.
/* 
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s */

function vowelsAndConsonants(stringTxt){
    let splitString = stringTxt.split('');
    let vowels = ['a', 'e', 'i', "o", 'u'];
    let arr1 = [];
    let arr2 = [];
    splitString.forEach(element => {
        if(vowels.includes(element)){
            arr1.push(element)
        } else {
            arr2.push(element);
        }
    });

    let getNewString = arr1.concat(arr2).join('\n');
    console.log(getNewString);
}

vowelsAndConsonants('javascriptloops')

//factoria function
function factorial(num){
    if(isNaN(num)) throw new Error("This is not a number");

    if(num === 1){
        return 1
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(5));
/* 
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
/* putstr("Enter a name to search for: ");
var nameN = readline();
var position = names.indexOf(nameN);
if (position >= 0) {
console.log("Found " + nameN + " at position " + position);
} else {
    console.log(nameN + " not found in array.");
    } */

 // */   

//Return the second largest number in the array.
let arrTwo = [2, 3, 6, 6, 5]
 function getSecondLargest(nums) {
    // Complete the function
    let result = nums.sort((a, b) => a - b);
    let getUnique = [...new Set(result)];
    return getUnique[getUnique.length - 2]
}

console.log(getSecondLargest(arrTwo));

//2nd solution
function getSecondLargest_2(nums){
    let maxNumber = Math.max(...nums);
    return Math.max(...nums.filter((item) => item !== maxNumber))
}

console.log(getSecondLargest_2(arrTwo));

//Return a count of the total number of objects 'o' satisfying o.x == o.y
let obj = [
    {x: 1, y:1},
    {x: 2, y:3},
    {x: 3, y:3},
    {x: 3, y:4},
    {x: 4, y:5},
]
function getCount(objects) {
    let newArr = [];
    for(let i in objects){
        if(objects[i]['x'] === objects[i]['y']){
            newArr.push(objects[i])
        }
    }
    return newArr.length;
}
console.log(getCount(obj))

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon{
    constructor(arr){
        this.arr = arr
    }
    perimeter(){
       return this.arr.reduce((acc, currentVal) => acc + currentVal, 0)
    }
}
let triangle = new Polygon([3,4,5]);
triangle.perimeter()

function getMaxLessThanK (n,k){
    let max = 0;
    for(let i = 1; i<= n; i++){
        for(let j = i+1; j <= n; j++){
            if((i&j)<k) max = Math.max(max,i&j);
        }
    }
    return max;
}