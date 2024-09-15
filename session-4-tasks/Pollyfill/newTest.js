let arr = [3, 4, 5, 6];

Array.prototype.newForEach = function(callbackFunc){
   /* console.log(this); */ 
    for(let i = 0; i < this.length; i++){
        callbackFunc(this[i], i, this);
    }
}


arr.newForEach((item) => console.log(item * 2))

//pollyfill for Map
Array.prototype.newMap = function(callbackFunc){
    let arr = [];

    for(let i = 0; i < this.length; i++){
        arr.push(callbackFunc(this[i], i, this))
    }

    return arr;
}

let addTwoInArr = arr.newMap((item) => item + 2);
console.log(addTwoInArr);

//filter for Map
let ages = [23, 45, 4, 12, 21, 90, 38, 93];

Array.prototype.newFilter = function(callbackFunc){
    let arr = [];

    for(let i = 0; i < this.length; i++){
        if(callbackFunc(this[i])){
            arr.push(this[i]);
        }
    }

    return arr;
}

let above18 = ages.newFilter((item) => item < 18);
console.log(above18);

//Pollyfill for find
Array.prototype.newFind = function(callbackFunc){
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if(callbackFunc(element) === true){
            return element;
        }
    }
}
let getGrtthanFour = arr.newFind((item) => item > 4);
console.log(getGrtthanFour);

//Pollyfill for reduce
Array.prototype.newReduce = function(callbackFunc, initialValue){
    let accumulator = initialValue === undefined ? 0 : initialValue;

    for (let index = 0; index < this.length; index++) {
/* This loop iterates through each element of the array. For each element, it calls the callbackFunc function with two arguments: the current value of accumulator and the current element of the array.*/
         accumulator = callbackFunc(accumulator, this[index]); 
        /*  The result of this function call becomes the new value of accumulator. */
    }

    return accumulator;
}

const product = arr.newReduce((acc, curr) => acc * curr, 1);


console.log(product);

