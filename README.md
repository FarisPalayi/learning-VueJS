### I'm learning VueJS. And as I learn new stuff, I'll add new things to this website🎉
🔗[Live site link](https://learning-vuejs-app.netlify.app/)

### Component Template/Structure

```js
// ComponentName.js
const options = {
  data() {
    return {
      // ...
    };
  },
  methods: {
    // ...
  },
  // ...
};

const ComponentName = {
  ...options,
  template: `<div>html goes here</div>`,
};

export default Vue.component("component-name", ComponentName); // Vue is loaded via `<script>` tag.
```

```js
// main.js
import routes from "routes.js";
import ComponentName.js from "ComponentName.js"; // just import new components

const router = new VueRouter({ routes });

new Vue({ router }).$mount("#app");
```
