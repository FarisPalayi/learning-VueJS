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
    currentFocus: 0,
    tabindex: 0
  },
  methods: {
    addItem: function () {
      if (this.newTodoText === "") return;
      this.items.push({ id: this.nextTodoId++, text: this.newTodoText });
      this.newTodoText = "";
    },
    tic: function(e) {
      e.target.checked = !e.target.checked;
    },
    navigate: function(e) {
      e.target.focus();
    },
    setFocus: function (e) {
      let totalNumberOfLists = this.items.length;

      if (e.key === 'ArrowDown') {
        this.currentFocus++
        if (this.currentFocus > totalNumberOfLists) this.currentFocus = 1
      }
      if (e.key === 'ArrowUp') {
        this.currentFocus--
        if (this.currentFocus < 1) this.currentFocus = totalNumberOfLists
      }

      console.log(this.currentFocus);
      
      // if(this.currentFocus === this.items.id) {
      //   console.log(true);
      //   return focus()
      // }
    }
  },
});

Vue.component('hyperlink', {
  template: '<a href="../index.html" class="hyperlink">home 🏠</a>'
})
let footer = new Vue({
  el: '#footer',
})