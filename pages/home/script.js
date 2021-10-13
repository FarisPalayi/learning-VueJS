import routes from "../../routes/routes.js";
import navigationBar from "./navigation-bar.js";
import home from "./home.js";

const router = new VueRouter({ routes });

new Vue({ router }).$mount("#app");
