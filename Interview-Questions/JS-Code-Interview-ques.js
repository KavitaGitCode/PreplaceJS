//cap
let x, y;
 
x = y = 25 - 10 - 5;
 
console.log(x, y);

function func1(){
    setTimeout(() => {
        console.log(x); 
        console.log(y)
    }, 2000)
    var x =2;
  
  let y = 10
}

func1() //answer ...2,10

var myObj = {
    foo: 'bar',
    fun: function () {
        var self = this;
        console.log(this.foo); //bar
        console.log(self.foo); //bar
        (function(){
             console.log('inner', this.foo); //inner undefined
             console.log('inner', self.foo); //inner bar
        }())
    }
}
myObj.fun()

(function(a) {
    return function(){
        console.log(a)
        a = 6
    }
}(30))
//result
/* ƒ (){
    console.log(a)
    a = 6
} */

console.log(typeof NaN) //number
let a = [2,3,4];
let b = [...a, 9, 89, 2];
let c = [...b, 9, 2,3, 4]
console.log(c) //10) [2, 3, 4, 9, 89, 2, 9, 2, 3, 4]

function abc(...resp){
    return resp
}
abc(9,8,9) //[9, 8, 9]
