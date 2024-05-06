// console.log("External JS");

// // a = 7; // initialize
// console.log(a); // undefined
// let a = 90; // variable declare

// // console.log(myname);
// // let myname = 45;

// hoisting();
// console.log(hoistingVar);
// function hoisting() {
//   let num = 90;
//   console.log(num);
// }

// var hoistingVar = () => {
//   console.log("Var hoisting");
// };

let parentA = 100;

function funA() {
  let a = 90;
  console.log(a + parentA);

  return function funB() {
    let b = 70;
    return b;
  };
}

const fun=funA();

fun()
// console.log(val)
