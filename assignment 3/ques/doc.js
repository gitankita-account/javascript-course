let arr = [1, 2, 8, 4, 5, 6];
//    0, 1, 2, 3, 4, 5

//  let fil = arr.filter((a, i) =>{
//     return a % i !== 0
// //    if(a % i !== 0){
// //     return a
// //    }
//  })
//  console.log(fil);

function fill(numArr){
  let fil = numArr.filter((a, i) => {
    return a % i !== 0;
    //    if(a % i !== 0){
    //     return a
    //    }
  })
//   console.log(fil);
  return fil
}
let output = fill(arr);
console.log(output);
