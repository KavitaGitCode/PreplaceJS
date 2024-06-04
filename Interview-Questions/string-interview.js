let myName = 'my name is Kavita';

/* the wrongCode which i jot down
let myName = 'my name is Kavita';

function countString(strg) {
  let obj = {};
  let splitStrg = strg.split('');
  if (obj[splitStrg]) {
    obj[splitStrg] += 1;
  } else {
    obj[splitStrg] = 1;
  }
  console.log(obj);
  return obj;
}

countString(myName);
*/

function countString(strings){
    let obj = {};
    /* let splitStrg = strings.replaceAll(" ", "").split(''); will not work in node JS*/
    let splitStrg = strings.split('');
    splitStrg.forEach(element => {
        if(obj[element]){
            obj[element] += 1;
        } else {
            obj[element] = 1;
        }
    });
    console.log(obj);
    return obj;
}
countString(myName);

//interview question 2
function ABC(){
    let count = 0
    return () => count++
}

let b = ABC();
console.log(b);
console.log(b);
console.log(b);

/* const [stateValue, setStateValue] = useState(0)
const clickHandle = () => {
    setStateValue(state + 1); 
      setStateValue(state + 1); 
      setStateValue(state + 1); 
 } */

 //check palindrom
 function checkStrgPalindrom(stringText){
    let cleanStrg = stringText.toLowerCase().replace(/[^a-z0-9)]/g,'');
    let reverseStrg = cleanStrg.split('').reverse().join('');
   return cleanStrg === reverseStrg ? true : false
 }

 console.log(checkStrgPalindrom("A man, a plan, a canal, Panama!"))

 function sum(...arr){
    let result = arr.reduce((acc, curentNum) => acc + curentNum, 0);
    return result;
 }

 function isPositive(num){
   if(num >= 0){
        return num
    }
 }

 function sumOfPositiveNum(arr){
    let getPositive = arr.filter((item) => isPositive(item));
   /*  console.log(getPositive, ...getPositive);  */
    return sum(...getPositive);
 }

 console.log(sumOfPositiveNum([1, -2, 3, -4, 5])) //9
 console.log(sumOfPositiveNum([-1,-2, 3]))

/* 
function isPalindrom(strg) {
    let clearText = strg.map((item) => item.toLowerCase().replace(/[^a-z0-9)]/g,''))
    console.log(clearText, 'clearText')
    let getPalindromText = clearText.split('').reverse().join('');
    if(clearText === getPalindromText){
        return true;
    }
}

function testPalindromText(text){
    if(isPalindrom(text)){
        return text
    }
}

 function getPalidromArr(...arr){
    let newFilterList = arr.filter((item) => testPalindromText(item));
    return newFilterList;
 }

 console.log(getPalidromArr(["racecar", "hello", "level", "12321", "A man, a plan, a canal, Panama!"])); */

 //given string, reverse each word in the sentence 
 let stringTxt = "Welcome to this Javascript Guide"; //emocleW ot siht tpircsavaJ ediuG

 function reverseString(strg, seperator){
    return strg.split(seperator).reverse().join(seperator);
 }

 let reverseEntrieArr = reverseString(stringTxt, " ");

 let resultReverseWordStrg = reverseString(reverseEntrieArr, '');

 console.log(resultReverseWordStrg) //emocleW ot siht tpircsavaJ ediuG

 //How would you check if number is an integer
 const isInteger = (num) => num % 1 === 0;
 console.log(isInteger(3)) //true
 console.log(isInteger(3.9)) //false

//
 let inputStack = [];
 let outputStack = [];

 //Enqueue...add in arr
 function enQueue(arr, newArr){
    return arr.unshift(newArr)
}

 function deQueue(inputArr, outputArr){
    if(outputArr.length <= 0){
        while(inputArr.length > 0){
            let element = inputArr.pop();
            outputArr.push(element)
        }
    }

    return outputArr.pop();
}

enQueue(inputStack, 2);
enQueue(inputStack, 4);
enQueue(inputStack, 5);
enQueue(inputStack, 7);
enQueue(inputStack, 34);
enQueue(inputStack, 12);
enQueue(inputStack, 90);
deQueue(inputStack, outputStack)
deQueue(inputStack, outputStack)
console.log(inputStack)
console.log(outputStack);

///Mutations

//mutation(["Alien", "line"]) should return true.
//mutation(["floor", "for"]) should return true.
//mutation(["ate", "date"]) should return false.

function mutation(arr){
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();

    for(let i = 0; i < secondWord.length; i++){
        if(firstWord.indexOf(secondWord[i]) === -1){
            return false
        }
    }

    return true;
}

console.log(mutation(["ate", "date"])); //false
console.log(mutation(["floor", "for"])) //true

//You need to find where in the array a number should be inserted by order, and return the index where it should go.
function getIndexToIns(arr, num){
    arr.sort((a, b) => a - b);

    arr.forEach((item, index) => {
        if(item > num) return index
    })

    return arr.length;
}
/* 
function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
  } */
  

  getIndexToIns([1, 3, 4], 2);

  getIndexToIns([40, 60], 500);