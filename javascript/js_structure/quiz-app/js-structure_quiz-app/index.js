// Store the cards in a global state
import { cards } from "./utils/cards.js";
import { Header } from "./components/Header/header.js";
import { Form } from "./components/Form/form.js";
import { Bookmark } from "./components/Bookmark/bookmark.js";
import { Card } from "./components/Card/card.js";
import { CardList } from "./components/CardList/cardlist.js";
import { App } from "./components/App/app.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
