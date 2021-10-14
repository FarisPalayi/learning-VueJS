import Home from "../pages/Home/Home.js"
import Cards from "../pages/Cards/Cards.js"
import Todo from "../pages/Todo/Todo.js";
import Likes from "../pages/Likes/Likes.js";
import Blog from "../pages/Blog/Blog.js";
import FullArticle from "../components/Blog/FullArticle/FullArticle.js";

export default [
  { path: "/", component: Home, name: "Home" },
  { path: "/cards", component: Cards, name: "Cards" },
  { path: "/todo", component: Todo, name: "Todo" },
  { path: "/blog", component: Blog, name: "Blog" },
  { path: "/article", component: FullArticle }, // if no name specified, it'll not be included in the navbar links
  { path: "/likes", component: Likes, name: "Likes" },
];
