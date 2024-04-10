// console.log("Start");

// let obj = {
//   id: "121",
// };

// setTimeout(() => {
//     obj.name="Ankita"
//     console.log(obj)
// }, 2000);

// console.log("End",obj);

// callback hell

// function fun1(obj) {
//   // obj={}
//   obj.id = 121; // taks 1 id added
//   function fun2(user) {
//     user.name = "Ankita"; // task 2 name added
//     function fun3(user1) {
//       user1.city = "Noida"; // task 3 city added
//       function fun4(finalOutput) {
//         console.log(finalOutput); // taks 4 final output
//       }
//       setTimeout(() => {
//         console.log(user1)
//         fun4(user1);
//       }, 1000);
//     }

//     setTimeout(() => {
//       console.log(user);
//       fun3(user);
//     }, 1000);
//   }

//   setTimeout(() => {
//     console.log(obj);
//     fun2(obj);
//   }, 1000);
// }
// let obj1 = {};
// fun1(obj1);

// **** Array methods ***
//  map,filter,slice,sort,forEach,reduce,splice,pop,push,

// map-> map method is used to traverse each element in the array. map function can return updated array or same array also
// ex ::
let arr = [4, 3, 6, 3, 7, 8, 10];
//         0  1  2  3  4  5  6
function mapFun(a, b) {
  // a represent each element in the array
  // b represent index of the element

  if (a % 2 == 0) {
    return a;
  }

  //   return a * b + " at " + b;
}

const updatedarr = arr.map(mapFun);

console.log(updatedarr);

// filter -> filter method is used to filter the data from the array. it is also return the updated array

const filteredArr = arr.filter((a, b) => {
  if (a % b == 0) {
    return a;
  }
});

console.log(filteredArr);

// console.log(4%0)

// multiply each element by 2 in the array and return it into the new array
// add 10 with each element in the array and return in new array
// filter out the number that is divisble by 3 and 5 both 
// filter out the number without zero.
// find out the data that is not divisble by its index  