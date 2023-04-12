import "./styles.css";

export default function App() {
  return <Greeting name="coach" />;
}

function Greeting({ name }) {
  const isCoach = name === "coach";
  return <h1>Hello, {isCoach ? "Coach!" : name}!</h1>;
}

// - Write the `Greeting` component inside of the [`App.js`](src/App.js).
//   - It accepts a prop called `name` (make sure to destructure it).
//   - It returns an HTML element and uses the `name` prop to render "Hello, [name]!";
// - Inside of the return statement of your `App` component, replace the heading with your `Greeting` component and pass it a `name` prop with a value of your choice.
// Update your `Greeting` component to show "Hello, Coach!" if the `name` prop is equal to one of your coaches.

``;

// export default function App() {
//   function handlePet() {
//     console.log("Thanks for petting me");
//   }

//   return (
//     <div>
//       <Pet sound="Meow" emoji="🐈" name="cat" onPet={handlePet} isHungry />
//       <Pet sound="Woof" emoji="🐕" name="dog" onPet={handlePet} />
//       <Pet sound="Squeek" emoji="🐁" name="mouse" onPet={handlePet} />
//     </div>
//   );
// }

// function Pet({ sound, emoji, name, onPet, isHungry }) {
//   return (
//     <div onClick={onPet}>
//       {isHungry ? "Feed me" : sound}
//       <span role="img" aria-label={name}>
//         {emoji}
//       </span>
//     </div>
//   );
// }
