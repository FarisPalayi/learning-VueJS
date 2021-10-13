// import Home from "../pages/home/home.js"
// import Cards from "../pages/cards/cards.js"
const Home = { template: "<h2>Home</h2>" };
const Cards = { template: "<h2>Cards</h2>" };

export default [
  { path: "/", component: Home },
  { path: "/cards", component: Cards },
];
