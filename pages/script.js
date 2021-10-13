import routes from "../routes/routes.js";
import navigationBar from "../components/base/navigation-bar/navigation-bar.js";
import home from "./home/home.js";

const router = new VueRouter({ routes });

new Vue({ router }).$mount("#app");
