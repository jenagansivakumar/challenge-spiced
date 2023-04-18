import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offSet, setOffSet] = useState(0);
  // const [id, setID] = useState();

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offSet}`
        );
        console.log(offSet);
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [offSet]);

  function handleNextPage() {
    setOffSet(offSet + 20);
  }

  function handlePrevPage() {
    setOffSet(offSet - 20);
  }

  return (
    <main>
      <button
        onClick={handlePrevPage}
        hidden={offSet === 0 ? true : false}
        type="button"
      >
        Previous Page
      </button>
      <button onClick={handleNextPage} type="button">
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
