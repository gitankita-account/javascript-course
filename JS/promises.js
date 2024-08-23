// async
// sync

const pr = new Promise((resolve, reject) => {
  let user = {};
  
  user.city = "Noida";
  reject("there is some error");

  //   console.log(user);
});

// console.log(pr);

// then/catch

// pr.then((res) => {
//   console.log(res, "resolve");
// }).catch((err) => {
//   console.log(err, "reject");
// });

// const data = fetch("https://jsonplaceholder.typicode.com/users");

// data
//   .then((res) => {
//     res
//       .json()
//       .then((resp) => {
//         console.log(resp,"response");
//       })
//       .catch((err) => {
//         console.log(err)
//       });
//   })
//   .catch((err) => {
//     console.log(err, "reject");
//   });
// console.log(data, 2626);

// await/async

const fetchData = async () => {
  try {
    // const userData = await data;
    // const dt = await userData.json();
    const dt = await pr;
    console.log(dt, "userdata");
  } catch (err) {
    console.log(err, "reject");
  }
};

fetchData();

console.log("90");
