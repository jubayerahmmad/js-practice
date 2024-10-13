// const showData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await res.json();
//   console.log(data);
// };
// showData();

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    error = true;
    if (!error) {
      res("promise is made");
    } else {
      rej("error happend");
    }
  }, 3000);
});

const getPromise = async () => {
  try {
    const response = await promise1;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
getPromise();

// promise1
//   .then((res) => {
//     console.log("this is response", res);
//   })
//   .catch((err) => console.log(err, "this is error block"));
