let vm = new Vue({
  el: "#app",
  data: {
    placeholder: "Add a todo ⌨",
    items: [
      { id: 0, text: "first todo item", isChecked: false },
      { id: 1, text: "second todo item", isChecked: false },
      { id: 2, text: "third todo item", isChecked: false },
    ],
    nextTodoId: 4,
    newTodoText: "",
  },
  methods: {
    addItem: function () {
      if (this.newTodoText === "") return;
      this.items.push({ id: this.nextTodoId++, text: this.newTodoText });
      this.newTodoText = "";
    },
  },
});

Vue.component('hyperlink', {
  template: '<a href="../index.html" class="hyperlink">home 🏠</a>'
})
let footer = new Vue({
  el: '#footer',
})