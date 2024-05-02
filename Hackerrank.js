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
function factorail(num){
    if(isNaN(num)) throw new Error("This is not a number");

    if(num === 1){
        return 1
    } else {
        return num * factorail(num - 1);
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