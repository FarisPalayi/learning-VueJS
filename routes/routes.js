import Home from "../Pages/Home/Home.js"
import Cards from "../Pages/Cards/Cards.js"
import Todo from "../Pages/Todo/Todo.js";
import Likes from "../Pages/Likes/Likes.js";
import Blog from "../Pages/Blog/Blog.js";
import FullArticle from "../components/Blog/FullArticle/FullArticle.js";
import WriteBlog from "../components/Blog/WriteBlog/WriteBlog.js";

export default [
  { path: "/",        component: Home,       name: "Home"  },
  { path: "/cards",   component: Cards,      name: "Cards" },
  { path: "/todo",    component: Todo,       name: "Todo"  },
  { path: "/blog",    component: Blog,       name: "Blog"  },
  { path: "/article", component: FullArticle               }, // if no name specified, it'll not be included in the navbar links
  { path: "/likes",   component: Likes,      name: "Likes" },
  { path: "/write",   component: WriteBlog,                },
];
