import Home from "../pages/Home/Home.js";
import Cards from "../pages/Cards/Cards.js";
import Todo from "../pages/Todo/Todo.js";
import Blog from "../pages/Blog/Blog.js";
import FullArticle from "../components/Blog/FullArticle/FullArticle.js";
import WriteBlog from "../components/Blog/WriteBlog/WriteBlog.js";
import Search from "../pages/Search/Search.js";

export default [
  { path: "/", component: Home, name: "Home" },
  { path: "/cards", component: Cards, name: "Cards" },
  { path: "/todo", component: Todo, name: "Todo" },
  {
    path: "/blog",
    component: Blog,
    name: "Blog",
    children: [
      { path: "write", component: WriteBlog },
      { path: "article/:id", component: FullArticle },
    ],
  },
  { path: "/search", component: Search, name: "Words" },
];
