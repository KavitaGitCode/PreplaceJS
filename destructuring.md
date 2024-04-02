let me explain spread first:
 spread operator : unpacked all contents of an array into a comma-seperated list.
 Consequently you can't choose or pick which elements you want to assign to variable.

 So Destrcturing array do exactly this.
 eg: 
 const [a, b, c] = [5, 9, 2];
 console.log(a, c) // 5, 2

 Use destructuring assignment to swap the values
 let a = 8, b = 6;
 let [a, b] = [b, a]; //don't use let over here as will give u error 
 // SyntaxError: unknown: Identifier 'a' has already been declared. (3:5)
 [a, b] = [b, a]
