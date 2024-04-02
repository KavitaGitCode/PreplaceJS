//map, reduce, forEach, filter, find

let addFive = [1,2,3,4,5].map((item) => item + 5);
/* console.log(addFive); */
//[6,7,8,9,10]

/****************************** MAP ********************************/
Array.prototype.newMapFunction  = function (callbackFunc) {
    let newArr = [];
    /* console.log(this, 'this'); */
    for(let i = 0; i < this.length; i++){
       newArr.push(callbackFunc(this[i]))
    }
    return newArr;
}

let addTen = [6,7,8,9,10].newMapFunction(item => item + 10);

/* console.log(addTen) */


/****************************** FOREACH ********************************/

const array1 = [10,20,30,40,50];
/* array1.forEach(function(item) {
    console.log(item * 2, 'me')
}) */

Array.prototype.newForEach = function(callbackFunc){
   for(let i = 0; i < this.length; i++){
       callbackFunc(this[i])
    } 
}

const doubleArr = array1.newForEach((item) => console.log(item * 2))

console.log(doubleArr);

//count alphabate number
let letters = ["a", "b", "c", "a", "e", "b", "e", "z", "a"];
let obj = {};
letters.forEach((item) => {
    if(obj[item]){
        obj[item] += 1;
    } else{
        obj[item] = 1;
    }
})

//short cut code
/* letters.forEach((item) => {
    obj[item] ? obj[item] += 1 : obj[item] = 1
}) */
console.log(obj);

/****************************** FILTER ********************************/

let ages = [23, 90, 82, 31,10, 3, 12];
/* let above18 = ages.filter((item) => item > 18);
console.log(above18, 'above 18'); */

Array.prototype.newFilter = function(callbackFunc){
    let newArr = [];

    for(let i = 0; i < this.length; i++){
        
        let result = callbackFunc(this[i]);
        /* console.log(result) */
        if(result){
            newArr.push(this[i]);
        }   
    }

    return newArr;
}

let above18 = ages.newFilter((item) => item > 18);
console.log(above18, 'above 18');


/****************************** find ********************************/

/* let below18 = ages.find(item => item < 18);
console.log(below18); */
//let ages = [23, 90, 82, 31,10, 3, 12];

Array.prototype.findNew = function(callbackFunc){
    for(let i = 0; i < this.length; i++){
        if(true === callbackFunc(this[i])){
            return this[i];
        }
    }
}

let below18 = ages.findNew(item => item < 18);
console.log(below18);

/****************************** Reduce ********************************/

let arrSum = [100, 200, 390, 400, 500, 600];
//let getSum = arrSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//console.log(getSum);
Array.prototype.newReduce = function(callbackFunc, initialValue){
    let accumulator = initialValue === undefined ? 0 : initialValue;
    for(let i = 0; i < this.length; i++){
       accumulator = callbackFunc(accumulator, this[i])
    }
    return accumulator;
}
let getSum = arrSum.newReduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(getSum);