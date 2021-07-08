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
    tabindex: 0,
  },

  methods: {
    addItem() {
      if (this.newTodoText.trim() === "") return;
      this.items.push({ id: this.nextTodoId++, text: this.newTodoText, isChecked: false });
      this.newTodoText = "";
      this.addToLocalStorage();
    },
    tic(e) {
      const id = e.target.getAttribute('id');
      let currentItem = this.items[id]
      
      e.target.checked = !(currentItem.isChecked); // toggle check when press enter
      currentItem.isChecked = e.target.checked; // update state

      this.addToLocalStorage();
    },
    navigate(e) {
      e.target.focus();
    },
    setFocus(e) {
      const totalNumberOfLists = this.items.length;

      if (e.key === 'ArrowDown') {
        this.currentFocus++
        if (this.currentFocus > totalNumberOfLists) this.currentFocus = 1
      }
      if (e.key === 'ArrowUp') {
        this.currentFocus--
        if (this.currentFocus < 1) this.currentFocus = totalNumberOfLists
      }
    },
    addToLocalStorage() {
      localStorage.setItem('todoList', JSON.stringify(this.items));
    },
  },
  mounted() {
    const todoListFromLocalStorage = localStorage.getItem('todoList');
    if (todoListFromLocalStorage) {
      try {
        this.items = JSON.parse(todoListFromLocalStorage)

      } catch (error) {
        console.error('Error parsing localStorage data')
        localStorage.clear();
        console.warn('%clocalStorage data is automatically cleared', 'color: lime; font-weight: bold');
      }
    }
  }
});

Vue.component('hyperlink', {
  template: '<a href="../index.html" class="hyperlink">home 🏠</a>'
})

let footer = new Vue({
  el: '#footer',
})