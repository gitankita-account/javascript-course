// data types
// 2323 -> integer
// "39394" -> string
// "Ankita" ->String
// 3.4 -> float
// array
// null
// object
// boolean
// undefined

// initialization
// const, let , var

a = [1, 2, 3, 4]; // var

// const
const college = "DU";
//  const college = "DTU";  //1) you can not change the value 2) redelaration not allowed
// console.log(college);
//  let -> keyword
// college-> variable
//  = -> assignment operator
//  "DU" -> data (String type )

// let
let rollno = 90;
rollno = "Ankita";
// const rollno=100  // 1) we can change the value 2) redeclaration not allowed
// console.log(rollno);

// var

var myname = "Pillar";
var myname = true; // 1) we can change the value 2) we can redeclare but only with var keyword

// console.log(myname);

// const, let, var scope

// a,b -> parameters
function sum(a, b) {
  var sum1 = a + b; // sum1 local scope
  //   console.log(sum1);
  return sum1;
}

// parameterise function

// console.log(sum1) we can not access outside the function because const,let and var all are function scope
// 3,4/5,6/7,8 ->  arguments
let output1 = sum(3, 4);
let output2 = sum(5, 6);
let output3 = sum(7, 8);
console.log(output1, output2, output3);
// blocks
//  if else, loop, try catch
{
  var s = 90 + 10;
  //   console.log(s)
}

// console.log(s)

// create parametrise functions and return should be there
// sum/multiply/square/devide/subtract
