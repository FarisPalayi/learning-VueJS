import Home from "../pages/home/home.js"
// import Cards from "../pages/cards/cards.js"
const Cards = { template: "<h2>Cards</h2>" };

export default [
  { path: "/", component: Home },
  { path: "/cards", component: Cards },
];
