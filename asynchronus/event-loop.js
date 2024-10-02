function a() {
  b();
  console.log("a");
  console.log("aa");
}
function b() {
  console.log("b");
  c();
  console.log("bb");
}
function c() {
  setTimeout(() => {
    console.log("xyz");
  }, 2000);
  console.log("c");
  y();
  console.log("cc");
}

function d() {
  e();
  console.log("d");
  console.log("dd");
}
function e() {
  console.log("e");
  console.log("ee");
}
function x() {
  console.log("x");
  d();
  console.log("xx");
}
function y() {
  console.log("y");
  setTimeout(() => {
    console.log("ABC");
  }, 4000);
  console.log("yy");
}

a();
x();
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
