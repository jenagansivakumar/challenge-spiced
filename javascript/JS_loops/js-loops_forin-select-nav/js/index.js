console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (let key in languages){}
let language = languages[key]

console.log (language)














// for (const key in languages) {
//   const language = languages[key];

//   const option = document.createElement("option");
//   select.append(option);
//   console.log(option);
//   option.textContent = language;
//   options.text = languages;
//   select.appendChild(options);
}

// languages.innerText = language;
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

// const nav = {
//   home: { href: "/home", text: "Home" },
//   about: { href: "/about", text: "About" },
//   contact: { href: "/contact", text: "Contact" },
// };

// const navElement = document.createElement("nav");
// const ul = document.createElement("ul");
// main.append(navElement);
// navElement.append(ul);

// --v-- write/change code here --v--





}

// --^-- write/change code here --^--

// Your taks is to fill this list with list items and anchor tags; as content, use the `nav` object which you can access with a `for...in` loop.

// Use the following hints as guideline:

// - Write a `for...in` loop for the `nav` object.
// - In each iteration,
//   - create a list item and an anchor tag
//   - set the anchor tag's `href` and `textContent` properties to the relevant values of the `nav` object; you want to use bracket notation with your iterator variable
//   - append your created items accordingly.
