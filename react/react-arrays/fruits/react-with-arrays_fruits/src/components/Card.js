import "./Card.css";

export default function Card({ name, colour, id }) {
  return (
    <div className="card">
      <p>{name}</p>
      <p>{colour}</p>
      <p>{id}</p>
    </div>
  );
}
