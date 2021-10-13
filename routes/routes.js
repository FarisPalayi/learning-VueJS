import Home from "../pages/Home/Home.js"
import Cards from "../pages/Cards/Cards.js"
import Todo from "../pages/Todo/Todo.js";
import Likes from "../pages/Likes/Likes.js";

export default [
  { path: "/", component: Home, name: "Home" },
  { path: "/cards", component: Cards, name: "Cards" },
  { path: "/todo", component: Todo, name: "Todo" },
  { path: "/likes", component: Likes, name: "Likes" },
];
