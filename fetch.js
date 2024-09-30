//* Fetch API
// Fetch API is a modern way to make HTTP requests in JavaScript.

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

function loadUsers() {
  const users = "https://jsonplaceholder.typicode.com/users";
  fetch(users)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  console.log(data);
}
