// split
let str = "ritesh$kumar$mahour&DOB1997*Noida";
const splitedData = str.split(/[$&*]+/); // regex (regular experasion)

console.log(splitedData);

let strName = "pillar Ins";
let uppStr = strName.toUpperCase();

console.log(uppStr);

let strSmall = "ANKITA";
let small = strSmall.toLowerCase();

console.log(uppStr, small);

let insName = strName.concat("titute Noida");
console.log(insName);

let num = 100 + parseInt("ritesh");
// parseFloat()
console.log(num);

let num1 = "456";

let n = Number("ankita");
console.log(n);

let n1 = isNaN(123);
console.log(n1);

// check the input if it is a number or a string?
// convert string to the number and multiply another number.
//  inp1='ritesh' ==> this is not a number please input a correct number to multiply.
// inp1='34'  ==> it can be convert into the number

//
const dt = new Date();

console.log(dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds());
console.log(dt.getMonth() + 1, dt.getUTCFullYear());

console.log(dt.toISOString());
console.log(dt.toLocaleDateString());
