console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];
const ol = document.createElement("ol");

// --v-- write/change code here --v--
// const ol = document.createElement("ol");
for (let i = 0; i < programmingLanguages.length; i++) {
  const li = document.createElement("li");
  li.textContent = programmingLanguages[i];
  ol.append(li);
}
main.append(ol);

// console.clear();

// const main = document.querySelector('[data-js="main"]');

// // Create a list from an array

// const programmingLanguages = [
//   "JavaScript",
//   "Python",
//   "Java",
//   "C#",
//   "C++",
//   "PHP",
//   "Ruby",
// ];

// for (const programme of programmingLanguages) {
//   console.log(programme);
// }

// main.append(ol);
