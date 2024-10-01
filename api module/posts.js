function loadPosts() {
  const postsURL = "https://jsonplaceholder.typicode.com/posts";
  fetch(postsURL)
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}
loadPosts();

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const postsDiv = document.createElement("div");
    postsDiv.classList.add("post");
    postsDiv.innerHTML = `
      <h3>UserID : ${post.id} </h3>
      <h4>Title : ${post.title} </h4>
      <h5>Description : ${post.body} </h5>
    `;
    postsContainer.appendChild(postsDiv);
  }
}
