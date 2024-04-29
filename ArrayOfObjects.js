let arrObj = [
  {
    emp_id: 1000,
    emp_name: "Ritesh",
    emp_addr: "Noida",
    emp_salary: 1000000,
  },
  { emp_id: 2000, emp_name: "Aman", emp_addr: "Noida", emp_salary: 3000000 },
  { emp_id: 3000, emp_name: "Ankita", emp_addr: "Mumbai", emp_salary: 2000000 },
  {
    emp_id: 4000,
    emp_name: "Kamal",
    emp_addr: "Dehradun",
    emp_salary: 6000000,
  },
  { emp_id: 5000, emp_name: "Ritesh", emp_addr: "Delhi", emp_salary: 4000000 },
]; // json

// console.log(arrObj.length);

// const user = arrObj.find((a) => {
//   if (a.emp_id === 2000) {
//     return a;
//   }
// });

// console.log(user);

// includes

// let strInc='Ritesh'

// const isExist=strInc.includes('itea')
// console.log(isExist);

let arr = [5, 6, 7, 7, 8, 5, 8, 9, 90, 0];

const isExist = arr.includes(90);
console.log(isExist);


const uniqueArr=[... new Set(arr)]

console.log(uniqueArr);