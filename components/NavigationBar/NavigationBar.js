import routes from "../../routes/routes.js";

const { data } = {
  data() {
    return {
      navList: routes,
    };
  },
};

const navigationBar = {
  data,
  template: `
    <header class="nb-header">
      <nav class="nb-nav">
        <ul class="nb-nav__list">
          <li class="nb-nav__item" v-for="route in navList">
            <router-link :to="route.path" class="nb-nav__link">
            {{ route.name }}
          </router-link>
          </li>
        </ul>
      </nav>
    </header>
  `,
};

export default Vue.component("navigation-bar", navigationBar);
