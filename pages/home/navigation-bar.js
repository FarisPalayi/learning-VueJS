const navigationBar = {
  template: `
    <header class="nb-header">
      <nav class="nb-nav">
        <ul class="nb-nav__list">
          <li class="nb-nav__item">
            <router-link to="/" class="nb-nav__link">Home</router-link>
          </li>
          <li class="nb-nav__item">
            <router-link to="/cards" class="nb-nav__link">Cards</router-link>
          </li>
          <li class="nb-nav__item">
            <router-link to="/likes" class="nb-nav__link">Likes</router-link>
          </li>
        </ul>
      </nav>
    </header>
  `,
};

export default Vue.component("navigation-bar", navigationBar);
