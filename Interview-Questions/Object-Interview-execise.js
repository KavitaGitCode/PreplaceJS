//Conditionally adding properties to an object
const isSummer = true;

const fruits = {
    apple: 10,
    mango: 20,
    ...(isSummer && {watermelon: 30})
}

console.log(fruits);

//
function deepCopy(arr) {
    // Create an empty array to store the copied elements
    let copy = [];
    
    // Iterate through each element of the original array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is an array
        if (Array.isArray(arr[i])) {
            // If it's an array, recursively call deepCopy to clone the nested array
            copy[i] = deepCopy(arr[i]);
        } else {
            // If it's not an array, simply copy the element
            console.log(copy[i], 'copy[i]', 'before');
            console.log( arr[i], 'arr[i]',  'before')
            copy[i] = arr[i];

            console.log(copy[i], 'copy[i]');
            console.log( arr[i], 'arr[i]')
        }
    }
    
    // Return the copied array
    return copy;
}
const originalArray = [1, 2, [3, 4]];
// Creating a deep copy
const copiedArray = deepCopy(originalArray);

// Modifying the copied array
copiedArray[0] = 100;
copiedArray[2][0] = 300;

// Output
console.log(originalArray); // Output: [1, 2, [3, 4]]
console.log(copiedArray);   // Output: [100, 2, [300, 4]]