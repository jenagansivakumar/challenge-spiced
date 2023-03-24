console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const post = document.createElement("article");
const paragraph = document.createElement("p");
paragraph.classList.add("post__content");
paragraph.textContent = "something something";
console.log(paragraph);

post.append(paragraph);

console.log(post);
