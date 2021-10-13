import routes from "../routes/routes.js";
import NavigationBar from "../components/NavigationBar/NavigationBar.js";
import Home from "./Home/Home.js";

const router = new VueRouter({ routes });

new Vue({ router }).$mount("#app");
