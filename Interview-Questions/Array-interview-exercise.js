//Asked in interview
//ref Link : https://irmakesin.medium.com/mid-level-javascript-interview-questions-solutions-about-arrays-632297098ab8
//create your own flat method (Asked in interview)
[1, [2, [3, [4, [5, [[[6]]]]]]]].flat(Infinity);

function flat(arr, level) {
  const result = [];
  arr.forEach(function (value) {
    if (Array.isArray(value) && level > 0) {
      result.push(...flat(value, level - 1));
    } else {
      result.push(value);
    }
  });
  return result;
}
flat([1, [2, [3, [4, [5, [[[6]]]]]]]], Infinity);

//Print unique values from an array
const arr = [1, 2, 3, 3, 4, 5, 5];

const uniqueArr = [...new Set(arr)];
console.log(uniqueArr, 'uniqueArr');

//Another Tech Mahindra Interview Questions
let arrTech = [4,5,6,7,4,8,9,7];

function repeatArr(arr){
  let obj = {};
  arr.forEach((item) => {
    if(obj[item]){
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  });
  //return obj //{ '4': 2, '5': 1, '6': 1, '7': 2, '8': 1, '9': 1 }

  // Filter the object to only include items with a count greater than 1
  let repeateArrItem = {};
  for(let key in obj){
    /* console.log(key, obj[key], 'newly added') */
    //obj[key] ...value 2..1..2... key... 4, 5, 6
    if(obj[key] > 1){
      repeateArrItem[key] = obj[key]
    }
  }
  console.log(repeateArrItem);
}

repeatArr(arrTech);

// How can you flatten a nested array into a single flat array?
const arr1 = [1, [2, 3], [4, [5, 6]]];
const flatArr = arr1.flat(Infinity);

console.log(flatArr, 'flatArr');

//How can you find the intersection(comman) of two arrays?
const arr2 = [1, 2, 3, 4];
const arr3 = [3, 4, 5, 6];
const intersection = arr2.filter((item) => arr3.includes(item));

console.log(intersection, 'intersection...common between two array')
function commanArr(arr1, arr2) {
  let resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) >= 0) {
      resultArr.push(arr1[i])
    }
  }
  return resultArr;
}

console.log(commanArr(arr2, arr3));

//Write a function that swaps the first two elements in a given array
const array = [3, 5, 1, 4, 2];

function swapArr([arr1, arr2, ...restArr]) {
  return [arr2, arr1, ...restArr]
}

console.log(swapArr(array));

//Explain different ways to reverse an array
const arr4 = [1, 2, 3, 4, 5];

/* const reversrArr = arr4.reverse();
console.log(reversrArr) */

function reverseArr(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result;
}

console.log(reverseArr(arr4));

//How do you use the reduce() method to sum elements in an array without using a loop?
const numbers = [1, 2, 3, 2, 4, 2, 5];
const sumNumbers = numbers.reduce((acc, currentVal) => currentVal + acc, 0);
const count = numbers.reduce((acc, curr) => (curr === 2 ? acc + 1 : acc), 0);

console.log(sumNumbers);
console.log(count);

//How do you use the filter() method to filter out odd numbers from an array?
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8];
const oddNum = numbersList.filter((item) => item % 2 !== 0);
console.log(oddNum)

//Can you copy an array in three different ways, and which method is the safest for preventing unintended modifications to the original array?

const originalArray = [1, 2, 3, 4, 5, [9, 0, 4]];
/* console.log(originalArray, "originalArray"); */

//...spread( This method creates a new copy of the array without modifying the original.)
let copyWithSpread = [...originalArray]; /* (Safest Method: Spread Operator) */

copyWithSpread[0] = 100;
copyWithSpread[5][0] = 900;
console.log(copyWithSpread, "copyWithSpread");
console.log(originalArray, "originalArray");

//Array.from() (This method converts an array-like or iterable object into an array)
let copyWithArrFrom = Array.from(originalArray);
console.log(copyWithArrFrom, "copyWithArrFrom");

//slice (This method creates a shallow copy of Original array.)
let copyWithSlice = originalArray.slice();
console.log(copyWithSlice, "copyWithSlice");

/* Date: 26-4-2024 */

//Array Sorting:Write a function to sort an array of objects based on a specific property of the objects.

let productArr = [
  {
    name: "T-Shirt",
    isAvailabel: true,
    price: 900
  },
  {
    name: "Shirt",
    isAvailabel: false,
    price: 500
  },
  {
    name: "Sando",
    isAvailabel: true,
    price: 200
  },
  {
    name: "Coat",
    isAvailabel: false,
    price: 5000
  },
];


function stringSort(arrName, keyName) {
  return arrName.sort((a, b) => a[keyName].localeCompare(b[keyName]));
}

function numberSort(arrName, keyName) {
  return arrName.sort((a, b) => a[keyName] - b[keyName])
}

function isAvailableSort(arrName, keyName) {
  return arrName.filter((item) => item[keyName]);
}

function sortByPropertyName(arr, propertyName) {
  if (propertyName === "isAvailabel") {
    return isAvailableSort(arr, propertyName)
  }

  arr.forEach(element => {
    if (typeof element[propertyName] === "string") {
      return stringSort(arr, propertyName);
    } else if (typeof element[propertyName] === "number") {
      return numberSort(arr, propertyName);
    }
    /*  
    //things to remember is
/* forEach loop inside the sortByPropertyName function doesn't handle the case when the property type is a boolean (isAvailable in this case).
    else if(typeof element[propertyName] === "boolean"){
      return isAvailableSort(arr, propertyName)
    } */
  });
  return arr;
}

console.log(sortByPropertyName(productArr, 'isAvailabel'));

/* Array Flattening: Create a function that flattens a nested array. For example, [[1, 2], [3, 4], [5, 6]] becomes [1, 2, 3, 4, 5, 6]. */

let nestedArr =  [[1, 2], [3, 4], [5, 6]];
let singelArr = nestedArr.flat(Infinity);
console.log(nestedArr);
console.log(singelArr);

function flatArrFun(arr, level){
  let result = [];
  arr.forEach((item) => {
    if(Array.isArray(item) && level > 0){
      result.push(...flatArrFun(item, level - 1))
    }  else{
      result.push(item);
    }
  })
  return result;
}
console.log(flatArrFun(nestedArr, Infinity));

/* Array Chunking:
reflink: https://www.geeksforgeeks.org/split-an-array-into-chunks-in-javascript/
Write a function that splits an array into chunks of a specified size. For example, [1, 2, 3, 4, 5, 6, 7] split into chunks of size 3 becomes [[1, 2, 3], [4, 5, 6], [7]].  */

let arrNew1= [1, 2, 3, 4, 5, 6, 7];

function chunkingArry(arr, size){
  let newArr = [];
  for(let i = 0; i < arr.length; i+=size){
    newArr.push(arr.slice(i, size + i))
  }
  return newArr;
}

console.log(chunkingArry(arrNew1, 3)); //[[1, 2, 3], [4, 5, 6], [7]]

/* Array Rotation:
Implement a function that rotates an array to the left by a given number of positions. For example, [1, 2, 3, 4, 5] rotated by 2 positions becomes [3, 4, 5, 1, 2]. */

let originalArray1 = [1, 2, 3, 4, 5];

function rotateArr(arr, rotateNum){
     let getStartArr = arr.slice(rotateNum, arr.length);
     let remainigArr = arr.slice(0, rotateNum);
     return getStartArr.concat(remainigArr);
}

console.log(rotateArr(originalArray1, 2)); //[3, 4, 5, 1, 2]

//Property Checker:
/* Write a function that checks if a given property exists in an object. Return true if the property exists, false otherwise.
 */

let obj1 = {
  name: "Kavita",
  location: "Mumbai",
  designation: "Senior Developer"
}

function isPropertyExist(obj, propertyNam){
  return obj.hasOwnProperty(propertyNam);
}

console.log(isPropertyExist(obj1, 'salary'));

/* Object Counter:
Create a function that counts the number of properties (keys) in an object and returns the count. */
function countProperty(obj){
    return Object.keys(obj).length
}

console.log(countProperty(obj1));

/* Object Manipulation: ES6 Merge Objects
Write a function that merges two objects into one. If a property exists in both objects, use the value from the second object. */

let obj2 = {
  company: "Wipro",
  designation: "Manager",
  technology: ["Javascript", "React"]
}

function mergeObj(obj1, obj2){
    let mergerObj = Object.assign(obj1, obj2);
    let objClone = {...obj1, ...obj2}
    console.log(objClone, "objClone");
    return mergerObj;
}

console.log(mergeObj(obj1, obj2));
/* 
Object Filter:
Write a function that takes an object and an array of keys and returns a new object with only the properties specified in the array.
*/
let personObj = {
  name: "Kavita",
  location: "Mumbai",
  company: "Wipro",
  designation: "Manager",
  technology: ["Javascript", "React"],
  age: 23
}

function filterObj(obj, arr){
  let newObj = {};
  arr.forEach((item) => {
    if(obj.hasOwnProperty(item)){
      newObj[item] = obj[item]
    }
  });
  console.log(newObj)
  return newObj;
}

/* 2nd Solution
function filterObj(obj, arr) {
  return arr.reduce((acc, key) => {
      if (obj.hasOwnProperty(key)) {
          acc[key] = obj[key];
      }
      return acc;
  }, {});
} 

function filterObj(obj, arr) {
    return Object.fromEntries(
        Object.entries(obj)
            .filter(([key, value]) => arr.includes(key))
    );
}

console.log(filterObj(personObj, ["name", "age", "location", "company"]));
*/

filterObj(personObj , ["name", "age", "location", "company"]);

/* Object Deep Clone:
Implement a function to create a deep clone of an object, meaning nested objects and arrays should also be cloned. */
const originalObject = { name: "John", age: 30, address: { city: "New York", country: "USA" } };

function objDeepCloneFunc(obj){
  const cloneObj = JSON.parse(JSON.stringify(obj));
  cloneObj.hobbies = ["racing", "flying"]
  console.log(cloneObj);
  console.log(obj);
}


objDeepCloneFunc(originalObject)

//Sort this name...Plz check  Sort.js also
let names = ["John Doe", "alex Doe", "peter Doe", "Elon Doe"];
let sortedNames = names.sort();//this will not work as they are in cap
function makeFirstletterCaps(arr){
  return arr.map((strg) => {
    return strg.split(" ").map((item) => {
      return item.replace(/\b\w/g, char => char.toUpperCase())
      //return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    }).join(' ');
  })
}
/* console.log(makeFirstletterCaps(names)); */

let sortedNamesNew = makeFirstletterCaps(names).sort();
console.log(sortedNamesNew);

//2nd solution
function capitaliseFirstLetter(strg){
  return strg.replace(/\b\w/g, char => char.toUpperCase())
}

function sortWithoutCapitalizeFirstLetter(arr){
    return arr.sort((a, b) => {
       // Convert both names to lowercase for case-insensitive comparison
      const nameA = a.toLowerCase();
      const nameB = b.toLowerCase();
        if(nameA > nameB){ // nameA should come after nameB
          return 1;
        } else if(nameA < nameB){ // nameA should come before nameB
          return - 1;
        } else {
          return 0 // names are equal
        }
    })
}

console.log(sortWithoutCapitalizeFirstLetter(names))

//Find the frequency of elements in array
let arrList = ['hello', 'world', 'java', 'hello', 'java'];

function findFrequency(arr){
  let result = arr.reduce((accumalator, currentVal) => {
    if(accumalator[currentVal]){
      accumalator[currentVal] += 1
    } else {
      accumalator[currentVal] = 1
    }
    return accumalator
  },{});
  return result
}

console.log(findFrequency(arrList)); //{ hello: 2, world: 1, java: 2 }

//2nd solution
function coutWord(arr){
  let obj = {};
  arr.forEach((item) => {
      if(obj[item]){
        obj[item] += 1;
      } else {
        obj[item] = 1;
      }
  })
  return obj;
}
console.log(coutWord(arrList));

//Group items on the basis of age of given array of object
let people = [
  {name: "ALice", age: 21},
  {name: "Max", age:20},
  {name: "Jack", age: 20},
  {name: "Michel", age: 41}
];

function objGroupByAge(arr, val){
  let newArr = [];
  let result = arr.filter((item, index, array) => {
     if(item.age === val){
        return newArr.push(item)
      }
  })
  return result
}

console.log(objGroupByAge(people, 20))

//2nd solution (look below for explanation)
function sameObj(arr){
  let check = {};

  arr.forEach((item) => {
    if(!check[item.age]){//{ {20: [{}, {}], 21: []}
      check[item.age] = [item] //item: object...[] creat array on the fly push
    } else {
      /* when we say check[item.age].push(item), we're accessing the array associated with the age of the current item (item.age), and then we're using the push() method to add the current item (item) to that array. This way, we're effectively adding the current item to the group of items with the same age. */
      check[item.age].push(item) //please check below example check[item.age] refer to array we want to access array value so we need to use push
    }
  })

  return check;
}
console.log(sameObj(people))

// Suppose you have a collection of buckets labeled with numbers, and each bucket contains toys.
let buckets = {
  5: ["toy1", "toy2"],
  8: ["toy3", "toy4"]
};

// Now, let's say you have a new toy and its label says it belongs in bucket "5".
let newToy = "toy5";

// You want to add this new toy to the bucket labeled "5".
// You access the bucket labeled "5" and use the add-toy method (push) to add the new toy.
buckets[5].push(newToy);

console.log(buckets);
// Output:
// {
//     5: ["toy1", "toy2", "toy5"],
//     8: ["toy3", "toy4"]
// }

// Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)
let arrList1 = [1,2,3,4,5,6,7,8, 9];

function sumWithTarget(arr, target){
  let newArr = [];
  arr.forEach((item) => {
    let result = target - item;
    newArr.push(result)
  });
  return newArr;
}
console.log(sumWithTarget(arrList1, 9));
