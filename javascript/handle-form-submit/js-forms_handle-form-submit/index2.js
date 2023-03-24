console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.data);
  const data = Object.fromEntries(formData);
  console.log(data);
});
