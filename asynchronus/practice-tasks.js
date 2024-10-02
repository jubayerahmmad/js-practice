// task-1
function fiveSeconds() {
  setTimeout(() => {
    console.log("helllo");
  }, 2000);
}
fiveSeconds();

function delayedGreeting(name, delayTime) {
  setTimeout(() => {
    console.log(`Hello ${name}`);
  }, delayTime);
}
delayedGreeting("alice", 5000);

//task-2

function tellJoke() {
  const joke =
    "Why dont scientists trust atoms? Because they make up everything";
  console.log(joke);
}

const tellJoke2 = setInterval(tellJoke, 2000);

setTimeout(() => {
  clearInterval(tellJoke2);
}, 10000);
tellJoke();

//task-3

async function fetchData() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=single"
  );
  const data = await res.json();
  console.log(data.joke);
}
fetchData();
