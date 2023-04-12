import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button> test 1 </Button>
      <Button> test 2</Button>
      <Button> test 3 </Button>
      <Button> test 4 </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
