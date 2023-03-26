console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", function (e) {
  const textInput = e.target.value;
  e.target.value = textInput.toUpperCase();
});
