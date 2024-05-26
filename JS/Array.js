let arr = [4, 2, 6, 2, 8, 4, 6];
let arr1 = [5, 7, 4, 8, 2, 3];
// index   0  1  2  3  4  5  6
//  arr length = 7

// console.log(arr[4])
// console.log(arr[6])
// console.log(arr[3])

// for loop
//  initialization; condition; increment/decrement
// let i = 0;
// i <= arr.length - 1; // exection...

// dry run
//  i=0; 0<=6 true -> task executed; i=0+1
//  i=1; 1<=6 true -> task executed; i=1+1
//  i=2; 2<=6 true -> task executed; i=2+1
//  i=3; 3<=6 true -> task executed; i=3+1
//  i=4; 4<=6 true -> task executed; i=4+1
//  i=5; 5<=6 true -> task executed; i=5+1
//  i=6; 6<=6 true -> task executed; i=6+1
//  i=7; 7<=6 false -> loop terminated..

// find the square of all the alements in the array

const findSquare = (numarray) => {
  let updatedArr = [];
  for (let i = 0; i < numarray.length; i++) {
    let n = numarray[i];
    // updatedArr.push(n*n)
    updatedArr = [...updatedArr, n * n];
  }
  return updatedArr;
};

// const v1 = findSquare(arr);
// console.log(v1);

// const v2 = findSquare(arr1);
// console.log(v2);

//  find all even numbers from the array
//  find the number that is divisble by 2 but not divisble by 3
//  filter out the 0 from the array
//  find the sum of all the elements
//  find the max and min number from the array

// [0,4,5,1,0,8,0]
// [0,0,0] expected output

//[3,1,5,2,7,9,4]
// let n=arr[0]
// n=1<5
// n=1

// 
