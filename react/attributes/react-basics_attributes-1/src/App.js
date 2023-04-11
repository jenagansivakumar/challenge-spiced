import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title"> something </h2>
      <label htmlFor="name"> text </label>
      <input type="text" name="name" value="" />
    </article>
  );
}
