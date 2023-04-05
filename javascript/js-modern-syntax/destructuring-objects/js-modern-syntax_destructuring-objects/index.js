// console.clear();

// // EXERCISE 1
// // Extract only the course name from the company object.
// // Make sure to export your variable as in the example below to make the tests work.

// const company = {
//   name: "neuefische",
//   course: "Web Development",
//   location: "Hamburg",
// };

// const { name, course, location } = company;
// console.log(course);

// // example: export const {value1} = myObject;

// // EXERCISE 2
// // We have an object called 'user'.
// // Write the destructuring assignment that reads:
// //  2.1: 'name' property into the variable 'name'.
// //  2.2: 'years' property into the variable 'age'.
// //  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property exists)

// const user = { nameOfPerson: "John", years: 30, isAdmin: true };

// // const { nameOfPerson, years: age } = user;

// // const { years: age } = user;

// // const { nameOfPerson, years: age, isAdmin = false } = user;

// // console.log(nameOfPerson, age, isAdmin);
// // const { name, years } = user;
// // EXERCISE 3
// // Extract the variables from the dog object and
// // rename them like "dogName", "dogBreed", and "dogAge", respectively.

// const dog = {
//   name: "Pluto",
//   breed: "husky",
//   age: 5,
// };

// const { name: dogName, breed: dogBreed, age: dogAge } = dog;

// EXERCISE 4
// Extract the 'lastName' property from the person object as "personLastName".
// Store all other properties in an object called "moreInformation".

const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};

const { lastName: personLastName, ...moreInformation } = person;

console.log(personLastName, moreInformation);
