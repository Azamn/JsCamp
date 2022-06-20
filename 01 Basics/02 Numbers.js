// Integer literals

//eg: 
// long comment select alt+shift+A
/* 0 
100
0xff => 255
0b, 0B
 */

// floating point literals

/* 1.9
3.14 

3.03e23 => 3.03 * 10 to the power 23

let billion = 1_000_000_000 */

// Arithmetic
// +, -, *, /, %, **(power)

Math.pow(2,9)
Math.pow(3, 1/3)
Math.round(.6) // round() gives nearest value 1
Math.ceil(.6) // maximum near by 1
Math.floor(.6) // minmum near by 0 
Math.abs(-5) // gives 5
Math.min(2,3,5,1) // gives minimum value
Math.max(2,4,6,1,8,3,5) // gives maximu value
Math.random() // gives random between 0 and 1

// ES6 new methods

Math.cbrt(27) // for calculate cuberoot
Math.hypot(3,4) // hypot
console.log(Math.clz32(0xf)); // how many zero need to make 32 bit number

// Infinity, no errors; just Infinity

// divide by 0; it's just a NaN

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.parseInt("3z"));
// console.log(Number.isNaN("3z"));

let statementOne = .3 - .2 
let statementTwo = .2 - .1

// console.log(Math.round(statementOne) === Math.round(statementTwo));
// console.log(statementOne === .1);
// console.log(statementTwo === .1);
// console.log(.3 - .2);
// console.log(.2 - .1);

let googol = "1" + "0" .repeat(100);

console.log(BigInt(googol));














