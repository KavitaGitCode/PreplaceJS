// https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/



// Space Complexity

// number, undefined, null -> O(1)

// string, array, object -> O(n) big O of n ...Linear

// O(log n): Logarithmic



// O(1)

function constant(n) {

    return 10;

}

constant(1000000);




// O(log(n))

// 2^1 => 2

// 2^2 => 4 => 2*2

// 2^3 => 8 => 2*2*2          

// 2^4 =>  16  => 2*2*2*2       log(16) => 4

// 2^5 =>  32  => 2*2*2*2*2     log(32) => 5




// O(n) linear

// Brute force

function add(n) {

let t1 = performance.now();

  let sum = 0;

  for(let i = 1; i <= n; i++) {

    sum = sum + i;

  }

  let t2 = performance.now();

  console.log('total time', (t2 - t1)/1000);

  console.log("sum", sum);

}


// optimised

// optimised way O(1) constant

function addOptimised(n) {

    console.log(n*(n+1)/2);

}


add(1000000);

addOptimised(1000000);

// '123456789' => 55


// map/forEach/slice/splice/concat/for/while/forOf,forIn  -> O(n);



// 1 <-> 1

// 1000 - 1000

// 1Lkh 1Lkh

// 10Cr - 10Cr



// nlogn => n*logn

// n -> 32 -> 32

// logn -> 32 -> 5

// 32 * 5 => 160



// n*n quadratic

// 32 * 32 => 1024


