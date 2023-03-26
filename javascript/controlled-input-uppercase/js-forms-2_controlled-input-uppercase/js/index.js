console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", function (e) {
  const inputText = e.target.value;
  e.target.value = value.toUpperCase();
});

