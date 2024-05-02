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


function isPalindrom(strg) {
    let clearText = strg.toLowerCase().replace(/[^a-z0-9)]/g,'');
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

 console.log(getPalidromArr(["racecar", "hello", "level", "12321", "A man, a plan, a canal, Panama!"]))