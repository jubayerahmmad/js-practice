const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is promise1");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is promise2");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is promise3");
  }, 3000);
});

//* .then method(nesting)

// promise1.then((response) => {
//   console.log(response);
//   promise2.then((response) => {
//     console.log(response);
//     promise3.then((response) => {
//       console.log(response);
//     });
//   });
// });

//* .then method(Promise.All)

// Promise.all([promise1, promise2, promise3])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* async/await method

//can be used when calling/fetching multiple APIs
const getAllPromise = async () => {
  const [response1, response2, response3] = await Promise.all([
    promise1,
    promise2,
    promise3,
  ]);
  //   const response = await Promise.all([promise1, promise2, promise3]);
  console.log(response1, response2, response3);
};
getAllPromise();
