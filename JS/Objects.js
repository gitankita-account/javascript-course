//
let riteshObj = {
  myname: "Ritesh",
  rollno: 12323,
  city: "Noida",
  1: ["Reactjs", "Nodejs", "Mongodb", "Express"],
  displayMyDetails: () => {
    console.log(riteshObj);
  },
};

const ankitaObj = {
  myname: "Ankita",
  rollno: 424343,
  city: "Delhi",
  displayMyDetails: function () {
    console.log(ankitaObj.myname, ankitaObj);
  },
};

// myname1=

// console.log(riteshObj.rollno, riteshObj.city);
// console.log(ankitaObj.myname, riteshObj[1]);
// riteshObj.displayMyDetails();
// ankitaObj.displayMyDetails();

//

riteshObj.company = "Apple";
delete riteshObj.displayMyDetails;

// rest operator
// riteshObj = { ...riteshObj, officeAddress: "New York" };
// // let obj = riteshObj;
// console.log(riteshObj);

let newObj = { ...riteshObj };
newObj.myname = "Namit";
// console.log(riteshObj, newObj);

//
// const keys = Object.keys(ankitaObj);
// console.log(keys);

// //
// const values = Object.values(ankitaObj);
// console.log(values);

// object destructuring

const { myname, rollno, city, displayMyDetails } = ankitaObj;
const { myname: newName } = riteshObj;

// console.log(myname, myname, rollno, city);

// const fun = displayMyDetails.bind(this);
// console.log(fun());

// ankitaObj.displayMyDetails();

// console.log(myname, newName);

Object.freeze(riteshObj);
riteshObj.newCompnay = "Facebook";

// console.log(riteshObj);

// add new key in the object and print all the details of the object
// take city parameter in the function and print the city of the object
// take two parameters in function first parameter should be object and second should be name and print the company name of the object .

let newObj1 = {
  myname: "Ritesh",
};

function printCity(obj, town) {
  console.log(town);
  obj.city = town;
  console.log(obj);
}

printCity(newObj1, "Delhi");

function restData(a, b, c, ...param) {
  console.log(a, b, c, param);
}

restData(3, 4, 5, 6, 7, 8, 9, 0, 6, 4, 3);


let v="subject"

let newObj2={

}

newObj2[v]="value1"

console.log(newObj2)