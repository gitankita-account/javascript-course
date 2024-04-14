// ritesh
function sum(a, b) {
  // a,b -> parameters (variables)
  const sum1 = a + b;
  return sum1;
}

// ankita
function displayOutput() {
  const v1 = sum(3, 5) / 2;
  const v2 = sum(9, 9) / 3;
  console.log(v1, v2);
}

displayOutput();

// 1) check whether number is even or odd
let num1 = 100;
let num2 = 70;
//    == true/false
//
if (num1 > num2) {
  console.log(true, num1, "is greater than", num2);
} else {
  console.log(false, num2, "is greater than", num1);
}

// == conditional operator
// === conditional operator
//  difference b/w == and ===

if (num1 === "100") {
  console.log(num1, "is equal to 70 ");
}

// arrow functions

const multiplty = (num1, num2) => num1 * num2 *a;

const displayOutputArrow = () => {
  const v = 4+4
  console.log(v);
  return v
};


const o1 = multiplty(2, 3);
console.log(o1);

displayOutputArrow();
displayOutputArrow();

