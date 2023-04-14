import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "banana", colour: "yellow" },
    { id: 1, name: "orange", colour: "orange" },
    { id: 2, name: "strawberry", colour: "red" },
    { id: 3, name: "kiwi", colour: "brown" },
    { id: 4, name: "grape", colour: "purple" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit, index) => (
        <Card
          key={index}
          name={fruit.name}
          colour={fruit.colour}
          id={fruit.id}
        />
      ))}
    </div>
  );
}

// return (
//   <div className="app">
//     <div>
//       {fruits.map(({ id, name, colour }) => (
//         <h2>
//           <Card key={id}>
//             <h1>
//               {name} {colour}
//             </h1>
//           </Card>{" "}
//         </h2>
//       ))}
//     </div>
//   </div>
// );
