/*
By default, sort method performs sorting by converting the numbers into strings. 
For numbers its convert into numbers and compare it with its Unicode Value
eg 100, 1000 : comapriosn happens for first charector Unicode
In JavaScript, when comparing strings using the sort method, the comparison is done based on the Unicode code value of the characters. When comparing strings containing uppercase and lowercase letters, the Unicode values of the corresponding characters are compared.
*******************************Thing to keep in Mind*******************************
1) Uppercase letters generally have lower Unicode values than lowercase letters. */

/* how the comparison works: */
/* Case Sensitivity: By default, string comparison in JavaScript is case-sensitive. Uppercase letters are considered to have different Unicode values than their corresponding lowercase letters. For example, the Unicode value of "A" is different from the Unicode value of "a". */

/* Unicode Values: When comparing strings using the sort method without any custom comparison function, JavaScript compares the strings based on their Unicode values.
*******************************Thing to keep in Mind*******************************
1) Uppercase letters generally have lower Unicode values than lowercase letters.
2) Therefore, if you use the default sort behavior, uppercase letters will generally appear before lowercase letters. */

/* Custom Comparison: To perform a case-insensitive comparison, such as in the code you provided, we convert both strings to lowercase using the toLowerCase method before comparing them. This ensures that the comparison is based on the lowercase versions of the strings, effectively ignoring case differences. */

/* By converting both strings to lowercase before comparison, we ensure that the sorting is case-insensitive. This means that "John Doe" and "john doe" would be treated as equal during the sorting process, resulting in them being sorted together regardless of case differences. */

//examples
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

//2nd example
let users = [
    {
      name: "John Doe",
      age: 17
    },
    {
      name: "Elon Doe",
      age: 27
    },
    {
      name: "Alex Doe",
      age: 14
    },
    {
        name:"Vicky Kaushal",
        age: 14
    }
  ];

function sortNames(arr){
    return arr.sort((a,b) => {
        if(a.name > b.name){
            return 1 //result is positive...it means a should come after b...means b first
        } else if(a.name < b.name){
            return -1 //result is negative...it means a should come before b...means a first
        } else {
            return 0 //both are equal
        }
    })
}  
console.log(sortNames(users))

  let numbersArr = [78, 18, 10, 5, 84, 24, 105];
numbersArr.sort(compareFunc);
function compareFunc(a, b){
    //return tech karel jar
    //1. < 0 ... a comes first;
    //2.   0 ... nothing will be changeed;
    //3. > 0 ... b comes first;
    //If the result is negative, it means a should come before b.
//If the result is positive, it means a should come after b.
//If the result is zero, it means a and b are equal in value, so their relative order doesn't change.
 //     a    b
    // 78 - 18 = 60 --- result is positive...it means a should come after b..means b first
    // 18 - 10 =  8 --- result is positive...it means a should come after b..means b first
    // 10 -  5 =  5 --- result is positive...it means a should come after b..means b first
    //  5 - 84 = -79 --- result is negative...it means a should come before b...means a first
    return a - b;
}
//console.log(numbersArr);

/* Keys things keep in MIDIInput
By returning the result of a - b, the array will be sorted in ascending order (from smallest to largest). If you wanted to sort the array in descending order, you could return b - a instead. */


let products = [
    {
      name: "Dell",
      price: 9000,
      units: 2
    },
    {
      name: "Samsung",
      price: 5000,
      units: 3
    },
    {
      name: "HP",
      price: 10000,
      units: 10,
      specialDiscount: true
    },
    {
      name: 'Apple',
      price: 2000,
      units: 1
    }
  ];

const priceSort = products.sort((a, b) => a.price - b.price);
console.log(priceSort, 'change by sort');
console.log(products, 'original'); 