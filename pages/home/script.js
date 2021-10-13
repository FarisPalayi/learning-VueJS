import navigationBar from "./navigation-bar.js";
import routes from "../../routes/routes.js";

const router = new VueRouter({ routes });

Vue.component("navigation-bar", navigationBar);

const vm = new Vue({
  router,
}).$mount("#app");
