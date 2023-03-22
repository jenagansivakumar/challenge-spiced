console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
let pizzaSize1 = pizzaInput1.value;

pizzaInput1.addEventListener("input", () => {
  pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});
// let pizzaSize1 = 24;

let pizzaSize2 = pizzaInput2.value;
pizzaInput2.addEventListener("input", () => {
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  let pizzaSize1 = 24;
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  let areaOfPizza1 = Math.PI * (diameter1 / 2) ** 2;
  let areaOfPizza2 = Math.PI * (diameter2 / 2) ** 2;
  let pizzaGain = ((areaOfPizza2 - areaOfPizza1) / areaOfPizza1) * 100;
  output.textContent = Math.round(pizzaGain);
}

calculatePizzaGain(10, 20);
// console.log(calculatePizzaGain(5, 10));

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
}
