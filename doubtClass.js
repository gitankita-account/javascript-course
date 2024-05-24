// rest operator

// spread operator
let obj = {
  name: "Ankita",
  city: "Noida",
  obj1: {
    fullname: "Kamal",
    country: "India",
  },
};

let arr = [1, 2, 3, 4, 5, 6, 7];

// let newObj=obj //  refrence is assigned to new object

let newObj = { ...obj, obj1: { ...obj.obj1 } }; // memory is assigned to new object

// const newOb = Object.assign(newObj, obj);

newObj.name = "Ritesh";
newObj.obj1.fullname = "Ankur";
// console.log(newObj);
// console.log(obj.obj1.fullname);

const {obj1}=obj

obj1.address="Lucknow"
console.log(obj)

let newArr = [...arr, 10, 20, 30];

// console.log(newArr)

// shallow copy
// deep copy

// rest operator

// function resOperator(){

// }

// const maxValue=Math.max(3,10,20,150,120,46,5,354,45,456,3)
// console.log(maxValue)

// function max(a,...args){
//    console.log(a,args)
// }

// max("Max Number",3,4,5,6,7)
