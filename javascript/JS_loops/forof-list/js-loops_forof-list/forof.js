console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");

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

for (const programme of programmingLanguages) {
  const list = document.createElement("li");

  ol.append(list);
  list.innerText = programme;
}

main.append(ol);
