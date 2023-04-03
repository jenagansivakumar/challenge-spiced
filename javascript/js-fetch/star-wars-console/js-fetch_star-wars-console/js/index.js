// console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("bad request");
    } else {
      const starWarsData = await response.json();
      // log of the whole object
      console.log("starWarsData ", starWarsData);
      console.log(starWarsData.results[4].name, starWarsData.results[4].height);
      console.log(starWarsData.results[2].name, starWarsData.results[2].height);

      console.log(starWarsData.results[2].eye_color);
    }
  } catch (e) {
    console.error(e);
  }
}

fetchData();
