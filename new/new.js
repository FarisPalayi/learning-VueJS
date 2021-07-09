// STORE - doesn't do anything
const store = new Vuex.Store({
  state: {
    count: 0,
    items: ["item1", "item2", "item3"],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  getters: {
    lastRemoved(state) {
      return state.items.pop();
    },
  },
});

// COMPONENTS
Vue.component("card", {
  template: `<div class='card'>
        <slot></slot>
     </div>`,
});

store.commit("increment");

// Actions
let vm = new Vue({
  el: "#app",
  store,
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
});

Vue.component("hyperlink", {
  template: '<a href="../store/store.html" class="hyperlink">Store</a>',
});

let footer = new Vue({
  el: "#footer",
});
