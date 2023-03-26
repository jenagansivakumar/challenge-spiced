console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", function (e) {
  result.textContent = firstInput.value * secondInput.value;
});

secondInput.addEventListener("input", function (e) {
  result.textContent = secondInput.value * firstInput.value;
});
