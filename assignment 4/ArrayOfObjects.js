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

console.log(arrObj.length);

//  1. decending order of data------------------------------

// let so = arrObj.sort((a, b) =>{
//   return b.emp_id - a.emp_id
// })
// console.log(so);

//  2. employe name in decending order-----------------------

// let so = arrObj.sort((a, b) => {
//   return -a.emp_name.localeCompare(b.emp_name);
// });
// console.log(so);

//  3. salary b/w 3 to 6 lack complete data print---------------------

// let fil = arrObj.filter((a) => {
//   if (a.emp_salary > 3000000 && a.emp_salary < 6000000) {
//     return a.emp_salary
//   }
// });
// console.log(fil);

// 4. add company key in every object---------------------------

// let companyName = 'Google';
// let res = arrObj.map((a, i) =>{
//   return a.companyame = companyName
// })
// console.log(arrObj);

// add date ----------------------------------

// let dt = new Date();
// let res = arrObj.map((a, i) =>{
//   return a.date = dt.toLocaleDateString()
// })
// console.log(arrObj);
